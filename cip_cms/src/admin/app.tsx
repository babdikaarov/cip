import type { StrapiApp } from "@strapi/strapi/admin";
import AuthLogo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";
export default {
   config: {
      auth: {
         logo: AuthLogo,
      },
      head: {
         favicon: favicon,
      },
      menu: {
         logo: AuthLogo,
      },
      tutorials: false,
      notifications: { releases: false },
      locales: [
         // 'ar',
         // 'fr',
         // 'cs',
         // 'de',
         // 'dk',
         // 'es',
         // 'he',
         // 'id',
         // 'it',
         // 'ja',
         // 'ko',
         // 'ms',
         // 'nl',
         // 'no',
         // 'pl',
         // 'pt-BR',
         // 'pt',
         "ru",
         // 'sk',
         // 'sv',
         // 'th',
         // 'tr',
         // 'uk',
         // 'vi',
         // 'zh-Hans',
         // 'zh',
      ],
   },
   bootstrap(app: StrapiApp) {
      console.log(app);
   },
};
