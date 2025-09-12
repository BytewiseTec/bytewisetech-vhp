'use client'

import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { FaEnvelopeOpenText, FaRegComments, FaRegEnvelope, FaRegUser } from 'react-icons/fa6'
import { LiaPhoneVolumeSolid } from 'react-icons/lia'
import { CiGlobe } from 'react-icons/ci'
import { PiArrowUpRightBold } from 'react-icons/pi'

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
          <FaEnvelopeOpenText color="#0044EB" />{' '}
          Let&apos;s Connect!
        </div>
        <h3 className="form_title">
          Send us a message, and we&apos;ll promptly discuss your project with you.
        </h3>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_name">
                <FaRegUser color="#676767" />
              </label>
              <input id="input_name" className="form-control" type="text" {...register('name')} placeholder="Your Name" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_email">
                <FaRegEnvelope color="#676767" />
              </label>
              <input id="input_email" className="form-control" type="email" {...register('email')} placeholder="Your Enter" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_phone">
                <LiaPhoneVolumeSolid color="#676767" size={18} />
              </label>
              <input id="input_phone" className="form-control" type="tel" {...register('phone')} placeholder="Your Phone No." required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="input_title" htmlFor="input_company">
                <CiGlobe color="#676767" size={18} />
              </label>
              <input id="input_company" className="form-control" type="text" {...register('companyName')} placeholder="Your Company Name" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="input_title" htmlFor="input_textarea">
                <FaRegComments color="#676767" size={18} />
              </label>
              <textarea id="input_textarea" className="form-control" {...register('message')} placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              <span className="btn_label" data-text="Send Request">Send Request</span>
              <span className="btn_icon">
                <PiArrowUpRightBold size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </form>
  )
}