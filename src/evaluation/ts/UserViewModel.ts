import MutableLiveData from './androidx.lifecycle.MutableLiveData';
import { UserLiveData, UserRepository } from './interfaces';

class UserViewModel {
    public _userLiveData: UserLiveData;

    constructor (public userRepository: UserRepository) {
        this._userLiveData = MutableLiveData();
    }

    loadUser(userId) {
        const user = this.userRepository.getUserById(userId);
        this._userLiveData.value = user;
    }

    updateUser(user) {
        this.userRepository.updateUser(user);
        this._userLiveData.value = user;
    }
}

export default UserViewModel;
