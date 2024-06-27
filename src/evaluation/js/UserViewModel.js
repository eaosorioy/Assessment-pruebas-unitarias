import MutableLiveData from './androidx.lifecycle.MutableLiveData';

class UserViewModel {
    constructor (userRepository) {
        this._userRepository = userRepository;
        this._userLiveData = MutableLiveData();
    }

    loadUser(userId) {
        const user = this._userRepository.getUserById(userId);
        this._userLiveData.value = user;
    }

    updateUser(user) {
        this._userRepository.updateUser(user);
        this._userLiveData.value = user;
    }
}

export default UserViewModel;
