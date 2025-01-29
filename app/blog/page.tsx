import Image from 'next/image'
import dayjs from 'dayjs'
import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

import Badge from '../../components/Badge'
import PageBanner from '../../components/PageBanner'
import { query } from '../ApolloClient'
import IconCalendar from '../../public/assets/images/icons/icon_calendar.svg'
import SearchIcon from '../../public/assets/images/icons/icon_search.svg'

import {
  GET_BLOG_POST_SLIDES,
  GET_BLOG_POSTS_LIST,
  GetBlogPostSlidesQuery,
  GetBlogPostsListQuery,
  GetBlogPostsListQueryVariables
} from './query'
import { GET_BLOG_POST_CATEGORIES, GetBlogPostCategoriesQuery } from './[slug]/query'
import PostSwiper from './PostSwiper'

import 'swiper/scss'
import 'swiper/scss/pagination'

const getPageNumbers = (current: number, total: number) => {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 3) return [1, 2, 3, 4, '...', total]
  if (current >= total - 2) return [1, '...', total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

interface BlogPageProps {
  searchParams: Promise<Record<'page', string | number | undefined>>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const limit = 10
  const currentPage = Number((await searchParams).page) || 1

  const [getBlogPostSlidesQuery, getBlogPostsListQuery, blogPostCategoriesResponse] = await Promise.all([
    query<GetBlogPostSlidesQuery>({
      query: GET_BLOG_POST_SLIDES
    }),
    query<GetBlogPostsListQuery, GetBlogPostsListQueryVariables>({
      query: GET_BLOG_POSTS_LIST,
      variables: {
        limit,
        skip: (currentPage - 1) * limit
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

  const allTags = Array.from(categories.reduce((acc, { tags }) => {
    tags.forEach((tag) => {
      acc.add(tag)
    })
    return acc
  }, new Set<string>()) || [])

  const blogPostSlides = getBlogPostSlidesQuery.data?.blogCollection.items || []

  const blogPosts = getBlogPostsListQuery.data?.blogCollection.items || []

  const totalPages = Math.ceil(getBlogPostsListQuery.data?.blogCollection.total / limit)

  return (
    <>
      <PageBanner title="Our Latest Blog">
        Our
        <Badge>Blog</Badge>
      </PageBanner>

      <section className="blog_section section_space bg-light">
        <div className="container">
          <PostSwiper posts={blogPostSlides} />

          <div className="section_space pb-0">
            <div className="row">
              <div className="col-lg-8">
                {blogPosts.map((post) => (
                  <div className="blog_post_block image_left_layout" key={post._id}>
                    <div className="blog_post_image">
                      <Link className="image_wrap" href={`/blog/${post.slug}`}>
                        <Image
                          src={post.thumbnail.url}
                          alt={post.thumbnail.title}
                          width={post.thumbnail.width}
                          height={post.thumbnail.height}
                        />
                      </Link>
                    </div>
                    <div className="blog_post_content">
                      <div className="post_meta_wrap">
                        <ul className="category_btns_group unordered_list">
                          <li><a href="#!">{post.category}</a></li>
                        </ul>
                        <ul className="post_meta unordered_list">
                          <li>
                            <a href="#!">
                              <Image src={IconCalendar} alt="Icon Calendar" /> {dayjs(post.publishedDate).format('MMMM DD, YYYY')}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <h3 className="blog_post_title">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p>
                        {post.excerpt}
                      </p>
                      <Link className="btn btn-dark" href={`/blog/${post.slug}`}>
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
                      <Link href={currentPage === 1 ? '#!' : `?page=${currentPage - 1}`}>
                        <FaAnglesLeft />
                      </Link>
                    </li>
                    {getPageNumbers(currentPage, totalPages).map((page, index) => (
                      <li key={index} className={page === currentPage ? 'active' : ''}>
                        {page === '...'
                          ? <span>...</span>
                          : (
                            <Link href={`?page=${page}`}>
                              {page}
                            </Link>
                          )}
                      </li>
                    ))}
                    <li className={currentPage === totalPages ? 'disabled' : ''}>
                      <Link href={currentPage === totalPages ? '#!' : `?page=${currentPage + 1}`}>
                        <FaAnglesRight />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sidebar ps-lg-5">
                  <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <div className="form-group">
                      <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                      <button type="submit" title="Search">
                        <Image src={SearchIcon} alt="Search Icon" />
                      </button>
                    </div>
                  </div>
                  <div className="post_category_wrap">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="post_category_list unordered_list_block">
                      {Object.entries(categoryCounts).map(([category, count]) => (
                        <li key={category}>
                          <a href="#!">
                            <PiArrowUpRightBold size={20} />
                            <span>{category}</span>
                            <span>({count})</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="popular_tags">
                    <h3 className="sidebar_widget_title">Popular Tags</h3>
                    <ul className="tags_list unordered_list">
                      {allTags.map((tag) => (
                        <li key={tag}>
                          <a href="#!">{tag}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}