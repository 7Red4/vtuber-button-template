// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          anti_flash_white: '#eeeced',
          timberwolf: '#ddd7d2',
          pale_dogwood: '#d6c1bb',
          rose_ebony: '#6d4d49',
          blue_green: '#5399ae',
          ucla_blue: '#3e6f95',
          lapis_lazuli: '#396080',
          melon: '#e2ae99',
          burnt_sienna: '#f18465',
          indian_red: '#cb6256'
        }
      }
    }
  }
});
