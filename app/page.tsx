import { Graph } from 'schema-dts'
import AboutCaseStudies from '../components/AboutCaseStudies'
// import BlogPosts from '../components/BlogPosts'
import ContactUs from '../components/ContactUs'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TechnologyReview from '../components/TechnologyReview'
import FAQs from '../components/FAQs'

export default function Home() {

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.bytewisetechnologies.com/',
        'url': 'https://www.bytewisetechnologies.com/',
        'name': 'Home - Bytewise Technologies',
        'isPartOf': {
          '@id': 'https://www.bytewisetechnologies.com/#website'
        },
        'about': {
          '@id': 'https://www.bytewisetechnologies.com/#organization'
        },
        'primaryImageOfPage': {
          '@id': 'https://www.bytewisetechnologies.com/#primaryimage'
        },
        'image': {
          '@id': ' https://www.bytewisetechnologies.com/#primaryimage'
        },
        'thumbnailUrl': 'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
        'datePublished': '2024-11-04T07:05:45+00:00',
        'dateModified': '2024-11-14T15:08:18+00:00',
        'description': 'Where push comes to shove, you can count on us. Solutions tailored to your business needs, not just tech.',
        'breadcrumb': {
          '@id': 'https://www.bytewisetechnologies.com/#breadcrumb'
        },
        'inLanguage': 'en-US',
        'potentialAction': [
          {
            '@type': 'ReadAction',
            'target': [
              'https://www.bytewisetechnologies.com/'
            ]
          }
        ]
      },
      {
        '@type': 'ImageObject',
        'inLanguage': 'en-US',
        '@id': 'https://www.bytewisetechnologies.com/#primaryimage',
        'url': 'https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg',
        'contentUrl': 'https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.bytewisetechnologies.com/#breadcrumb',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.bytewisetechnologies.com/#website',
        'url': 'https://www.bytewisetechnologies.com/',
        'name': 'Bytewise Technologies',
        'description': '',
        'publisher': {
          '@id': 'https://www.bytewisetechnologies.com/#organization'
        },
        'inLanguage': 'en-US'
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.bytewisetechnologies.com/#organization',
        'name': 'Bytewise Technologies',
        'url': 'https://www.bytewisetechnologies.com/',
        'logo': {
          '@type': 'ImageObject',
          'inLanguage': 'en-US',
          '@id': 'https://www.bytewisetechnologies.com/#/schema/logo/image/',
          'url': 'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
          'contentUrl': 'https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg',
          'caption': 'Bytewise Technologies'
        },
        'image': {
          '@id': 'https://www.bytewisetechnologies.com/#/schema/logo/image/'
        }
      }
    ]
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Featured />
      <Services />
      <AboutCaseStudies />
      <TechnologyReview />
      <FAQs />
      {/* <BlogPosts/> */}
      <ContactUs />
    </>
  )
}
