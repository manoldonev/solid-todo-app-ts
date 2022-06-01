const defaultTheme = require('tailwindcss/defaultTheme');

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: withOpacityValue('--color-primary'),
      'primary-variant': withOpacityValue('--color-primary-variant'),
      'on-primary': withOpacityValue('--color-on-primary'),
      'primary-container': withOpacityValue('--color-primary-container'),
      'on-primary-container': withOpacityValue('--color-on-primary-container'),
      secondary: withOpacityValue('--color-secondary'),
      'secondary-variant': withOpacityValue('--color-secondary-variant'),
      'on-secondary': withOpacityValue('--color-on-secondary'),
      'secondary-container': withOpacityValue('--color-secondary-container'),
      'on-secondary-container': withOpacityValue('--color-on-secondary-container'),
      tertiary: withOpacityValue('--color-tertiary'),
      'on-tertiary': withOpacityValue('--color-on-tertiary'),
      'tertiary-container': withOpacityValue('--color-tertiary-container'),
      'on-tertiary-container': withOpacityValue('--color-on-tertiary-container'),
      error: withOpacityValue('--color-error'),
      'on-error': withOpacityValue('--color-on-error'),
      'error-container': withOpacityValue('--color-error-container'),
      'on-error-container': withOpacityValue('--color-on-error-container'),
      background: withOpacityValue('--color-background'),
      'on-background': withOpacityValue('--color-on-background'),
      surface: withOpacityValue('--color-surface'),
      'on-surface': withOpacityValue('--color-on-surface'),
      outline: withOpacityValue('--color-outline'),
      'surface-variant': withOpacityValue('--color-surface-variant'),
      'on-surface-variant': withOpacityValue('--color-on-surface-variant'),
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
