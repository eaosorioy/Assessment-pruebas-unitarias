import User from './User';
import { UserLiveData } from './interfaces';


function MutableLiveData(): UserLiveData {
    return {
        value: new User(0, '', '')
    };
}

export default MutableLiveData;
