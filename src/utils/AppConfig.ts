import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

const localePrefix: LocalePrefix = 'as-needed';

// Update this configuration file based on your project information
export const AppConfig = {
  name: 'Jibhi.ai',
  locales: [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'Français' },
    { id: 'es', name: 'Español' },
    { id: 'hi', name: 'हिन्दी' },
  ],
  defaultLocale: 'en',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);
