import type { Metadata } from 'next'
import Script from 'next/script'
import { FaArrowUp } from 'react-icons/fa6'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../public/assets/css/bootstrap.min.css'
import '../public/assets/scss/style.scss'

import CallToAction from '../components/CallToAction'
import { ApolloWrapper } from './ApolloWrapper'
import InternalCookieSetter from '@/components/InternalCookieSetter'

export const metadata: Metadata = {
  title: 'Bytewise Technologies - Tailored Business Solutions',
  description: 'Bytewise Technologies offers tailored tech solutions to drive your business success. Explore our services and expertise to achieve business growth.',
  keywords: 'Bytewise Technologies, business solutions, tech services, tailored solutions, business growth',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  manifest: '/site.webmanifest',
  applicationName: 'Bytewise',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Bytewise Technologies - Tailored Business Solutions',
    description: 'Bytewise Technologies offers tailored tech solutions to drive your business success. Explore our services and expertise to achieve business growth.',
    url: 'https://bytewisetechnologies.com',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com',
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
      <InternalCookieSetter />
      <body>
        <ApolloWrapper>
          <div className="page_wrapper">
            <div className="backtotop">
              <a title="Scroll to top" href="#" className="scroll">
                <FaArrowUp />
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
      <Script src="/assets/js/main.js" />
    </html>
  )
}
