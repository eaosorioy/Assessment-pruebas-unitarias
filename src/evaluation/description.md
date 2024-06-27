// import androidx.lifecycle.MutableLiveData
// import androidx.lifecycle.ViewModel

// class UserViewModel(private val userRepository: UserRepository) : ViewModel() {
//     val userLiveData = MutableLiveData<User>()

//     fun loadUser(userId: Int) {
//         val user = userRepository.getUserById(userId)
//         userLiveData.value = user
//     }
//     fun updateUser(user: User) {
//         userRepository.updateUser(user)
//         userLiveData.value = user
//     }
// }

// interface UserRepository {
//     fun getUserById(id: Int): User?
//     fun updateUser(user: User)
// }

// data class User(val id: Int, val name: String, val email: String)
