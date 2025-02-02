import Link from 'next/link'

import PageBanner from '@/components/PageBanner'

export default function NotFound() {
  return (
    <>
      <PageBanner title="404: Not Found" />

      <section className="section_space bg-light">
        <div className="container">
          <div className="text-center">
            <p>Oops! The page you are looking for does&apos;t exist</p>
            <Link href="/" title="Return Home">Return Home</Link>
          </div>
        </div>
      </section>
    </>
  )
}