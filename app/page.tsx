import AboutCaseStudies from '../components/AboutCaseStudies'
// import BlogPosts from '../components/BlogPosts'
import ContactUs from '../components/ContactUs'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Services from '../components/Services'
import TechnologyReview from '../components/TechnologyReview'
import FAQs from '../components/FAQs'
import getStructuredData from '@/utils/structured-data'
import { query } from './ApolloClient'
import { FAQsQuery, GET_FAQS } from '@/components/FAQs/query'

export default async function Home() {
  const { data } = await query<FAQsQuery>({
    query: GET_FAQS
  })

  const faqs = data.faqsCollection.items || []

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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Featured />
      <Services />
      <AboutCaseStudies />
      <TechnologyReview />
      <FAQs faqs={faqs} />
      {/* <BlogPosts/> */}
      <ContactUs />
    </>
  )
}
