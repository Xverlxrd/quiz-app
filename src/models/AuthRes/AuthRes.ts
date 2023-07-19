export interface IUser {
    email: string
    id: string
}
export interface AuthRes {
    accessToken: string
    refreshToken: string
    user: IUser
}