import type { Schema, Struct } from '@strapi/strapi';

export interface SectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_banners';
  info: {
    displayName: 'banner';
    icon: 'star';
  };
  attributes: {
    banner_description: Schema.Attribute.Text;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    icon: Schema.Attribute.String;
    short_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_cards';
  info: {
    displayName: 'feature card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionInformation extends Struct.ComponentSchema {
  collectionName: 'components_section_information';
  info: {
    displayName: 'Information';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon_info_list: Schema.Attribute.Component<'section.list', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionKeyFeatures extends Struct.ComponentSchema {
  collectionName: 'components_section_key_features';
  info: {
    displayName: 'Key Features';
  };
  attributes: {
    bg_image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    feature: Schema.Attribute.Component<'section.feature-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionList extends Struct.ComponentSchema {
  collectionName: 'components_section_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    icon: Schema.Attribute.String;
    info: Schema.Attribute.Text;
  };
}

export interface SectionOverview extends Struct.ComponentSchema {
  collectionName: 'components_section_overviews';
  info: {
    displayName: 'overview';
  };
  attributes: {
    challenges: Schema.Attribute.Component<'section.cards', true>;
    description: Schema.Attribute.Text;
    heading1: Schema.Attribute.String;
    heading2: Schema.Attribute.String;
  };
}

export interface SectionProductAssessment extends Struct.ComponentSchema {
  collectionName: 'components_section_product_assessments';
  info: {
    displayName: 'product assessment';
    icon: 'message';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSmartFeature extends Struct.ComponentSchema {
  collectionName: 'components_section_smart_features';
  info: {
    displayName: 'smart feature';
    icon: 'eye';
  };
  attributes: {
    feature: Schema.Attribute.Component<'section.feature-card', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.banner': SectionBanner;
      'section.cards': SectionCards;
      'section.feature-card': SectionFeatureCard;
      'section.information': SectionInformation;
      'section.key-features': SectionKeyFeatures;
      'section.list': SectionList;
      'section.overview': SectionOverview;
      'section.product-assessment': SectionProductAssessment;
      'section.smart-feature': SectionSmartFeature;
    }
  }
}
