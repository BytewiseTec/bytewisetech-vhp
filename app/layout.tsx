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
import '../public/assets/css/style.css'

import CallToAction from '../components/CallToAction'
import { ApolloWrapper } from './ApolloWrapper'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Bytewise Technologies',
  description: 'Where push comes to shove, you can count on us.',
  keywords: '',
  authors: { name: 'Bytewise Tech', url: 'https://bytewisetechnologies.com' },
  icons: {
    shortcut: [{
      url: '/assets/images/site_logo/favourite_icon_2.svg',
      rel: 'shortcut icon',
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
      <GoogleTagManager gtmId="GTM-K4SHD7J6" />
      <body>
        <ApolloWrapper>
          <div className="page_wrapper">
            <div className="backtotop">
              <a href="#" className="scroll">
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
