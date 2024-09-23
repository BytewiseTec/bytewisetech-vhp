import AboutCaseStudies from '@/components/AboutCaseStudies'
import BlogPosts from '@/components/BlogPosts'
import ContactUs from '@/components/ContactUs'
import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TechnologyReview from '@/components/TechnologyReview'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Services />
      <AboutCaseStudies />
      <TechnologyReview />
      <BlogPosts />
      <ContactUs />
    </>
  )
}
