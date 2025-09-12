import Script from 'next/script'

import getStructuredData from '@/utils/structured-data'
import { FAQsQuery, GET_FAQS } from '@/components/FAQs/query'
// import BlogPosts from '@/components/BlogPosts'
import { GET_LATEST_BLOG_POSTS, GetLatestBlogPostsQuery } from '@/components/BlogPosts/query'

// import AboutCaseStudies from '../components/AboutCaseStudies'
import ContactUs from '../components/ContactUs'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TechnologyReview from '../components/TechnologyReview'
import FAQs from '../components/FAQs'

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
      <Featured />
      <Services />
      {/* <AboutCaseStudies /> */}
      <TechnologyReview />
      <FAQs faqs={faqs} />
      {/* <BlogPosts posts={latestBlogPosts} /> */}
      <ContactUs />
    </>
  )
}
