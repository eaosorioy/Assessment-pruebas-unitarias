import { describe, expect, it } from 'vitest';
import UserViewModel from '../UserViewModel';
import { MockUserRepository, mockUserId, mockUserById } from './mocks';

describe('UserViewModel', () => {

    describe('loadUser', () => {
        //Verificar que loadUser actualiza correctamente userLiveData con el usuario obtenido del repositorio.
        it('Shoudl return user from repository and update userLiveData', () => {
            // Arrange
            MockUserRepository.getUserById.mockReturnValue(mockUserById)
            const userViewModel = new UserViewModel(MockUserRepository);

            // Act
            userViewModel.loadUser(mockUserId);

            // Assert
            expect(userViewModel._userLiveData).toMatchObject({ value: mockUserById });
        })

        it('Verify behavior when the user is not found in the repository.'), () => {
            // Arrange
            MockUserRepository.getUserById.mockReturnValue(null)
            const userViewModel = new UserViewModel(MockUserRepository);
    
            // Act
            userViewModel.loadUser(mockUserId);
    
            // Assert
            expect(userViewModel._userLiveData).toMatchObject({ value: null });
        }
    });


    describe('UpdateUser', () => {    
        it('Should update the user in the repository and in userLiveData', () => {
            // Arrange
            const updatedUser = { ...mockUserById, name: 'Jane Doe' };
            MockUserRepository.updateUser.mockReturnValue(updatedUser);
            const userViewModel = new UserViewModel(MockUserRepository);
            userViewModel._userLiveData.value = mockUserById;

            // Assert initial value
            expect(userViewModel._userLiveData).toMatchObject({ value: mockUserById });
        
            // Act
            userViewModel.updateUser(updatedUser);
        
            // Assert
            expect(MockUserRepository.updateUser).toHaveBeenCalledWith(updatedUser);
            expect(userViewModel._userLiveData).toMatchObject({ value: updatedUser });
        });
    });
});
