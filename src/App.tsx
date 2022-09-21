import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import { ThemeProvider } from 'styled-components';

// STYLES
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes';

// COMPONENTS

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}
