import Image from 'next/image'
import dayjs from 'dayjs'
import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

import Badge from '../../components/Badge'
import PageBanner from '../../components/PageBanner'
import { query } from '../ApolloClient'
import IconCalendar from '../../public/assets/images/icons/icon_calendar.svg'

import PostSwiper from './PostSwiper'
import { GET_BLOG_POST_SLIDES, GET_BLOG_POSTS_LIST, GetBlogPostSlidesQuery, GetBlogPostsListQuery } from './query'


import 'swiper/scss'
import 'swiper/scss/pagination'

export default async function BlogPage() {
  const [getBlogPostSlidesQuery, getBlogPostsListQuery] = await Promise.all([
    query<GetBlogPostSlidesQuery>({
      query: GET_BLOG_POST_SLIDES
    }),
    query<GetBlogPostsListQuery>({
      query: GET_BLOG_POSTS_LIST
    })
  ])

  const blogPostSlides = getBlogPostSlidesQuery.data?.blogCollection.items || []

  const blogPosts = getBlogPostsListQuery.data?.blogCollection.items || []

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
                    <li><a href="#!"><FaAnglesLeft /></a></li>
                    <li className="active"><a href="#!">1</a></li>
                    <li><a href="#!">2</a></li>
                    <li><a href="#!">3</a></li>
                    <li><a href="#!">...</a></li>
                    <li><a href="#!">10</a></li>
                    <li><a href="#!"><FaAnglesRight /></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sidebar ps-lg-5">
                  <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <div className="form-group">
                      <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                      <button type="submit">
                        <img src="assets/images/icons/icon_search.svg" alt="Search Icon" />
                      </button>
                    </div>
                  </div>
                  <div className="post_list_block">
                    <h3 className="sidebar_widget_title">Related Posts</h3>
                    <ul className="unordered_list_block">
                      <li>
                        <h3 className="post_title">
                          <a href="blog_details.html">
                            Discovering IT Solutions with Experts - Gain Exclusive..
                          </a>
                        </h3>
                        <ul className="post_meta unordered_list">
                          <li>
                            <a href="#!">
                              <img src="assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                            </a>
                          </li>
                          <li>
                            <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="post_title">
                          <a href="blog_details.html">
                            Insights from Empowering Your Business through..
                          </a>
                        </h3>
                        <ul className="post_meta unordered_list">
                          <li>
                            <a href="#!">
                              <img src="assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                            </a>
                          </li>
                          <li>
                            <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3 className="post_title">
                          <a href="blog_details.html">
                            Insights into IT Solutions with Transform Your Operations..
                          </a>
                        </h3>
                        <ul className="post_meta unordered_list">
                          <li>
                            <a href="#!">
                              <img src="assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                            </a>
                          </li>
                          <li>
                            <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="post_category_wrap">
                    <h3 className="sidebar_widget_title">Categories</h3>
                    <ul className="post_category_list unordered_list_block">
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>Cybersecurity</span>
                          <span>(05)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>Tech Trends</span>
                          <span>(02)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>Digital Transformation</span>
                          <span>(02)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>IT Infrastructure</span>
                          <span>(04)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>Mobile App</span>
                          <span>(03)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa-solid fa-arrow-up-right"></i>
                          <span>Cloud Computing</span>
                          <span>(07)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="popular_tags">
                    <h3 className="sidebar_widget_title">Popular Tags</h3>
                    <ul className="tags_list unordered_list">
                      <li><a href="#!">Cybersecurity</a></li>
                      <li><a href="#!">TechSolutions</a></li>
                      <li><a href="#!">UX Design</a></li>
                      <li><a href="#!">App Dev</a></li>
                      <li><a href="#!">Data</a></li>
                      <li><a href="#!">Solution</a></li>
                      <li><a href="#!">Consultants</a></li>
                      <li><a href="#!">IT</a></li>
                      <li><a href="#!">Optimization</a></li>
                      <li><a href="#!">Startup</a></li>
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