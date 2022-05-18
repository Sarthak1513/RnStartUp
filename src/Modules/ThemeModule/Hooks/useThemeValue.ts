import useObervableValue from 'src/Hooks/useObervableValue';
import ThemeService from '../Services/ThemeService';
import {THEME_TYPE, VARIANT} from '../Types/CommonTypes';

function useThemeValue(): THEME_TYPE {
  return useObervableValue(ThemeService.theme$);
}

export default useThemeValue;

export const getThemeValue = () => ThemeService.theme$.getValue();

export const getVariantValue = (variant: VARIANT) =>
  ThemeService.theme$.getValue().colors[variant];
