import Script from 'next/script'

import getStructuredData from '@/utils/structured-data'
import { FAQsQuery, GET_FAQS } from '@/components/FAQs/query'
import FeaturedServices from '@/components/FeaturedServices'
import BlogPosts from '@/components/BlogPosts'
import { GET_LATEST_BLOG_POSTS, GetLatestBlogPostsQuery } from '@/components/BlogPosts/query'


import AboutCaseStudies from '../components/AboutCaseStudies'
import ContactUs from '../components/ContactUs'
import ScheduleSection from '../components/ScheduleSection'
import Companies from '../components/Companies'

import { scheduleSectionContent, scheduleSectionContent2, scheduleSectionContent3 } from '../components/ScheduleSection/content'  

// import Featured from '../components/Featured'
import Hero from '../components/Hero'
// import Services from '../components/Services'
import TechnologyReview from '../components/TechnologyReview'
import FAQs from '../components/FAQs'

import { GET_SERVICES, ServicesQuery } from './services/query'
import { query } from './ApolloClient'


export default async function Home() {
  const [faqsResponse, latestBlogPostsResponse] = await Promise.all([
    query<FAQsQuery>({
      query: GET_FAQS
    }),
    query<GetLatestBlogPostsQuery>({
      query: GET_LATEST_BLOG_POSTS
    })
  ])
// add featured services component
  const { data: servicesData } = await query<ServicesQuery>({
    query: GET_SERVICES,
  })
  const services = servicesData?.serviceCollection?.items || []
// end featured services component 
  const faqs = faqsResponse.data?.faqsCollection?.items || []
  const latestBlogPosts = latestBlogPostsResponse.data?.blogCollection?.items || []

  const jsonLd = getStructuredData([
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }
  ])

  return (
    <>
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="structured-data"
      />
      <Hero />
      {/* <Featured /> */}
      <ScheduleSection
        title={scheduleSectionContent2.title}
        description={scheduleSectionContent2.description}
        bullets={[...scheduleSectionContent2.bullets]}
        image={{
          asset: scheduleSectionContent2.image,
          alt: scheduleSectionContent2.imageAlt
        }}
      />
      <FeaturedServices services={services} />
      <Companies />
      <ScheduleSection
        title={scheduleSectionContent.title}
        description={scheduleSectionContent.description}
        bullets={[...scheduleSectionContent.bullets]}
        image={{
          asset: scheduleSectionContent.image,
          alt: scheduleSectionContent.imageAlt
        }}
      />
      {/* <Services /> */}
      <AboutCaseStudies />
      <ScheduleSection
        title={scheduleSectionContent3.title}
        description={scheduleSectionContent3.description}
        bullets={[...scheduleSectionContent3.bullets]}
        image={{
          asset: scheduleSectionContent3.image,
          alt: scheduleSectionContent3.imageAlt
        }}
      />
      <TechnologyReview />
      <BlogPosts posts={latestBlogPosts} />
      <FAQs faqs={faqs} />
      <ContactUs />
    </>
  )
}
