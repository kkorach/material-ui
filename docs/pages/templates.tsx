import * as React from 'react';
import Head from 'docs/src/modules/components/Head';
import Divider from '@mui/material/Divider';
import AppHeader from 'docs/src/layouts/AppHeader';
import AppFooter from 'docs/src/layouts/AppFooter';
import TemplateHero from 'docs/src/components/productTemplate/TemplateHero';
import ValueProposition from 'docs/src/components/home/ValueProposition';
import TemplateDemo from 'docs/src/components/productTemplate/TemplateDemo';
import Testimonials from 'docs/src/components/home/Testimonials';
import HeroEnd from 'docs/src/components/home/HeroEnd';
import BrandingProvider from 'docs/src/BrandingProvider';
import References, { TEMPLATES_CUSTOMERS } from 'docs/src/components/home/References';

export default function Templates() {
  return (
    <BrandingProvider>
      <Head
        title="Fully built templates for your app - MUI"
        description="A collection of 4.5 average rating templates, selected and curated by MUI's team of maintainers to get your projects up and running today."
        card="/static/social-previews/templates-preview.jpg"
      />
      <AppHeader />
      <main>
        <TemplateHero />
        <References companies={TEMPLATES_CUSTOMERS} />
        <ValueProposition />
        <TemplateDemo />
        <Testimonials />
        <HeroEnd />
      </main>
      <Divider />
      <AppFooter />
    </BrandingProvider>
  );
}
