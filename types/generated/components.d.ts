import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentFeatureBullets extends Struct.ComponentSchema {
  collectionName: 'components_component_feature_bullets';
  info: {
    displayName: 'featureBullets';
  };
  attributes: {
    Bullet: Schema.Attribute.String;
  };
}

export interface ComponentFeatureDetail extends Struct.ComponentSchema {
  collectionName: 'components_component_feature_details';
  info: {
    description: '';
    displayName: 'Feature Detail';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    IconImage: Schema.Attribute.Media<'images'>;
    IconImagePath: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_component_info_cards';
  info: {
    displayName: 'InfoCard';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    iconName: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentJobListing extends Struct.ComponentSchema {
  collectionName: 'components_component_job_listings';
  info: {
    description: '';
    displayName: 'Job Listing';
  };
  attributes: {
    IncludeCategories: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    IncludeSearch: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentLink extends Struct.ComponentSchema {
  collectionName: 'components_component_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    IsPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentService extends Struct.ComponentSchema {
  collectionName: 'components_component_services';
  info: {
    description: '';
    displayName: 'service';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    ImagePath: Schema.Attribute.String;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutContactForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutFeatureBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature_blocks';
  info: {
    description: '';
    displayName: 'FeatureBlock';
  };
  attributes: {
    callToAction: Schema.Attribute.Component<'component.link', false>;
    Description: Schema.Attribute.Text;
    FeatureBullets: Schema.Attribute.Component<
      'component.feature-bullets',
      true
    >;
    featureImage: Schema.Attribute.Media<'images'>;
    featureImagePath: Schema.Attribute.String;
    Title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LayoutFeature2Block extends Struct.ComponentSchema {
  collectionName: 'components_layout_feature2_blocks';
  info: {
    displayName: 'Feature2Block';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Features: Schema.Attribute.Component<'component.feature-detail', true>;
    Image: Schema.Attribute.Media<'images'>;
    ImagePath: Schema.Attribute.String;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutGridImageCards extends Struct.ComponentSchema {
  collectionName: 'components_layout_grid_image_cards';
  info: {
    displayName: 'GridImageCards';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'component.service', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'hero Section';
  };
  attributes: {
    CTA: Schema.Attribute.Component<'component.link', true>;
    Description: Schema.Attribute.Text;
    Pill: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LayoutInfoCardBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_info_card_blocks';
  info: {
    displayName: 'InfoCardBlock';
  };
  attributes: {
    cards: Schema.Attribute.Component<'component.info-card', true>;
    Description: Schema.Attribute.Text;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutServiceBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_blocks';
  info: {
    displayName: 'ServiceBlock';
  };
  attributes: {
    CallToActionURL: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Services: Schema.Attribute.Component<'component.service', true>;
    Title: Schema.Attribute.RichText;
  };
}

export interface LayoutTestimonialBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonial_blocks';
  info: {
    displayName: 'testimonialBlock';
  };
  attributes: {
    Desription: Schema.Attribute.Text;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    Title: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.feature-bullets': ComponentFeatureBullets;
      'component.feature-detail': ComponentFeatureDetail;
      'component.info-card': ComponentInfoCard;
      'component.job-listing': ComponentJobListing;
      'component.link': ComponentLink;
      'component.service': ComponentService;
      'layout.contact-form': LayoutContactForm;
      'layout.feature-block': LayoutFeatureBlock;
      'layout.feature2-block': LayoutFeature2Block;
      'layout.grid-image-cards': LayoutGridImageCards;
      'layout.hero-section': LayoutHeroSection;
      'layout.info-card-block': LayoutInfoCardBlock;
      'layout.service-block': LayoutServiceBlock;
      'layout.testimonial-block': LayoutTestimonialBlock;
    }
  }
}
