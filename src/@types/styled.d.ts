import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type IDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
