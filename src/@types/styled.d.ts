import 'styled-components';
import { defaultTheme } from '../styles/themes';

type IDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
