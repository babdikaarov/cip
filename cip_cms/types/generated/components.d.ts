import type { Schema, Struct } from "@strapi/strapi";

export interface CtaCta extends Struct.ComponentSchema {
   collectionName: "components_cta_ctas";
   info: {
      displayName: "CTA";
   };
   attributes: {
      title: Schema.Attribute.String;
      type: Schema.Attribute.Enumeration<["primary", "secondary"]>;
      URL: Schema.Attribute.String;
   };
}

export interface GroupFooter extends Struct.ComponentSchema {
   collectionName: "components_group_footers";
   info: {
      description: "";
      displayName: "Footer";
      icon: "bulletList";
   };
   attributes: {
      Appreciation: Schema.Attribute.Component<"shared.appreciation", false> & Schema.Attribute.Required;
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
      description: "";
      displayName: "Header";
      icon: "bulletList";
   };
   attributes: {
      i18nLocale: Schema.Attribute.Component<"shared.i18n-locale", false> & Schema.Attribute.Required;
      login: Schema.Attribute.Component<"cta.cta", false>;
      Navigation: Schema.Attribute.Component<"shared.navigation", false> & Schema.Attribute.Required;
      Title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface HeroHero extends Struct.ComponentSchema {
   collectionName: "components_hero_heroes";
   info: {
      displayName: "Hero";
   };
   attributes: {
      title: Schema.Attribute.String;
   };
}

export interface HeroTaxCategories extends Struct.ComponentSchema {
   collectionName: "components_hero_tax_categories";
   info: {
      description: "";
      displayName: "taxCategories";
   };
   attributes: {
      taxType: Schema.Attribute.String;
      taxValue: Schema.Attribute.String;
   };
}

export interface HeroTaxintro extends Struct.ComponentSchema {
   collectionName: "components_hero_taxintros";
   info: {
      description: "";
      displayName: "taxintro";
   };
   attributes: {
      taxCategories: Schema.Attribute.Component<"hero.tax-categories", true> &
         Schema.Attribute.SetMinMax<
            {
               max: 4;
            },
            number
         >;
      title: Schema.Attribute.String;
   };
}

export interface MembershipDocuments extends Struct.ComponentSchema {
   collectionName: "components_membership_documents";
   info: {
      description: "";
      displayName: "Documents";
   };
   attributes: {
      title: Schema.Attribute.String & Schema.Attribute.Required;
      URLs: Schema.Attribute.Component<"membership.requirement-list", true>;
   };
}

export interface MembershipRequirement extends Struct.ComponentSchema {
   collectionName: "components_membership_requirements";
   info: {
      description: "";
      displayName: "Requirement";
   };
   attributes: {
      cards: Schema.Attribute.Component<"membership.requirement-card", true> & Schema.Attribute.Required;
      note: Schema.Attribute.Text & Schema.Attribute.Required;
      title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface MembershipRequirementCard extends Struct.ComponentSchema {
   collectionName: "components_membership_requirement_cards";
   info: {
      description: "";
      displayName: "RequirementCard";
   };
   attributes: {
      list: Schema.Attribute.Component<"membership.requirement-list", true> & Schema.Attribute.Required;
      title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface MembershipRequirementList extends Struct.ComponentSchema {
   collectionName: "components_membership_requirement_lists";
   info: {
      displayName: "RequirementList";
   };
   attributes: {
      list: Schema.Attribute.Text & Schema.Attribute.Required;
   };
}

export interface MembershipStepsCard extends Struct.ComponentSchema {
   collectionName: "components_membership_steps_cards";
   info: {
      displayName: "stepsCard";
   };
   attributes: {
      button: Schema.Attribute.String & Schema.Attribute.Required;
      context: Schema.Attribute.Text & Schema.Attribute.Required;
      step: Schema.Attribute.Integer &
         Schema.Attribute.Required &
         Schema.Attribute.Unique &
         Schema.Attribute.SetMinMax<
            {
               min: 1;
            },
            number
         >;
      title: Schema.Attribute.String & Schema.Attribute.Required;
      Url: Schema.Attribute.String;
   };
}

export interface MembershipStepsToMembership extends Struct.ComponentSchema {
   collectionName: "components_membership_steps_to_memberships";
   info: {
      description: "";
      displayName: "StepsToMembership";
   };
   attributes: {
      card: Schema.Attribute.Component<"membership.steps-card", true>;
      title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SectionsAbout extends Struct.ComponentSchema {
   collectionName: "components_sections_abouts";
   info: {
      description: "";
      displayName: "about";
   };
   attributes: {
      button: Schema.Attribute.Component<"cta.cta", false>;
      Description: Schema.Attribute.Text;
   };
}

export interface SectionsActionCall extends Struct.ComponentSchema {
   collectionName: "components_sections_action_calls";
   info: {
      displayName: "ActionCall";
   };
   attributes: {
      button: Schema.Attribute.Component<"cta.cta", false>;
      Image: Schema.Attribute.Media<"images">;
      Title: Schema.Attribute.String;
   };
}

export interface SectionsFaq extends Struct.ComponentSchema {
   collectionName: "components_sections_faqs";
   info: {
      description: "";
      displayName: "FAQ";
   };
   attributes: {
      QA: Schema.Attribute.Component<"shared.td", true>;
      Title: Schema.Attribute.String;
   };
}

export interface SectionsHighlights extends Struct.ComponentSchema {
   collectionName: "components_sections_highlights";
   info: {
      displayName: "highlights";
   };
   attributes: {
      testimonial: Schema.Attribute.Component<"shared.simple-card", true>;
   };
}

export interface SectionsHistory extends Struct.ComponentSchema {
   collectionName: "components_sections_histories";
   info: {
      displayName: "History";
   };
   attributes: {
      History: Schema.Attribute.Component<"shared.td", false>;
   };
}

export interface SectionsImpact extends Struct.ComponentSchema {
   collectionName: "components_sections_impacts";
   info: {
      description: "";
      displayName: "Impact";
   };
   attributes: {
      list: Schema.Attribute.Component<"shared.description", true>;
      Markdown: Schema.Attribute.RichText;
      TextJson: Schema.Attribute.Blocks;
      Title: Schema.Attribute.String;
   };
}

export interface SectionsMainHero extends Struct.ComponentSchema {
   collectionName: "components_sections_main_heroes";
   info: {
      displayName: "MainHero";
   };
   attributes: {
      button: Schema.Attribute.Component<"cta.cta", false>;
      taxInfo: Schema.Attribute.Component<"hero.taxintro", false>;
      title: Schema.Attribute.String;
   };
}

export interface SectionsMembership extends Struct.ComponentSchema {
   collectionName: "components_group_memberships";
   info: {
      description: "";
      displayName: "Membership";
   };
   attributes: {
      button: Schema.Attribute.String & Schema.Attribute.Required;
      FAQ: Schema.Attribute.Component<"membership.requirement", false> & Schema.Attribute.Required;
      NLA: Schema.Attribute.Component<"membership.documents", false> & Schema.Attribute.Required;
      note: Schema.Attribute.String;
      Requirement: Schema.Attribute.Component<"membership.requirement", false>;
      Steps: Schema.Attribute.Component<"membership.steps-to-membership", false> & Schema.Attribute.Required;
      Submit: Schema.Attribute.Component<"membership.requirement", false> & Schema.Attribute.Required;
      title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SectionsNews extends Struct.ComponentSchema {
   collectionName: "components_sections_news";
   info: {
      description: "";
      displayName: "news";
   };
   attributes: {
      button: Schema.Attribute.Component<"cta.cta", false>;
      Title: Schema.Attribute.String;
   };
}

export interface SectionsPerks extends Struct.ComponentSchema {
   collectionName: "components_sections_perks";
   info: {
      description: "";
      displayName: "Perks";
   };
   attributes: {
      Perk: Schema.Attribute.Component<"shared.simple-card", true> &
         Schema.Attribute.SetMinMax<
            {
               max: 3;
            },
            number
         >;
      title: Schema.Attribute.String;
   };
}

export interface SectionsReason extends Struct.ComponentSchema {
   collectionName: "components_sections_reasons";
   info: {
      description: "";
      displayName: "Reason";
   };
   attributes: {
      Description: Schema.Attribute.Text;
      Stats: Schema.Attribute.Component<"shared.stats", false>;
   };
}

export interface SectionsResidents extends Struct.ComponentSchema {
   collectionName: "components_sections_residents";
   info: {
      description: "";
      displayName: "Residents";
   };
   attributes: {
      button: Schema.Attribute.Component<"cta.cta", false>;
      title: Schema.Attribute.String;
   };
}

export interface SectionsSupervisoryBoard extends Struct.ComponentSchema {
   collectionName: "components_sections_supervisory_boards";
   info: {
      displayName: "SupervisoryBoard";
   };
   attributes: {
      BoardMember: Schema.Attribute.Component<"shared.simple-card", true>;
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

export interface SharedActivityType extends Struct.ComponentSchema {
   collectionName: "components_shared_activity_types";
   info: {
      description: "";
      displayName: "ActivityType";
   };
   attributes: {
      activity: Schema.Attribute.String;
      category: Schema.Attribute.Enumeration<["group1", "group2", "group3"]>;
      code: Schema.Attribute.String;
      list: Schema.Attribute.Component<"shared.description", true>;
   };
}

export interface SharedAppreciation extends Struct.ComponentSchema {
   collectionName: "components_shared_appreciations";
   info: {
      displayName: "appreciation";
   };
   attributes: {
      icon: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
      title: Schema.Attribute.String & Schema.Attribute.Required;
   };
}

export interface SharedCategory extends Struct.ComponentSchema {
   collectionName: "components_shared_categories";
   info: {
      displayName: "category";
   };
   attributes: {
      group1: Schema.Attribute.String;
      group2: Schema.Attribute.String;
      group3: Schema.Attribute.String;
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

export interface SharedDescription extends Struct.ComponentSchema {
   collectionName: "components_shared_descriptions";
   info: {
      displayName: "Description";
   };
   attributes: {
      Description: Schema.Attribute.Text;
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

export interface SharedSimpleCard extends Struct.ComponentSchema {
   collectionName: "components_shared_simple_cards";
   info: {
      description: "";
      displayName: "SimpleCard";
   };
   attributes: {
      description: Schema.Attribute.Text;
      image: Schema.Attribute.Media<"images">;
      title: Schema.Attribute.String;
   };
}

export interface SharedStats extends Struct.ComponentSchema {
   collectionName: "components_shared_stats";
   info: {
      displayName: "Stats";
   };
   attributes: {
      ProjectStart: Schema.Attribute.Component<"shared.td", false>;
      TotalResidents: Schema.Attribute.Component<"shared.td", false>;
   };
}

export interface SharedTd extends Struct.ComponentSchema {
   collectionName: "components_shared_tds";
   info: {
      description: "";
      displayName: "TitleDescription";
   };
   attributes: {
      Description: Schema.Attribute.Text;
      Title: Schema.Attribute.String;
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
         "cta.cta": CtaCta;
         "group.footer": GroupFooter;
         "group.header": GroupHeader;
         "hero.hero": HeroHero;
         "hero.tax-categories": HeroTaxCategories;
         "hero.taxintro": HeroTaxintro;
         "membership.documents": MembershipDocuments;
         "membership.requirement": MembershipRequirement;
         "membership.requirement-card": MembershipRequirementCard;
         "membership.requirement-list": MembershipRequirementList;
         "membership.steps-card": MembershipStepsCard;
         "membership.steps-to-membership": MembershipStepsToMembership;
         "sections.about": SectionsAbout;
         "sections.action-call": SectionsActionCall;
         "sections.faq": SectionsFaq;
         "sections.highlights": SectionsHighlights;
         "sections.history": SectionsHistory;
         "sections.impact": SectionsImpact;
         "sections.main-hero": SectionsMainHero;
         "sections.membership": SectionsMembership;
         "sections.news": SectionsNews;
         "sections.perks": SectionsPerks;
         "sections.reason": SectionsReason;
         "sections.residents": SectionsResidents;
         "sections.supervisory-board": SectionsSupervisoryBoard;
         "shared.action-call": SharedActionCall;
         "shared.activity-type": SharedActivityType;
         "shared.appreciation": SharedAppreciation;
         "shared.category": SharedCategory;
         "shared.contacts": SharedContacts;
         "shared.description": SharedDescription;
         "shared.i18n-locale": SharedI18NLocale;
         "shared.legal-terms": SharedLegalTerms;
         "shared.navigation": SharedNavigation;
         "shared.simple-card": SharedSimpleCard;
         "shared.stats": SharedStats;
         "shared.td": SharedTd;
         "shared.ur-ls": SharedUrLs;
         "shared.usefull-links": SharedUsefullLinks;
      }
   }
}
