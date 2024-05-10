import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import Theme from '../src/Theme';

/* TODO: update import for your custom theme configurations */
export const parameters = {
  parameters:{
    backgrounds:{
      default:'dark',
      values:[
        {name:'green',value:'#00ff1a'},
        {name:'purple',value:'#800080'},
        {name:'dark',value:'#333'},
        {name:'white',value:'#fff'}
      ],
    },
  },
}

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



