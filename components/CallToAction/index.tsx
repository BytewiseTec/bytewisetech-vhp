export default function CallToAction() {
  return (
    <section
      className="calltoaction_section parallaxie"
      style={{ backgroundImage: 'url(\'assets/images/backgrounds/bg_image_1.webp\')' }}
    >
      <div className="container text-center">
        <div className="heading_block text-white">
          <h2 className="heading_text">
            Ready to Work, Let&apos;s Chat
          </h2>
          <p className="heading_description mb-0">
            Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.
          </p>
        </div>
        <a className="btn btn-primary" href="contact.html">
          <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
          <span className="btn_icon">
            <i className="fa-solid fa-arrow-up-right"></i>
          </span>
        </a>
      </div>
    </section>
  )
}