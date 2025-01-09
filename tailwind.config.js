import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        ...colors,
        anti_flash_white: {
          DEFAULT: '#eeeced',
          900: '#322d2f',
          800: '#65595f',
          700: '#95888e',
          600: '#c2babe',
          500: '#eeeced',
          400: '#f2f0f1',
          300: '#f5f4f4',
          200: '#f8f7f8',
          100: '#fcfbfb'
        },
        timberwolf: {
          DEFAULT: '#ddd7d2',
          900: '#312b25',
          800: '#63554b',
          700: '#948071',
          600: '#b9aca2',
          500: '#ddd7d2',
          400: '#e5e0dc',
          300: '#ebe8e5',
          200: '#f2efee',
          100: '#f8f7f6'
        },
        pale_dogwood: {
          DEFAULT: '#d6c1bb',
          900: '#32231e',
          800: '#65453c',
          700: '#97685b',
          600: '#b9948a',
          500: '#d6c1bb',
          400: '#dfcec9',
          300: '#e7dad7',
          200: '#efe7e4',
          100: '#f7f3f2'
        },
        rose_ebony: {
          DEFAULT: '#6d4d49',
          900: '#16100f',
          800: '#2c1f1d',
          700: '#422f2c',
          600: '#583e3b',
          500: '#6d4d49',
          400: '#956964',
          300: '#b18e89',
          200: '#cbb4b1',
          100: '#e5d9d8'
        },
        blue_green: {
          DEFAULT: '#5399ae',
          900: '#101e23',
          800: '#213d45',
          700: '#315b68',
          600: '#417a8b',
          500: '#5399ae',
          400: '#74adbe',
          300: '#97c1ce',
          200: '#bad6de',
          100: '#dceaef'
        },
        ucla_blue: {
          DEFAULT: '#3e6f95',
          900: '#0c161d',
          800: '#192c3b',
          700: '#254258',
          600: '#315876',
          500: '#3e6f95',
          400: '#558db8',
          300: '#80aaca',
          200: '#aac6db',
          100: '#d5e3ed'
        },
        lapis_lazuli: {
          DEFAULT: '#396080',
          900: '#0b1319',
          800: '#172633',
          700: '#22394c',
          600: '#2e4c65',
          500: '#396080',
          400: '#4d81ac',
          300: '#78a1c2',
          200: '#a5c0d7',
          100: '#d2e0eb'
        },
        melon: {
          DEFAULT: '#e2ae99',
          900: '#3b1d11',
          800: '#763921',
          700: '#b15632',
          600: '#d17e5d',
          500: '#e2ae99',
          400: '#e8bdac',
          300: '#edcec1',
          200: '#f3ded6',
          100: '#f9efea'
        },
        burnt_sienna: {
          DEFAULT: '#f18465',
          900: '#3f1206',
          800: '#7d240c',
          700: '#bc3611',
          600: '#eb5126',
          500: '#f18465',
          400: '#f49c84',
          300: '#f6b5a3',
          200: '#f9cec1',
          100: '#fce6e0'
        },
        indian_red: {
          DEFAULT: '#cb6256',
          900: '#2c110e',
          800: '#59211b',
          700: '#853229',
          600: '#b24337',
          500: '#cb6256',
          400: '#d68279',
          300: '#e0a19a',
          200: '#eac1bc',
          100: '#f5e0dd'
        }
      }
    }
  }
};
