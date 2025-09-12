import { renderDomToReact } from '@/utils/renderers'

import { query } from '../ApolloClient'
import { GetBlogPostByIdQuery, GET_BLOG_POST_BY_ID } from '../global.query'

export default async function TermsAndConditionsPage() {
  const { data, loading } = await query<GetBlogPostByIdQuery>({
    query: GET_BLOG_POST_BY_ID,
    variables: {
      id: '4GaQLB187746fWDuWEH2ZO'
    }
  })

  if (loading) return <div>Loading...</div>

  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <h1 className="page_title mb-0 text-white">{data.blog.title}</h1>
        </div>
      </section>
      <section className="policy_section my-5">
        <div className="container">
          {renderDomToReact(data.blog.body.json)}
        </div>
      </section>
    </>
  )
}
