'use client'

export default function ContactFormLoading() {
  return (
    <div className="contact_form mb-0">
      <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
      <p className="mb-5">
        Give us a chance to serve and bring magic to your brand.
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title">Full Name</label>
            <div className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="input_title">Your Email</label>
            <div className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title">Your Phone</label>
            <div className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title">Company Name</label>
            <div className="placeholder-glow">
              <span className="placeholder col-12"></span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="input_title">Message</label>
            <div className="placeholder-glow">
              <span className="placeholder col-12" style={{ height: '100px' }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
