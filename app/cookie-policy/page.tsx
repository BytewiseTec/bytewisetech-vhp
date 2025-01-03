import { renderDomToReact } from '@/utils/renderers'
import { query } from '../ApolloClient'
import { BlogPostQuery, GET_BLOG_POST } from '../global.query'

export default async function CookiePolicyPage() {
  const { data, loading } = await query<BlogPostQuery>({
    query: GET_BLOG_POST,
    variables: {
      id: '4xxV9V6gfwtJUGSGXbeIQM'
    }
  })

  if (loading) return <div>Loading...</div>

  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <h1 className="page_title mb-0 text-white">COOKIE POLICY</h1>
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
