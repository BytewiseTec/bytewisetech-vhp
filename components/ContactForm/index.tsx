'use client'

import { useForm } from 'react-hook-form'
import { PiArrowUpRightBold } from 'react-icons/pi'
import { toast, Toaster } from 'sonner'

export default function ContactForm() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      message: '',
    }
  })

  const isLoading = formState.isSubmitting

  const onSubmit = async (values: any) => {
    const { sendMail } = await import('../../utils/send-mail')

    const response = await sendMail({
      email: values.email,
      subject: 'New lead from site',
      text: `Name: ${values.name}\nPhone: ${values.phone}\nCompany: ${values.companyName}\nEmail: ${values.email}\nMessage: ${values.message}`,
      html: `
        <h1>New Lead From Site</h1>
        <p><strong>Name:</strong> ${values.name}</p>
        <p><strong>Phone:</strong> ${values.phone}</p>
        <p><strong>Company:</strong> ${values.companyName}</p>
        <p><strong>Email:</strong> ${values.email}</p>
        <p><strong>Message:</strong> ${values.message}</p>
      `,
    })

    if (response?.messageId) {
      toast.success('Message Sent Successfully.')
    } else {
      toast.error('Failed To send message.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form-enhanced">
      <div className="contact_form mb-0">
        <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
        <p className="mb-5">
          Give us a chance to serve and bring magic to your brand.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_name">
                Full Name <span className="text-danger">*</span>
              </label>
              <input 
                id="input_name" 
                className="form-control" 
                type="text" 
                {...register('name', { required: 'Full name is required' })} 
                placeholder="John Doe" 
                required 
                aria-describedby="name-error"
              />
              {formState.errors.name && (
                <div id="name-error" className="text-danger mt-1 small">
                  {formState.errors.name.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                Your Email <span className="text-danger">*</span>
              </label>
              <input 
                id="input_email" 
                className="form-control" 
                type="email" 
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email'
                  }
                })} 
                placeholder="doe@example.com" 
                required 
                aria-describedby="email-error"
              />
              {formState.errors.email && (
                <div id="email-error" className="text-danger mt-1 small">
                  {formState.errors.email.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">Your Phone</label>
              <input 
                id="input_phone" 
                className="form-control" 
                type="tel" 
                {...register('phone')} 
                placeholder="+1 (555) 123-4567" 
                aria-describedby="phone-help"
              />
              <small id="phone-help" className="form-text text-muted">
                Optional - We'll call you back if needed
              </small>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">Company Name</label>
              <input 
                id="input_company" 
                className="form-control" 
                type="text" 
                {...register('companyName')} 
                placeholder="Your Company Name" 
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                Message <span className="text-danger">*</span>
              </label>
              <textarea 
                id="input_textarea" 
                className="form-control" 
                {...register('message', { required: 'Message is required' })} 
                placeholder="Tell us about your project and how we can help you..."
                rows={5}
                aria-describedby="message-error"
              />
              {formState.errors.message && (
                <div id="message-error" className="text-danger mt-1 small">
                  {formState.errors.message.message}
                </div>
              )}
            </div>
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isLoading}
              aria-describedby="submit-help"
            >
              <span className="btn_label" data-text={isLoading ? "Sending..." : "Send Message"}>
                {isLoading ? "Sending..." : "Send Message"}
              </span>
              <span className="btn_icon">
                <PiArrowUpRightBold size={20} />
              </span>
            </button>
            <small id="submit-help" className="form-text text-muted d-block mt-2">
              We'll respond within 24 hours during business days
            </small>
          </div>
        </div>
      </div>

      <Toaster />
    </form>
  )
}