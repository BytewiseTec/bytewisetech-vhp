import Link from 'next/link'
import { PiArrowUpRightBold } from 'react-icons/pi'

export default function CallToAction() {
  return (
    <section
      className="calltoaction_section parallaxie"
    >
      <div className="container text-center">
        <div className="heading_block text-dark">
          <h2 className="heading_text">
            Ready to Work, Let&apos;s Chat
          </h2>
          <p className="heading_description mb-0">
            Our team of experts is ready to collaborate with you every step of the way, from initial consultation to implementation.
          </p>
        </div>
        <Link className="btn btn-primary" href="/contact" title="Contact Us Today!">
          <span className="btn_label" data-text="Contact Us Today!">Contact Us Today!</span>
          <span className="btn_icon">
            <PiArrowUpRightBold size={20} />
          </span>
        </Link>
      </div>
    </section>
  )
}