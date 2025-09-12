import dynamic from 'next/dynamic'

import ContactFormLoading from './loading'

const ContactForm = dynamic(() => import('./index'), {
  ssr: false,
  loading: () => <ContactFormLoading />
})

export default ContactForm
