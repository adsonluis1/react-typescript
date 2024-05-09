import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import Theme from '../src/Theme';

/* TODO: update import for your custom theme configurations */


/* TODO: replace with your own global styles, or remove */
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  `;

export const decorators = [withThemeFromJSXProvider({
    themes: {
      Theme
    },
    defaultTheme: 'noSelect',
    Provider: ThemeProvider,
    GlobalStyles,
    })]



