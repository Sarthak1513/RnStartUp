import useObervableValue from 'src/Hooks/useObervableValue';
import AuthService from '../Services/AuthService';
import {AUTH_STATE} from '../Types/CommonTypes';

function useAuthValue(): AUTH_STATE {
  return useObervableValue(AuthService.authState$);
}

export default useAuthValue;

export const getAuthValue = () => AuthService.authState$.getValue();

export const setAuthValue = (authState: AUTH_STATE) =>
  AuthService.authState$.next(authState);

export const resetAuthValue = () => AuthService.resetAuthValue();
