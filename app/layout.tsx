import type { Metadata } from 'next'
import Script from 'next/script'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import './globals.css'
import CallToAction from '@/components/CallToAction'
import { ApolloWrapper } from './ApolloWrapper'

export const metadata: Metadata = {
  title: 'Infinitude Tech',
  description: 'Where push comes to shove, you can count on us.',
  keywords: '',
  authors: { name: 'Infinitude Tech', url: 'https://infinitudetech.ai' },
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
