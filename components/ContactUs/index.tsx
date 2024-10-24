'use client'

import { useSuspenseQuery } from '@apollo/client'
import { sendMail } from '../../utils/send-mail'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'
import { ContactQuery, GET_CONTACT } from '@/app/contact/query'

export default function ContactUs() {
  const { data } = useSuspenseQuery<ContactQuery>(GET_CONTACT)
  const contact = data?.page || {}

  const phone = contact?.tiles.find(tile => tile.id === 'phone')
  const email = contact?.tiles.find(tile => tile.id === 'email')
  const address = contact?.tiles.find(tile => tile.id === 'address')

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
                  <a href={phone?.href}>
                    <span className="icon">
                      <i className="fa-solid fa-phone-volume"></i>
                    </span>
                    <span className="text">{phone?.description}</span>
                  </a>
                </li>
                <li>
                  <a href={email?.href}>
                    <span className="icon">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <span className="text">{email?.description}</span>
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    <span className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="text">{address?.description}</span>
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
            </form>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_image_1">
        <img src="/assets/images/shapes/shape_line_5.svg" alt="Bytewise Tech Shape" />
      </div>
      <div className="decoration_item shape_image_2">
        <img src="/assets/images/shapes/shape_line_6.svg" alt="Bytewise Tech Shape" />
      </div>
      <Toaster />
    </section>
  )
}