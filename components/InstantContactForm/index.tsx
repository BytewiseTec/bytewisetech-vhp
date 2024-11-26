'use client'

import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { sendMail } from '../../utils/send-mail'

export default function InstantContactForm() {
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
      toast.success('Application Submitted Successfully.')
    } else {
      toast.error('Failed To send application.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <input id="input_name" className="form-control" type="text" {...register('name')} placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                <i className="fa-regular fa-envelope"></i>
              </label>
              <input id="input_email" className="form-control" type="email" {...register('email')} placeholder="Your Enter" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                <i className="fa-regular fa-phone-volume"></i>
              </label>
              <input id="input_phone" className="form-control" type="tel" {...register('phone')} placeholder="Your Phone No." required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">
                <i className="fa-regular fa-globe"></i>
              </label>
              <input id="input_company" className="form-control" type="text" {...register('companyName')} placeholder="Your Company Name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                <i className="fa-regular fa-comments"></i>
              </label>
              <textarea id="input_textarea" className="form-control" {...register('message')} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <span className="btn_label" data-text="Send Request">Send Request</span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </form>
  )
}