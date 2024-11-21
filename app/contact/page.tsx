'use client'

import { sendMail } from '../../utils/send-mail'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { ContactQuery, GET_CONTACT } from './query'
import { useSuspenseQuery } from '@apollo/client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Bytewise Technologies',
  description: 'Get in touch with us. We are here to help you grow your business.',
  keywords: 'contact, bytewise, technologies, business, grow, help',
  authors: { name: 'Bytewise Technologies', url: 'https://bytewisetechnologies.com' },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Contact - Bytewise Technologies',
    description: 'Get in touch with us. We are here to help you grow your business.',
    url: 'https://bytewisetechnologies.com/contact',
    siteName: 'Bytewise Technologies',
  },
  alternates: {
    canonical: 'https://www.bytewisetechnologies.com/contact',
  }
}

export default function ContactPage() {
  const { data } = useSuspenseQuery<ContactQuery>(GET_CONTACT)
  const contact = data?.page || {}

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
      toast.success('Message Sent Successfully.')
    } else {
      toast.error('Failed To send message.')
    }
  }
  return (
    <>
      <section
        className="page_banner_section text-center"
      >
        <div className="container">
          <div className="heading_focus_text text-white">
            <span className="badge bg-secondary">Contact</span>
            Us 😍
          </div>
          <h1 className="page_title mb-0 text-white">Contact Us</h1>
        </div>
      </section>

      <section className="contact_section section_space bg-light">
        <div className="container">
          <div className="contact_info_box row">
            {contact.tiles.map((contactItem, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
              <div className="iconbox_block text-center">
                <div className="iconbox_icon">
                  <img src={contactItem.icon} alt={`${contactItem.title} SVG Icon`} />
                </div>
                <div className="iconbox_content">
                  <h3 className="iconbox_title">{contactItem.title}</h3>
                  <p className="mb-0">
                    {contactItem.description}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>

          <div className="section_space pb-0">
            <div className="row justify-content-lg-between">
              <div className="col-lg-7">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="contact_form mb-0">
                    <h3 className="details_item_info_title mb-1">Send Us A Message</h3>
                    <p className="mb-5">
                      Give us chance to serve and bring magic to your brand.
                    </p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_name">Full Name
                          </label>
                          <input id="input_name" className="form-control" type="text" {...register('name')} placeholder="Jhon Doe" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_email">Your Email
                          </label>
                          <input id="input_email" className="form-control" type="email" {...register('email')} placeholder="doe@example.com" required />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_phone">Your Phone</label>
                          <input id="input_phone" className="form-control" type="tel" {...register('phone')} placeholder="+8250-3560 6565" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="input_title" htmlFor="input_textarea">Message</label>
                          <textarea id="input_textarea" className="form-control" {...register('message')} placeholder="How can we help you?" />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                          <span className="btn_label" data-text="Send Message">Send Message</span>
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
        </div>
      </section>
      <Toaster />
    </>
  )
}
