import { vitest } from 'vitest';

export const MockUserRepository = {
    getUserById: vitest.fn(),
    updateUser: vitest.fn()
}

export const mockUserId = 'ldsnmfkksvhjkfvjsdjvkbsksbvchjjwuik298r2347r5';
export const mockUserById = {
    id: mockUserId,
    name: 'Andrea Osorio',
    email: 'exeosorio@consubanco.com',
};
