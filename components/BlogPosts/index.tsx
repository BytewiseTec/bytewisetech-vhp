export default function BlogPosts() {
  return (
    <section className="blog_section blog_section_space section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
          >
            Our Articles
          </div>
          <h2 className="heading_text mb-0">
            Latest <mark>Articles</mark>
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <a className="image_wrap" href="blog_details.html">
                  <img src="/assets/images/blog/blog_post_image_12.webp" alt="Blog Post Image 1" />
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <a href="blog_details.html">
                    How Our Software Solutions Drive Insights.
                  </a>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fa-regular fa-circle-user"></i> By <b>Alex</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                    </a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <a className="image_wrap" href="blog_details.html">
                  <img src="/assets/images/blog/blog_post_image_13.webp" alt="Blog Post Image 1" />
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <a href="blog_details.html">
                    Exploring Emerging Trends in Software Development.
                  </a>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fa-regular fa-circle-user"></i> By <b>Alex</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                    </a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_post_block layout_2">
              <div className="blog_post_image">
                <a className="image_wrap" href="blog_details.html">
                  <img src="/assets/images/blog/blog_post_image_14.webp" alt="Blog Post Image 1" />
                  <i className="fa-solid fa-arrow-up-right"></i>
                </a>
              </div>
              <div className="blog_post_content p-0">
                <h3 className="blog_post_title mb-0">
                  <a href="blog_details.html">
                    How Software Integration Can Improve Workflow.
                  </a>
                </h3>
                <ul className="post_meta unordered_list">
                  <li>
                    <a href="#!">
                      <i className="fa-regular fa-circle-user"></i> By <b>Alex</b>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <img src="/assets/images/icons/icon_calendar.svg" alt="Icon Calendar" /> 11/12/2024
                    </a>
                  </li>
                  <li>
                    <a href="#!"><i className="fa-regular fa-comment-lines"></i> 24</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_line_7.svg" alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/assets/images/shapes/shape_angle_4.webp" alt="Techco Shape Angle" />
      </div>
    </section>
  )
}