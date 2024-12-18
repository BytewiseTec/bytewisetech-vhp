import Image from 'next/image'
import shapeLine6 from '../../public/assets/images/shapes/shape_line_6.svg'
import { FaCircle } from 'react-icons/fa6'
import { FAQ } from './query'
import { ListItem } from '@/app/content.types'

const COL_SIZE = 4

interface FAQsProps {
  faqs: FAQ[]
}

export default function FAQs({ faqs }: FAQsProps) {
  const chunkedFaqAttributes = (attributes: ListItem[]) => {
    const chunked = []
    for (let i = 0; i < attributes.length; i += COL_SIZE) {
      chunked.push(attributes.slice(i, i + COL_SIZE))
    }
    return chunked
  }

  return (
    <section className="faq_section section_decoration">
      <div className="container">
        <div className="heading_block text-center">
          <div
            className="heading_focus_text has_underline d-inline-flex"
            style={{ backgroundImage: 'url(\'assets/images/shapes/shape_title_under_line.svg\')' }}
          >
            F.A.Q.
          </div>
          <h2 className="heading_text mb-0">
            Need a <mark>Support?</mark>
          </h2>
        </div>

        <div className="faq_accordion accordion" id="faq_accordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target={`#faq_collapse_${index}`} aria-expanded={index === 0 ? 'true' : 'false'} aria-controls={`faq_collapse_${index}`}>
                Q. {faq.question}
              </div>
              <div id={`faq_collapse_${index}`} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#faq_accordion">
                <div className="accordion-body">
                  <div className="text_a">A.</div>
                  <p>
                    {faq.answer}
                  </p>
                  <div className="row">
                    {chunkedFaqAttributes(faq.attributes).map((chunk, idx) => (
                      <div key={idx} className="col-md-6">
                        <ul className="icon_list unordered_list_block">
                          {chunk.map((attr, idx) => (
                            <li key={idx}>
                              <span className="icon_list_icon">
                                <FaCircle color="#0044EB" size={6} />
                              </span>
                              <span className="icon_list_text" dangerouslySetInnerHTML={{ __html: attr.description || '' }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_image_2">
        <Image src={shapeLine6} alt="Bytewise Tech Shape" />
      </div>
    </section>
  )
}