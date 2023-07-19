const jwt = require('jsonwebtoken')
const tokenModel = require('../models/tokenModel')
class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.ACCESS_KEY, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.REFRESH_KEY, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userId, refreshToken})
        return token
    }
    async removeToken(refreshToken) {
        const tokenData = await tokenModel.deleteOne({refreshToken})
        return tokenData
    }
    async findToken(refreshToken) {
        const tokenData = await tokenModel.findOne({refreshToken})
        return tokenData
    }
    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.ACCESS_KEY)
            return userData
        } catch (e) {
            return null
        }
    }
    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.REFRESH_KEY)
            return userData
        } catch (e) {
            return null
        }
    }
}

module.exports = new TokenService()