import { Graph, Thing } from 'schema-dts'

const isThing = (thing: any): thing is Thing => {
  return thing && typeof thing === 'object' && '@type' in thing
}

const isTheSameThing = (a: Thing, b: Thing): boolean => {
  return (a as any)['@type'] === (b as any)['@type']
}

export default function getStructuredData(things?: Thing[]): Graph {
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.bytewisetechnologies.com/',
        url: 'https://www.bytewisetechnologies.com/',
        name: 'Home - Bytewise Technologies',
        isPartOf: {
          '@id': 'https://www.bytewisetechnologies.com/#website',
        },
        about: {
          '@id': 'https://www.bytewisetechnologies.com/#organization',
        },
        primaryImageOfPage: {
          '@id': 'https://www.bytewisetechnologies.com/#primaryimage',
        },
        image: {
          '@id': ' https://www.bytewisetechnologies.com/#primaryimage',
        },
        thumbnailUrl:
          'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
        datePublished: '2024-11-04T07:05:45+00:00',
        dateModified: '2024-11-14T15:08:18+00:00',
        description:
          'Where push comes to shove, you can count on us. Solutions tailored to your business needs, not just tech.',
        breadcrumb: {
          '@id': 'https://www.bytewisetechnologies.com/#breadcrumb',
        },
        inLanguage: 'en-US',
        potentialAction: [
          {
            '@type': 'ReadAction',
            target: ['https://www.bytewisetechnologies.com/'],
          },
        ],
      },
      {
        '@type': 'ImageObject',
        inLanguage: 'en-US',
        '@id': 'https://www.bytewisetechnologies.com/#primaryimage',
        url: 'https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg',
        contentUrl:
          'https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.bytewisetechnologies.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.bytewisetechnologies.com/#website',
        url: 'https://www.bytewisetechnologies.com/',
        name: 'Bytewise Technologies',
        description: 'Tailored Business Solutions',
        publisher: {
          '@id': 'https://www.bytewisetechnologies.com/#organization',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.bytewisetechnologies.com/#organization',
        name: 'Bytewise Technologies',
        url: 'https://www.bytewisetechnologies.com/',
        logo: {
          '@type': 'ImageObject',
          inLanguage: 'en-US',
          '@id': 'https://www.bytewisetechnologies.com/#/schema/logo/image/',
          url: 'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
          contentUrl:
            'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
          caption: 'Bytewise Technologies',
        },
        image: {
          '@id': 'https://www.bytewisetechnologies.com/#/schema/logo/image/',
        },
        sameAs: [
          'https://www.facebook.com/people/Bytewise-Technologies/61566440639702/',
          'https://github.com/BytewiseTec',
          'https://www.linkedin.com/company/bytewise-tech',
          'https://instagram.com/team_bytes'
        ],
        email: 'info@bytewisetechnologies.com',
        telephone: '+1-778-800-6793',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '13428 105 Ave #2306',
          addressLocality: 'Surrey',
          addressRegion: 'BC',
          postalCode: 'V3T 0S6',
          addressCountry: 'CA',
        },
      },
    ],
  }

  const newJsonLd = { ...jsonLd, '@graph': [...jsonLd['@graph']] }

  // add or replace things in the graph
  if (things) {
    for (const thing of things) {
      if (!isThing(thing)) {
        continue
      }

      const index = newJsonLd['@graph'].findIndex((t) =>
        isTheSameThing(t as Thing, thing)
      )

      if (index > -1) {
        newJsonLd['@graph'][index] = thing
      } else {
        newJsonLd['@graph'] = [...newJsonLd['@graph'], thing]
      }
    }
  }

  return newJsonLd
}
