const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const tokenService = require('../service/tokenService')
const userDto = require('../dtos/userDto')
class UserService {
    async registration(email, password) {
        const alreadyUser = await userModel.findOne({email})
        if (alreadyUser){
            throw new Error(`Пользователь с адресом ${email} уже зарегистрирован`)
        }
        const hashPass = bcrypt.hashSync(password, 3)
        const user = await userModel.create({email, password: hashPass})
        const UserDto = new userDto(user)
        const tokens = tokenService.generateTokens({...UserDto})
        await tokenService.saveToken(UserDto.id, tokens.refreshToken)

        return{
            ...tokens,
            user: UserDto
        }
    }

    async login(email, password) {
        const user = await userModel.findOne({email})
        if (!user){
            throw new Error('Пользователь с такой почтой не найден')
        }
        const passwordEquals = await bcrypt.compare(password, user.password)
        if (!passwordEquals){
            throw new Error('Неправильный пароль')
        }
        const UserDto = new userDto(user)
        const tokens = tokenService.generateTokens({...UserDto})
        await tokenService.saveToken(UserDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: UserDto
        }
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
    }
    async refresh(refreshToken) {
        if (!refreshToken){
            throw new Error('Пользователь не авторизован')
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenInDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenInDB) {
            throw new Error('Пользователь не зарегистрирован или не авторизован')
        }
        const user = await userModel.findById(userData.id)
        const UserDto = new userDto(user)
        const tokens = tokenService.generateTokens({...UserDto})
        await tokenService.saveToken(UserDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: UserDto
        }
    }
}

module.exports = new UserService()