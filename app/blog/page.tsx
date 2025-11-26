import Image from 'next/image'
import dayjs from 'dayjs'
import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'
import Script from 'next/script'

import generateStructuredData from '@/utils/structured-data'

import PageBanner from '../../components/PageBanner'
import BlogSearch from '../../components/BlogSearch'
import { query } from '../ApolloClient'
import IconCalendar from '../../public/assets/images/icons/icon_calendar.svg'

import {
  GET_BLOG_POSTS_LIST,
  GetBlogPostsListQuery,
  GetBlogPostsListQueryVariables
} from './query'
import { GET_BLOG_POST_CATEGORIES, GetBlogPostCategoriesQuery } from './[slug]/query'

import 'swiper/scss'
import 'swiper/scss/pagination'

const getPageNumbers = (current: number, total: number) => {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 3) return [1, 2, 3, 4, '...', total]
  if (current >= total - 2) return [1, '...', total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

interface BlogPageProps {
  searchParams: Promise<Record<'page' | 'search', string | number | undefined>>
}

export const metadata = {
  title: 'Bytewise Tech Blog',
  description: 'Your resource for expert AI insights, web development tutorials, and modern software practices. Stay ahead of the tech curve with us.',
  keywords: 'AI insights, web development tutorials, software practices, Web Development vs Mobile Development, are web development bootcamps worth it, can web development be replaced by ai, how web development works, web development vs mobile development, can python be used for web development, how to choose a web development company, what web development includes',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Bytewise Tech Blog',
    description: 'Your resource for expert AI insights, web development tutorials, and modern software practices. Stay ahead of the tech curve with us.',
    url: 'https://bytewisetechnologies.com/blog',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://bytewisetechnologies.com/blog',
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const limit = 9
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const searchQuery = params.search as string | undefined

  const [getBlogPostsListQuery, blogPostCategoriesResponse] = await Promise.all([
    query<GetBlogPostsListQuery, GetBlogPostsListQueryVariables>({
      query: GET_BLOG_POSTS_LIST,
      variables: {
        limit: searchQuery ? 1000 : limit,
        skip: searchQuery ? 0 : (currentPage - 1) * limit
      }
    }),
    query<GetBlogPostCategoriesQuery>({
      query: GET_BLOG_POST_CATEGORIES,
    }),
  ])

  const { items: categories = [] } = blogPostCategoriesResponse.data?.blogCollection || {}

  const categoryCounts = categories.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  // const allTags = Array.from(categories.reduce((acc, { tags }) => {
  //   tags?.forEach((tag) => {
  //     acc.add(tag)
  //   })
  //   return acc
  // }, new Set<string>()) || [])

  let blogPosts = getBlogPostsListQuery.data?.blogCollection.items || []

  if (searchQuery) {
    const searchLower = searchQuery.toLowerCase()
    blogPosts = blogPosts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(searchLower)
      const categoryMatch = post.category?.toLowerCase().includes(searchLower)
      const excerptMatch = post.excerpt?.toLowerCase().includes(searchLower)
      return titleMatch || categoryMatch || excerptMatch
    })
  }

  const totalPosts = searchQuery ? blogPosts.length : (getBlogPostsListQuery.data?.blogCollection.total || 0)
  const totalPages = Math.ceil(totalPosts / limit)
  
  const paginatedPosts = searchQuery 
    ? blogPosts.slice((currentPage - 1) * limit, currentPage * limit)
    : blogPosts

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      // '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog' },
      ],
    }
  ])

  return (
    <>
      <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} id="structured-data" />

      <PageBanner
        title="Our Latest Blog"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Blog' },
        ]}
      />

      <section className="blog_section p-5   bg-light">
        <div className="container">
          <div className="pb-0">
            <BlogSearch />
            {searchQuery && (
              <div className="mb-4">
                <p className="text-muted">
                  Search results for: <strong>&quot;{searchQuery}&quot;</strong>
                  {totalPosts > 0 && (
                    <span className="ms-2">({totalPosts} {totalPosts === 1 ? 'result' : 'results'})</span>
                  )}
                </p>
              </div>
            )}
            {paginatedPosts.length === 0 && searchQuery ? (
              <div className="text-center py-5">
                <p className="text-muted fs-5">No blog posts found matching &quot;{searchQuery}&quot;</p>
                <p className="text-muted">Try searching with different keywords or <Link href="/blog" className="text-primary">view all blogs</Link></p>
              </div>
            ) : (
              <div className="row">
                {/* Blog Posts Full Width */}
              {paginatedPosts.map((post) => (
                <div className="col-lg-4 col-md-6 mb-4" key={post._id}>
                  <div className="card h-100 shadow-sm border-0">
                    {/* Image */}
                    <Link href={`/blog/${post.slug}`} title={post.title}>
                      <Image
                        src={post.thumbnail.url}
                        alt={post.thumbnail.title}
                        width={post.thumbnail.width}
                        height={post.thumbnail.height}
                        className="card-img-top"
                        style={{ objectFit: 'cover' }}
                      />
                    </Link>

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      {/* Date */}
                      <div className="text-muted small mb-2 d-flex align-items-center">
                        <Image
                          src={IconCalendar}
                          alt="Calendar"
                          width={16}
                          height={16}
                          className="me-2"
                        />
                        {dayjs(post.publishedDate).format('MMMM DD, YYYY')}
                      </div>

                      {/* Title */}
                      <h5 className="card-title">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-dark text-decoration-none"
                        >
                          {post.title}
                        </Link>
                      </h5>

                      {/* Excerpt */}
                      <p className="card-text flex-grow-1">{post.excerpt}</p>

                      {/* Read More */}
                      <Link
                        className="btn btn-dark mt-auto align-self-start"
                        href={`/blog/${post.slug}`}
                        title={post.title}
                      >
                        <span className="btn_label" data-text="Read More">
                          Read More
                        </span>
                        <span className="btn_icon ms-2">
                          <PiArrowUpRightBold size={18} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

                {/* Pagination */}
                {totalPages > 0 && (
                  <div className="col-12">
                    <div className="pagination_wrap pb-0 mt-4">
                      <ul className="pagination_nav unordered_list justify-content-center">
                        <li className={currentPage === 1 ? 'disabled' : ''}>
                          <Link
                            href={currentPage === 1 ? '#' : `?${searchQuery ? `search=${encodeURIComponent(searchQuery)}&` : ''}page=${currentPage - 1}`}
                            title="Previous"
                          >
                            <FaAnglesLeft />
                          </Link>
                        </li>
                        {getPageNumbers(currentPage, totalPages).map((page, index) => (
                          <li key={index} className={page === currentPage ? 'active' : ''}>
                            {page === '...' ? (
                              <span>...</span>
                            ) : (
                              <Link href={`?${searchQuery ? `search=${encodeURIComponent(searchQuery)}&` : ''}page=${page}`} title={`Page ${page}`}>
                                {page}
                              </Link>
                            )}
                          </li>
                        ))}
                        <li className={currentPage === totalPages ? 'disabled' : ''}>
                          <Link
                            href={currentPage === totalPages ? '#' : `?${searchQuery ? `search=${encodeURIComponent(searchQuery)}&` : ''}page=${currentPage + 1}`}
                            title="Next"
                          >
                            <FaAnglesRight />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>






























      {/* <section className="blog_section section_space bg-light">
        <div className="container">
          <div className="pb-0">
            <div className="row">
              <div className="col-lg-8">
                {blogPosts.map((post) => (
                  <div className="blog_post_block image_left_layout" key={post._id}>
                    <div className="blog_post_image">
                      <Link className="image_wrap" href={`/blog/${post.slug}`} title={post.title}>
                        <Image
                          src={post.thumbnail.url}
                          alt={post.thumbnail.title}
                          width={post.thumbnail.width}
                          height={post.thumbnail.height}
                          style={{objectFit:'cover', objectPosition:'center'}}
                        />
                      </Link>
                    </div>
                    <div className="blog_post_content">
                      <div className="post_meta_wrap">
                        <ul className="category_btns_group unordered_list">
                          <li><a href="">{post.category}</a></li>
                        </ul>
                        <ul className="post_meta unordered_list">
                          <li>
                            
                              <Image src={IconCalendar} alt="Icon Calendar" /> {dayjs(post.publishedDate).format('MMMM DD, YYYY')}
                            
                          </li>
                        </ul>
                      </div>
                      <h3 className="blog_post_title">
                        <Link href={`/blog/${post.slug}`} title={post.title}  >
                          {post.title}
                        </Link>
                      </h3>
                      <p>
                        {post.excerpt}
                      </p>
                      <Link className="btn btn-dark" href={`/blog/${post.slug}`} title={post.title}>
                        <span className="btn_label" data-text="Read More">Read More</span>
                        <span className="btn_icon">
                          <PiArrowUpRightBold size={20} />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
                <div className="pagination_wrap pb-0">
                  <ul className="pagination_nav unordered_list justify-content-center">
                    <li className={currentPage === 1 ? 'disabled' : ''}>
                      <Link href={currentPage === 1 ? '#' : `?page=${currentPage - 1}`} title="Previous">
                        <FaAnglesLeft />
                      </Link>
                    </li>
                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                      <li key={index} className={page === currentPage ? 'active' : ''}>
                        {page === '...'
                          ? <span>...</span>
                          : (
                            <Link href={`?page=${page}`} title={`Page ${page}`}>
                              {page}
                            </Link>
                          )}
                      </li>
                    ))}
                    <li className={currentPage === totalPages ? 'disabled' : ''}>
                      <Link href={currentPage === totalPages ? '#' : `?page=${currentPage + 1}`} title="Next">
                        <FaAnglesRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div> */}
      {/* <div className="col-lg-4"> */}
      {/* <aside className="sidebar sticky-sidebar ps-lg-5" style={{position:'sticky',top:0,overflow:'auto',paddingTop:'5rem'}}> */}
      {/* <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <div className="form-group">
                      <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                      <button type="submit" title="Search">
                        <Image src={SearchIcon} alt="Search Icon" />
                      </button>
                    </div>
                  </div> */}
      {/* <div className="post_category_wrap">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="post_category_list unordered_list_block">
                      {Object.entries(categoryCounts).map(([category, count]) => (
                        <li key={category}>
                          <a href="#">
                            <PiArrowUpRightBold size={20} />
                            <span>{category}</span>
                            <span>({count})</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
      {/* </aside> */}
      {/* </div> */}
      {/* <div className="popular_tags">
                    <h3 className="sidebar_widget_title">Popular Tags</h3>
                    <ul className="tags_list unordered_list">
                      {allTags.map((tag) => (
                        <li key={tag}>
                          <a href="">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
      {/* </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export async function generateStaticParams() {
  return []
}