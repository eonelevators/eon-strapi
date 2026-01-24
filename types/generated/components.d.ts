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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.banner': SectionBanner;
    }
  }
}
