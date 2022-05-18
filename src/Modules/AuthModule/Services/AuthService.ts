import {BehaviorSubject} from 'rxjs';
import {AUTH_STATE} from '../Types/CommonTypes';
import PersistStorage from 'src/Utils/PersistStorage';

class AuthService {
  queryKeys = {};
  authState$;
  initialAuthState = {
    loggedIn: false,
    user: undefined,
    token: '',
  };

  constructor() {
    this.authState$ = new BehaviorSubject<AUTH_STATE>(this.initialAuthState);
    const persistStorage = new PersistStorage('authState', this.authState$);
    persistStorage.init();
  }

  resetAuthValue = () => {
    this.authState$.next(this.initialAuthState);
  };
}

export default new AuthService();
