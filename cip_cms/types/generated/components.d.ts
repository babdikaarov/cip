import type { Schema, Struct } from "@strapi/strapi";

export interface GroupFooter extends Struct.ComponentSchema {
   collectionName: "components_group_footers";
   info: {
      description: "";
      displayName: "Footer";
      icon: "bulletList";
   };
   attributes: {
      Contacts: Schema.Attribute.Component<"shared.contacts", false> & Schema.Attribute.Required;
      Icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
      LegalTerms: Schema.Attribute.Component<"shared.legal-terms", false> & Schema.Attribute.Required;
      Navigation: Schema.Attribute.Component<"shared.navigation", false>;
      UsefullLinks: Schema.Attribute.Component<"shared.usefull-links", false>;
   };
}

export interface GroupHeader extends Struct.ComponentSchema {
   collectionName: "components_group_headers";
   info: {
      displayName: "Header";
      icon: "bulletList";
   };
   attributes: {
      Action: Schema.Attribute.Component<"shared.action-call", false> & Schema.Attribute.Required;
      i18nLocale: Schema.Attribute.Component<"shared.i18n-locale", false> & Schema.Attribute.Required;
      Navigation: Schema.Attribute.Component<"shared.navigation", false> & Schema.Attribute.Required;
      Title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedActionCall extends Struct.ComponentSchema {
   collectionName: "components_shared_action_calls";
   info: {
      displayName: "actionCall";
      icon: "exit";
   };
   attributes: {
      login: Schema.Attribute.String & Schema.Attribute.Required;
      register: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedContacts extends Struct.ComponentSchema {
   collectionName: "components_shared_contacts";
   info: {
      displayName: "Contacts";
      icon: "phone";
   };
   attributes: {
      Address: Schema.Attribute.String & Schema.Attribute.Required;
      Email: Schema.Attribute.Email & Schema.Attribute.Required;
      i18nContacts: Schema.Attribute.String & Schema.Attribute.Required;
      Phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
   };
}

export interface SharedI18NLocale extends Struct.ComponentSchema {
   collectionName: "components_shared_i18n_locales";
   info: {
      displayName: "i18nLocale";
      icon: "earth";
   };
   attributes: {
      english: Schema.Attribute.String & Schema.Attribute.Required;
      kyrgyz: Schema.Attribute.String & Schema.Attribute.Required;
      russian: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedLegalTerms extends Struct.ComponentSchema {
   collectionName: "components_shared_legal_terms";
   info: {
      description: "";
      displayName: "LegalTerms";
      icon: "bulletList";
   };
   attributes: {
      copyrights: Schema.Attribute.String & Schema.Attribute.Required;
      DataUsage: Schema.Attribute.String & Schema.Attribute.Required;
      PrivacyPolicy: Schema.Attribute.String & Schema.Attribute.Required;
      TermsOfUse: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedNavigation extends Struct.ComponentSchema {
   collectionName: "components_shared_navigations";
   info: {
      displayName: "navigation";
      icon: "bulletList";
   };
   attributes: {
      about: Schema.Attribute.String & Schema.Attribute.Required;
      blog: Schema.Attribute.String & Schema.Attribute.Required;
      main: Schema.Attribute.String & Schema.Attribute.Required;
      residents: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedUrLs extends Struct.ComponentSchema {
   collectionName: "components_shared_ur_ls";
   info: {
      description: "";
      displayName: "URLs";
      icon: "link";
   };
   attributes: {
      URL: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedUsefullLinks extends Struct.ComponentSchema {
   collectionName: "components_shared_usefull_links";
   info: {
      description: "";
      displayName: "UsefullLinks";
      icon: "link";
   };
   attributes: {
      i18nUsefullLinks: Schema.Attribute.String & Schema.Attribute.Required;
      URLs: Schema.Attribute.Component<"shared.ur-ls", true> & Schema.Attribute.Required;
   };
}

declare module "@strapi/strapi" {
   export module Public {
      export interface ComponentSchemas {
         "group.footer": GroupFooter;
         "group.header": GroupHeader;
         "shared.action-call": SharedActionCall;
         "shared.contacts": SharedContacts;
         "shared.i18n-locale": SharedI18NLocale;
         "shared.legal-terms": SharedLegalTerms;
         "shared.navigation": SharedNavigation;
         "shared.ur-ls": SharedUrLs;
         "shared.usefull-links": SharedUsefullLinks;
      }
   }
}
