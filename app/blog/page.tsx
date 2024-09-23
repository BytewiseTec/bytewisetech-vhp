import Badge from '@/components/Badge'
import PageBanner from '@/components/PageBanner'

export default function BlogPage() {
  return (
    <>
      <PageBanner title="Our Latest Blog">
        Our
        <Badge>Blogs 😍</Badge>
      </PageBanner>

      <section className="blog_section section_space bg-light">
        <div className="container">
          <div className="blog_onecol_carousel overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="blog_post_block content_over_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_4.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Branding</a></li>
                        <li><a href="#!">UI/UX</a></li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-calendar-days"></i> 11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Exploring IT Solutions - Unravel the Latest Technological Advancements.
                      </a>
                    </h3>
                    <p className="mb-0">
                      Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog_post_block content_over_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_4.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Branding</a></li>
                        <li><a href="#!">UI/UX</a></li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-calendar-days"></i> 11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Exploring IT Solutions - Unravel the Latest Technological Advancements.
                      </a>
                    </h3>
                    <p className="mb-0">
                      Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog_post_block content_over_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_4.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Branding</a></li>
                        <li><a href="#!">UI/UX</a></li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-calendar-days"></i> 11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Exploring IT Solutions - Unravel the Latest Technological Advancements.
                      </a>
                    </h3>
                    <p className="mb-0">
                      Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="blog_post_block content_over_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_4.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Branding</a></li>
                        <li><a href="#!">UI/UX</a></li>
                      </ul>
                      <ul className="post_meta unordered_list">
                        <li>
                          <a href="#!">
                            <i className="fa-regular fa-calendar-days"></i> 11/12/2024
                          </a>
                        </li>
                        <li>
                          <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Exploring IT Solutions - Unravel the Latest Technological Advancements.
                      </a>
                    </h3>
                    <p className="mb-0">
                      Embark on an enlightening journey through the realm of IT solutions as we delve into the latest technological advancements shaping the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="b1cc-swiper-button-prev"
              type="button"
              style={{ backgroundImage: 'url(\'assets/images/shapes/shape_arrow_right.svg\')' }}
            >
              <i className="fa-solid fa-angles-left"></i>
            </button>
            <button
              className="b1cc-swiper-button-next"
              type="button"
              style={{ backgroundImage: 'url(\'assets/images/shapes/shape_arrow_left.svg\')' }}
            >
              <i className="fa-solid fa-angles-right"></i>
            </button>
            <div className="b1cc-swiper-pagination p-0"></div>
          </div>

          <div className="section_space pb-0">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_5.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Technology</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Charting the Course of IT Solutions with Techco Visionaries.
                      </a>
                    </h3>
                    <p>
                      Embark on a journey into the dynamic  of IT solutions.
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Tips & Tricks</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Insider Perspectives on IT Solutions with Techco Thought Leaders.
                      </a>
                    </h3>
                    <p>
                      Dive deep into the world of IT solutions with Techco&apos;s esteemed thought leaders. With unrivaled expertise and a passion for innovation,.
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_6.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Technology</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        The Journey of IT Solutions with Techco Innovators.
                      </a>
                    </h3>
                    <p>
                      Embark on an enlightening journey through evolution.
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Tips & Tricks</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Inspiring Stories of IT Solutions from Techco Thought Leaders.
                      </a>
                    </h3>
                    <p>
                      Through their visionary leadership and innovative strategies, our thought leaders have paved the way for transformative..
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_image">
                    <a className="image_wrap" href="blog_details.html">
                      <img src="assets/images/blog/blog_post_image_7.webp" alt="Blog Post Image 1" />
                    </a>
                  </div>
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Technology</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        The Journey of IT Solutions with Techco Innovators.
                      </a>
                    </h3>
                    <p>
                      our innovators navigate the ever-evolving landscape..
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="blog_post_block image_left_layout">
                  <div className="blog_post_content">
                    <div className="post_meta_wrap">
                      <ul className="category_btns_group unordered_list">
                        <li><a href="#!">Technology</a></li>
                      </ul>
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
                    </div>
                    <h3 className="blog_post_title">
                      <a href="blog_details.html">
                        Exploring the Evolution of IT Solutions with Techco Visionaries.
                      </a>
                    </h3>
                    <p>
                      the evolution of IT solutions from inception to implementation. Discover the insights, strategies, and breakthroughs that have propelled us forward, and gain..
                    </p>
                    <a className="btn btn-dark" href="blog_details.html">
                      <span className="btn_label" data-text="Read More">Read More</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pagination_wrap pb-0">
                  <ul className="pagination_nav unordered_list justify-content-center">
                    <li><a href="#!"><i className="fa-solid fa-angles-left"></i></a></li>
                    <li className="active"><a href="#!">1</a></li>
                    <li><a href="#!">2</a></li>
                    <li><a href="#!">3</a></li>
                    <li><a href="#!">...</a></li>
                    <li><a href="#!">10</a></li>
                    <li><a href="#!"><i className="fa-solid fa-angles-right"></i></a></li>
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