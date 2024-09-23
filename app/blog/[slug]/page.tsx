import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

interface BlogDetailsPageProps {
  params: {
    slug: string;
  }
}

export default function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  return (
    <>
      <PageBanner title={`Blog Details ${params.slug}`}>
        Blog
        <Badge>Details 😍</Badge>
      </PageBanner>

      <section className="blog_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            <img src="assets/images/blog/blog_post_image_8.webp" alt="Techco - Blog Image" />
          </div>
          <div className="post_meta_wrap mb-4">
            <ul className="category_btns_group unordered_list">
              <li><a href="#!">Technology</a></li>
            </ul>
            <ul className="post_meta unordered_list">
              <li>
                <a href="#!">
                  <img src="assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                </a>
              </li>
            </ul>
          </div>
          <h2 className="details_item_title">
            Insider Perspectives on IT Solutions with Techco Thought Leaders.
          </h2>
          <p>
            Delve into the inner workings of IT solutions with Techco&apos;s esteemed thought leaders. With unparalleled expertise and a wealth of experience, our thought leaders provide invaluable insights into the ever-evolving landscape of technology.
          </p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <ul className="post_meta unordered_list">
                <li>
                  <a href="#!">
                    <img src="assets/images/icons/icon_user.svg" alt="Icon User" /> by Madura
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="assets/images/icons/icon_chat.svg" alt="Icon Chat" /> 50 Comments
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="assets/images/icons/icon_eye.svg" alt="Icon Eye" /> 20k Views
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="post_meta unordered_list justify-content-md-end">
                <li>
                  <a href="#!">
                    <img src="assets/images/icons/icon_link.svg" alt="Icon Link" /> Copy Link
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="assets/images/icons/icon_bookmark.svg" alt="Bookmark Chat" /> Bookmark
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mb-0" />
            <div className="section_space pb-0">
              <div className="row">
                <div className="col-lg-8">
                  <div className="blog_details_audio">
                    <button className="audio_play_btn" type="button">
                      <i className="fa-solid fa-play"></i>
                      <span>6:24</span>
                      <span>Listen to this article!</span>
                    </button>
                  </div>
                  <h3 className="details_item_info_title mb-5">
                    Revolutionizing Business Efficiency Navigating Growth with Optimal IT Infrastructure Enhancement
                  </h3>
                  <div className="row mb-4">
                    <div className="col-md-6 col-sm-6">
                      <div className="details_item_image m-0">
                        <img src="assets/images/blog/blog_post_image_9.webp" alt="Techco - Blog Image" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="details_item_image m-0">
                        <img src="assets/images/blog/blog_post_image_10.webp" alt="Techco - Blog Image" />
                      </div>
                    </div>
                  </div>
                  <p>
                    Gain exclusive insights into the world of IT solutions with Techco&apos;s distinguished thought leaders. With years of experience and a deep understanding of industry trends, our thought leaders offer invaluable perspectives that illuminate the path to technological excellence. From emerging technologies to innovative strategies, they provide unique insights that inform and inspire. Join us as we delve into the inner workings of IT solutions, exploring the challenges.
                  </p>
                  <p>
                    Embark on an illuminating journey into the world of IT solutions with Techco&apos;s esteemed thought leaders. Delve deep into the inner workings of technology as our seasoned experts share their wealth of knowledge and experience. With a finger on the pulse of industry trends and a keen eye for innovation, our thought leaders offer unparalleled insights that illuminate the path
                  </p>

                  <h3 className="details_item_info_title">Sample Heading</h3>
                  <p>
                    they provide a comprehensive and in-depth analysis that goes beyond surface-level . Join us as we uncover the secrets of IT solutions, guided by the wisdom and expertise of Techco&apos;s thought leaders. Prepare to be inspired, informed, and empowered to navigate the ever- landscape of technology with confidence and clarity. you&apos;ll gain access to unparalleled expertise and discover new possibilities for success in the ever-evolving world of technology.
                  </p>
                  <div className="row align-items-center mb-5">
                    <div className="col-md-6">
                      <div className="details_item_image m-0">
                        <img src="assets/images/blog/blog_post_image_11.webp" alt="Techco - Blog Image" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="icon_list unordered_list_block">
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Unveiling Emerging Technologies
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Navigating Complex Challenges
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Forecasting Future Trends
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Driving Innovation Strategies
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Exploring Industry Practices
                          </span>
                        </li>
                        <li>
                          <span className="icon_list_icon">
                            <i className="fa-solid fa-circle fa-fw"></i>
                          </span>
                          <span className="icon_list_text">
                            Empowering Transformation
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="details_item_info_title">3 Reasons to investing at this moment</h3>
                  <p className="mb-2">
                    Here are three key reasons emphasizing the importance of optimizing IT infrastructure for efficiency and growth:
                  </p>
                  <ul className="icon_list unordered_list_block mb-5">
                    <li>
                      <span className="icon_list_text">
                        1. Enhanced Operational Agility
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_text">
                        2. Resource Optimization & Cost Efficiency
                      </span>
                    </li>
                    <li>
                      <span className="icon_list_text">
                        3. Scalability and Innovation
                      </span>
                    </li>
                  </ul>
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
                              <img src="assets/images/icons/icon_facebook.svg" alt="Icon Facebook" />
                            </a>
                          </li>
                          <li>
                            <a className="rounded-circle" href="#!">
                              <img src="assets/images/icons/icon_twitter_x.svg" alt="Icon Twitter X" />
                            </a>
                          </li>
                          <li>
                            <a className="rounded-circle" href="#!">
                              <img src="assets/images/icons/icon_linkedin.svg" alt="Icon Linkedin" />
                            </a>
                          </li>
                          <li>
                            <a className="rounded-circle" href="#!">
                              <img src="assets/images/icons/icon_instagram.svg" alt="Icon Instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="post_author_box">
                    <div className="author_image">
                      <img src="assets/images/avatar/avatar_8.webp" alt="Techco - Blog Author Image" />
                    </div>
                    <div className="author_content">
                      <h3 className="author_name">About Anderson</h3>
                      <h4 className="author_designation">Content Editor</h4>
                      <p>
                        A content editor plays a pivotal role in shaping and refining the narrative and quality of digital content. This role involves overseeing the creation.
                      </p>
                      <ul className="author_social_icons unordered_list">
                        <li>
                          <a className="rounded-circle" href="#!">
                            <i className="fa-brands fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a className="rounded-circle" href="#!">
                            <i className="fa-brands fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="other_posts_nav">
                    <a href="#!">
                      <i className="fa-regular fa-arrow-left-long"></i>
                      <span>
                        <strong>Exploring IT Solutions with Techco</strong>
                        <small>Dec 24, 2024</small>
                      </span>
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-grid-2"></i>
                    </a>
                    <a href="#!">
                      <span>
                        <strong>Exploring IT Solutions with Techco</strong>
                        <small>Dec 24, 2024</small>
                      </span>
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </a>
                  </div>

                  <hr className="m-0" />

                  <div className="comment_area">
                    <h3 className="details_item_info_title mb-5">Comments (3)</h3>
                    <ul className="comments_list unordered_list_block">
                      <li>
                        <div className="comment_item">
                          <div className="comment_author_thumbnail">
                            <img src="assets/images/avatar/avatar_9.webp" alt="Techco - Comment Author Avatar" />
                          </div>
                          <div className="comment_author_content">
                            <h4 className="comment_author_name">John Smith</h4>
                            <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                            <p className="mb-0">
                              &ldquo;Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!&rdquo;
                            </p>
                            <a className="comment_reply_btn" href="#!">Reply</a>
                          </div>
                        </div>
                        <ul className="comments_list unordered_list_block">
                          <li>
                            <div className="comment_item">
                              <div className="comment_author_thumbnail">
                                <img src="assets/images/avatar/avatar_10.webp" alt="Techco - Comment Author Avatar" />
                              </div>
                              <div className="comment_author_content">
                                <h4 className="comment_author_name">Daniel Garcia</h4>
                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                <p className="mb-0">
                                  &ldquo;Our experience with Techco has been exceptional. Their commitment to customer satisfaction stands out. Grateful for their partnership.&rdquo;
                                </p>
                                <a className="comment_reply_btn" href="#!">Reply</a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment_item">
                              <div className="comment_author_thumbnail">
                                <img src="assets/images/avatar/avatar_9.webp" alt="Techco - Comment Author Avatar" />
                              </div>
                              <div className="comment_author_content">
                                <h4 className="comment_author_name">John Smith</h4>
                                <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                                <p className="mb-0">
                                  &ldquo;Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!&rdquo;
                                </p>
                                <a className="comment_reply_btn" href="#!">Reply</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="comment_item">
                          <div className="comment_author_thumbnail">
                            <img src="assets/images/avatar/avatar_11.webp" alt="Techco - Comment Author Avatar" />
                          </div>
                          <div className="comment_author_content">
                            <h4 className="comment_author_name">John Smith</h4>
                            <div className="comment_time">Dec 24, 2024 at 10:21am</div>
                            <p className="mb-0">
                              &ldquo;Working with Techco has been a game-changer. Their innovative IT solutions boosted our efficiency tenfold. Highly recommend!&rdquo;
                            </p>
                            <a className="comment_reply_btn" href="#!">Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <hr className="m-0" />

                  <div className="comment_area mb-0">
                    <h3 className="details_item_info_title mb-1">Leave a Comment</h3>
                    <p className="mb-5">
                      Your email address will not be published. Required fields are marked <sup className="text-primary">*</sup>
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_name">Full Name <sup className="text-primary">*</sup></label>
                          <input id="input_name" className="form-control" type="text" name="name" placeholder="Goladra Gomaz" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_email">Your Email <sup className="text-primary">*</sup></label>
                          <input id="input_email" className="form-control" type="email" name="email" placeholder="Techco@example.com" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_textarea">Comments / Questions <sup className="text-primary">*</sup></label>
                          <textarea id="input_textarea" className="form-control" name="message" placeholder="How can we help you?" />
                        </div>
                        <div className="form-check mb-5">
                          <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <span className="btn_label" data-text="Submit Comment">Submit Comment</span>
                          <span className="btn_icon">
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </span>
                        </button>
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