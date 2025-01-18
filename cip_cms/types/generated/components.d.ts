import type { Schema, Struct } from "@strapi/strapi";

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

export interface GroupMembership extends Struct.ComponentSchema {
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
         "group.membership": GroupMembership;
         "membership.documents": MembershipDocuments;
         "membership.requirement": MembershipRequirement;
         "membership.requirement-card": MembershipRequirementCard;
         "membership.requirement-list": MembershipRequirementList;
         "membership.steps-card": MembershipStepsCard;
         "membership.steps-to-membership": MembershipStepsToMembership;
         "shared.action-call": SharedActionCall;
         "shared.appreciation": SharedAppreciation;
         "shared.contacts": SharedContacts;
         "shared.i18n-locale": SharedI18NLocale;
         "shared.legal-terms": SharedLegalTerms;
         "shared.navigation": SharedNavigation;
         "shared.ur-ls": SharedUrLs;
         "shared.usefull-links": SharedUsefullLinks;
      }
   }
}
