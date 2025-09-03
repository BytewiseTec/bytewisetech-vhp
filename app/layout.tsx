import type { Metadata } from 'next'
import Script from 'next/script'
import { FaArrowUp } from 'react-icons/fa6'
import localFont from 'next/font/local'

import InternalCookieSetter from '@/components/InternalCookieSetter'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'

import { ApolloWrapper } from './ApolloWrapper'

import '../public/assets/css/bootstrap.min.css'
import '../public/assets/scss/style.scss'
import '../public/assets/css/button-improvements.css'
import '../public/assets/css/contact-improvements.css'

const axiRegaular = localFont({
  src: '../public/assets/fonts/Axiforma-Regular.ttf',
  style: 'normal',
  weight: '400',
  display: 'swap',
  variable: '--axi-regular',
})

const axiMedium = localFont({
  src: '../public/assets/fonts/Axiforma-Medium.ttf',
  style: 'normal',
  weight: '500',
  display: 'swap',
  variable: '--axi-medium',
})

const axiSemiBold = localFont({
  src: '../public/assets/fonts/Axiforma-SemiBold.ttf',
  style: 'normal',
  weight: '600',
  display: 'swap',
  variable: '--axi-semibold',
})

const axiBold = localFont({
  src: '../public/assets/fonts/Axiforma-Bold.ttf',
  style: 'normal',
  weight: '700',
  display: 'swap',
  variable: '--axi-bold',
})

export const metadata: Metadata = {
  title: 'Bytewise Technologies - Tailored Business Solutions',
  description: 'Bytewise Technologies offers tailored tech solutions to drive your business success. Explore our services and expertise to achieve business growth.',
  keywords: 'Bytewise Technologies, business solutions, tech services, tailored solutions, business growth',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  manifest: '/site.webmanifest',
  applicationName: 'Bytewise Technologies',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Bytewise Technologies - Tailored Business Solutions',
    description: 'Bytewise Technologies offers tailored tech solutions to drive your business success. Explore our services and expertise to achieve business growth.',
    url: 'https://bytewisetechnologies.com',
    siteName: 'Bytewise Technologies',
    images: [
      {
        url: 'https://bytewisetechnologies.com/assets/images/site_logo/logo-og-image.png',
        alt: 'Bytewise Technologies',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://bytewisetechnologies.com/assets/images/site_logo/web-app-manifest-512x512.png',
        alt: 'Bytewise Technologies',
        width: 512,
        height: 512,
      },
      {
        url: 'https://bytewisetechnologies.com/assets/images/site_logo/apple-touch-icon.png',
        alt: 'Bytewise Technologies',
        width: 180,
        height: 180,
      },
      {
        url: 'https://bytewisetechnologies.com/assets/images/site_logo/favicon-32x32.png',
        alt: 'Bytewise Technologies',
        width: 32,
        height: 32,
      },
    ],
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com',
  },
  appleWebApp: {
    title: 'Bytewise Technologies',
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
    <html lang="en" className={[axiRegaular.variable, axiMedium.variable, axiSemiBold.variable, axiBold.variable].join(' ')}>
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
