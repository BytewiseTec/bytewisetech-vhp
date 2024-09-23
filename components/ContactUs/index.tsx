export default function ContactUs() {
  return (
    <section className="contact_section pb-80 bg-light section_decoration">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact_method_box">
              <div className="heading_block">
                <div
                  className="heading_focus_text has_underline d-inline-flex mb-3"
                  style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
                >
                  You Are Here
                </div>
                <h2 className="heading_text mb-0">
                  Let&apos;s Start
                </h2>
                <p className="heading_description mb-0">Initiating Your Journey to Success and Growth.</p>
              </div>
              <ul className="contact_method_list unordered_list_block">
                <li>
                  <a href="tel:+8801680636189">
                    <span className="icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="text">+880-1680-6361-89</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:Techco@gmail.com">
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="text">Techco@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <span className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="text">Sunshine Business Park</span>
                  </a>
                </li>
              </ul>
              <ul className="support_step unordered_list_block">
                <li>
                  <span className="serial_number">01</span>
                  <span className="text">Share your requirements</span>
                </li>
                <li>
                  <span className="serial_number">02</span>
                  <span className="text">Discuss them with our experts</span>
                </li>
                <li>
                  <span className="serial_number">03</span>
                  <span className="text">Get a free quote</span>
                </li>
                <li>
                  <span className="serial_number">04</span>
                  <span className="text">Start the project</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="instant_contact_form">
              <div className="small_title">
                <i className="fa-solid fa-envelope-open-text"></i>
                Let&apos;s Connect!
              </div>
              <h3 className="form_title">
                Send us a message, and we&apos;ll promptly discuss your project with you.
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="input_name">
                      <i className="fa-regular fa-user"></i>
                    </label>
                    <input id="input_name" className="form-control" type="text" name="name" placeholder="Your Name" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="input_email">
                      <i className="fa-regular fa-envelope"></i>
                    </label>
                    <input id="input_email" className="form-control" type="email" name="email" placeholder="Your Enter" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="input_phone">
                      <i className="fa-regular fa-phone-volume"></i>
                    </label>
                    <input id="input_phone" className="form-control" type="tel" name="phone" placeholder="Your Phone No." required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="input_title" htmlFor="input_company">
                      <i className="fa-regular fa-globe"></i>
                    </label>
                    <input id="input_company" className="form-control" type="text" name="companyname" placeholder="Your Company Name" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label className="input_title" htmlFor="input_textarea">
                      <i className="fa-regular fa-comments"></i>
                    </label>
                    <textarea id="input_textarea" className="form-control" name="message" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <span className="btn_label" data-text="Send Request">Send Request</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_line_5.svg" alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/assets/images/shapes/shape_line_6.svg" alt="Techco Shape" />
      </div>
      <div className="decoration_item shape_image_3">
        <img src="/assets/images/shapes/shape_space_5.svg" alt="Techco Shape" />
      </div>
    </section>
  )
}