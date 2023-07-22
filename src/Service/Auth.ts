import api from '@/http/axios';
import { AxiosResponse } from 'axios'
import { AuthRes } from '@/models/AuthRes/AuthRes';

export default class Auth {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthRes>> {
        return api.post<AuthRes>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthRes>> {
        return api.post<AuthRes>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return api.post('/logout')
    }


}