import type { Metadata } from 'next'
import Script from 'next/script'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/fontawesome.css'
import '../public/assets/css/animate.min.css'
import '../public/assets/css/swiper-bundle.min.css'
import '../public/assets/css/magnific-popup.min.css'
import '../public/assets/css/odometer.min.css'

import '../public/assets/scss/style.scss'

import CallToAction from '../components/CallToAction'
import { ApolloWrapper } from './ApolloWrapper'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Home - Bytewise Technologies',
  description: 'Where push comes to shove, you can count on us. Solutions tailored to your business needs, not just tech.',
  keywords: '',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  manifest: '/site.webmanifest',
  applicationName: 'Bytewise',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Home - Bytewise Technologies',
    description: 'Where push comes to shove, you can count on us. Solutions tailored to your business needs, not just tech.',
    url: 'https://bytewisetechnologies.com',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://www.bytewisetechnologies.com',
  },
  appleWebApp: {
    title: 'Bytewise',
  },
  icons: {
    shortcut: [
      {
        url: '/assets/images/site_logo/favicon.ico',
        rel: 'shortcut icon',
      },
      {
        url: '/assets/images/site_logo/favicon-16x16.png',
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/images/site_logo/favicon-32x32.png',
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/images/site_logo/favicon-96x96.png',
        rel: 'icon',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/assets/images/site_logo/favicon.svg',
        rel: 'icon',
        type: 'image/svg+xml',
      },
      {
        url: '/assets/images/site_logo/favicon-512x512.png',
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [{
      url: '/assets/images/site_logo/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script type="application/ld+json" id="json-ld">
        {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://www.bytewisetechnologies.com/",
                "url": "https://www.bytewisetechnologies.com/",
                "name": "Home - Bytewise Technologies",
                "isPartOf": {
                  "@id": "https://www.bytewisetechnologies.com/#website"
                },
                "about": {
                  "@id": "https://www.bytewisetechnologies.com/#organization"
                },
                "primaryImageOfPage": {
                  "@id": "https://www.bytewisetechnologies.com/#primaryimage"
                },
                "image": {
                  "@id": " https://www.bytewisetechnologies.com/#primaryimage"
                },
                "thumbnailUrl": "https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg",
                "datePublished": "2024-11-04T07:05:45+00:00",
                "dateModified": "2024-11-14T15:08:18+00:00",
                "description": "Where push comes to shove, you can count on us. Solutions tailored to your business needs, not just tech.",
                "breadcrumb": {
                  "@id": "https://www.bytewisetechnologies.com/#breadcrumb"
                },
                "inLanguage": "en-US",
                "potentialAction": [
                  {
                    "@type": "ReadAction",
                    "target": [
                      "https://www.bytewisetechnologies.com/"
                    ]
                  }
                ]
              },
              {
                "@type": "ImageObject",
                "inLanguage": "en-US",
                "@id": "https://www.bytewisetechnologies.com/#primaryimage",
                "url": "https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg",
                "contentUrl": "https://images.ctfassets.net/g9e5ilkl8pzh/6rDjNuReNL44A4IPdq5TJR/d346a07cfa9153cc24216a868a878c03/icon_programming_tree.svg"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://www.bytewisetechnologies.com/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home"
                  }
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://www.bytewisetechnologies.com/#website",
                "url": "https://www.bytewisetechnologies.com/",
                "name": "Bytewise Technologies",
                "description": "",
                "publisher": {
                  "@id": "https://www.bytewisetechnologies.com/#organization"
                },
                "potentialAction": [
                  {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://www.bytewisetechnologies.com/?s={search_term_string}"
                    },
                    "query-input": {
                      "@type": "PropertyValueSpecification",
                      "valueRequired": true,
                      "valueName": "search_term_string"
                    }
                  }
                ],
                "inLanguage": "en-US"
              },
              {
                "@type": "Organization",
                "@id": "https://www.bytewisetechnologies.com/#organization",
                "name": "Bytewise Technologies",
                "url": "https://www.bytewisetechnologies.com/",
                "logo": {
                  "@type": "ImageObject",
                  "inLanguage": "en-US",
                  "@id": "https://www.bytewisetechnologies.com/#/schema/logo/image/",
                  "url": "https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg",
                  "contentUrl": "https://www.bytewisetechnologies.com/assets/images/site_logo/logo-white.svg",
                  "caption": "Bytewise Technologies"
                },
                "image": {
                  "@id": "https://www.bytewisetechnologies.com/#/schema/logo/image/"
                }
              }
            ]
          }
        `}
      </Script>
      <GoogleTagManager gtmId="GTM-K4SHD7J6" />
      <body>
        <ApolloWrapper>
          <div className="page_wrapper">
            <div className="backtotop">
              <a title="Scroll to top" href="#" className="scroll">
                <i className="fa-solid fa-arrow-up"></i>
              </a>
            </div>
            <Navbar />
            <main className="page_content">
              {children}
            </main>
            <CallToAction />
            <Footer />
          </div>
        </ApolloWrapper>
      </body>
      <Script src="/assets/js/jquery.min.js" />
      <Script src="/assets/js/popper.min.js" />
      <Script src="/assets/js/bootstrap.min.js" />
      <Script src="/assets/js/bootstrap-dropdown-ml-hack.min.js" />
      <Script src="/assets/js/swiper-bundle.min.js" />
      <Script src="/assets/js/parallaxie.js" />
      <Script src="/assets/js/parallax-scroll.js" />
      <Script src="/assets/js/wow.min.js" />
      <Script src="/assets/js/countdown.js" />
      <Script src="/assets/js/magnific-popup.min.js" />
      <Script src="/assets/js/appear.min.js" />
      <Script src="/assets/js/odometer.min.js" />
      <Script src="/assets/js/circularProgressBar.min.js" />
      <Script src="/assets/js/main.js" />
    </html>
  )
}
