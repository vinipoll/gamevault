import { describe, it, expect, beforeEach } from "vitest";
import * as userService from '../user.service.js';

describe('User Service - Cadastro', () => {

    let mockUserModel;

    beforeEach(() => {
        // mock do modelo sequelize
        mockUserModel = {
            findOne: vi.fn(),
            create: vi.fn()
        };
    });

    it('Red - deve retornar erro se as senhas forem diferentes', async() => {
        const data = {
            username: 'jacksparrow',
            email: 'jacksparrow@gmail.com',
            password: '12345678',
            confirmPassword: '87654321',
            fullName: 'Jack Sparrow'
        };

        // tenta chamar a função 'register' e espera que de erro
        // devido às senhas diferentes
        await expect(userService.register(data, mockUserModel))
            .rejects
            .toThrow('As senhas não coincidem.');
    });
});