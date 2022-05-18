import {StyleSheet} from 'react-native';
import {BehaviorSubject} from 'rxjs';
import {DayTheme} from '../Config/Theme';
import {THEME_TYPE} from '../Types/CommonTypes';

class ThemeService {
  theme$ = new BehaviorSubject<THEME_TYPE>(DayTheme);
  create = StyleSheet.create;

  constructor() {
    // const colorScheme = Appearance.getColorScheme();
    // this.theme$ = new BehaviorSubject<THEME_TYPE>(
    //   colorScheme === 'dark' ? NightTheme : DayTheme,
    // );
    // this.handleDynamicChanges();
  }

  // handleDynamicChanges = () => {
  //   Appearance.addChangeListener(({colorScheme}) => {
  //     if (colorScheme === 'dark') {
  //       this.theme$.next(NightTheme);
  //     } else {
  //       this.theme$.next(DayTheme);
  //     }
  //   });
  // };

  // toggleTheme = () => {
  //   const {type} = this.theme$.getValue();
  //   this.theme$.next(type === 'dark' ? DayTheme : NightTheme);
  // };
}

export default new ThemeService();
