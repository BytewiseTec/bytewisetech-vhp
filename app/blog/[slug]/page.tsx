import Image from 'next/image'
import dayjs from 'dayjs'

import { query } from '@/app/ApolloClient'
import { renderDomToReact } from '@/utils/renderers'
import { CopyToClipboardLink } from '@/components/Shared/CopyToClipboardLink'
import { AddToBookmarks } from '@/components/Shared/AddToBookmarks'

import PageBanner from '../../../components/PageBanner'
import IconCalendar from '../../../public/assets/images/icons/icon_calendar.svg'
import IconUser from '../../../public/assets/images/icons/icon_user.svg'

import { GET_BLOG_POST, GET_BLOG_POST_ID, GetBlogPostIdQuery, GetBlogPostQuery } from './query'

interface BlogDetailsPageProps {
  params: Promise<{ slug: string; }>
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params
  const { data: blogPostIdData } = await query<GetBlogPostIdQuery>({
    query: GET_BLOG_POST_ID,
    variables: {
      slug,
    }
  })

  const { items } = blogPostIdData.blogCollection || {}

  if (!items?.length) {
    return null
  }

  const { data: blogPostData } = await query<GetBlogPostQuery>({
    query: GET_BLOG_POST,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { blog: post } = blogPostData || {}
  return (
    <>
      <PageBanner title={post.title} />

      <section className="blog_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            {post.banner && (
              <Image
                src={post.banner.url}
                width={post.banner.width}
                height={post.banner.height}
                alt={post.banner.title}
              />
            )}
          </div>
          <div className="post_meta_wrap mb-4">
            <ul className="category_btns_group unordered_list">
              <li><a href="#!">{post.category}</a></li>
            </ul>
            <ul className="post_meta unordered_list">
              <li>
                <a href="#!">
                  <Image src={IconCalendar} alt="Icon Calendar" /> {dayjs(post.publishedDate).format('MM/DD/YYYY')}
                </a>
              </li>
            </ul>
          </div>
          <h2 className="details_item_title">
            {post.title}
          </h2>
          <p>
            {post.excerpt}
          </p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="post_meta unordered_list">
                <li>
                  <a href="#!">
                    <Image src={IconUser} alt="Icon User" /> by {post.author.fullName}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="post_meta unordered_list justify-content-md-end">
                <li>
                  <CopyToClipboardLink />
                </li>
                <li>
                  <AddToBookmarks />
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-0" />
          <div className="section_space pb-0">
            <div className="row">
              <div className="col-lg-8">
                {renderDomToReact(post.body.json)}
                <hr className="mt-0 mb-5" />
                <div className="row">
                  <div className="col-md-6">
                    <ul className="tags_list unordered_list">
                      <li><a href="#!">Solution</a></li>
                      <li><a href="#!">Consultants</a></li>
                      <li><a href="#!">IT</a></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <div className="post_share_link">
                      <ul className="social_icons_block unordered_list justify-content-md-end">
                        <li>
                          <a className="rounded-circle" href="#!">
                            <img src="/assets/images/icons/icon_facebook.svg" alt="Icon Facebook" />
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <img src="/assets/images/icons/icon_twitter_x.svg" alt="Icon Twitter X" />
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <img src="/assets/images/icons/icon_linkedin.svg" alt="Icon Linkedin" />
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <img src="/assets/images/icons/icon_instagram.svg" alt="Icon Instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="sidebar ps-lg-5">
                  <div className="search_form">
                    <h3 className="sidebar_widget_title">Search</h3>
                    <div className="form-group">
                      <input className="form-control" type="search" name="search" placeholder="Search your keyword" />
                      <button type="submit">
                        <img src="/assets/images/icons/icon_search.svg" alt="Search Icon" />
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
                              <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
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
                              <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
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
                              <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
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