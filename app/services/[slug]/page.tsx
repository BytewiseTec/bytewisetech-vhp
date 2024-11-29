import Badge from '../../../components/Badge'
import PageBanner from '../../../components/PageBanner'
import { GET_SERVICE, GET_SERVICE_ID, ServiceIdQuery, ServiceQuery } from './query'
import { renderHtml } from '../../../utils/renderers'
import { BLOCKS } from '@contentful/rich-text-types'
import { query } from '../../ApolloClient'
import ProcessesAccordion from '../../../components/ProcessesAccordion'
import ItemIndicator from '../../../components/ProcessesAccordion/ItemIndicator'
import { GET_SERVICES, ServicesLinksQuery } from '@/components/Navbar/query'

import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import Image from 'next/image'

type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export default async function ServiceDetailsPage({ params }: ServiceDetailsPageProps) {
  const { slug } = await params
  const { data: servicesData } = await query<ServiceIdQuery>({
    query: GET_SERVICE_ID,
    variables: {
      slug,
    }
  })

  const { items } = servicesData.serviceCollection || {}

  if (!items?.length) {
    return null
  }

  const { data: serviceData } = await query<ServiceQuery>({
    query: GET_SERVICE,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { service } = serviceData || {}

  return (
    <>
      <PageBanner title={service.name}>
        Services
        <Badge>Details 😍</Badge>
      </PageBanner>

        <section className="service_details_section section_space bg-light">
          <div className="container">
            {service.p0 && <div dangerouslySetInnerHTML={{ __html: renderHtml(service.p0.json) }} />}

            <h3 className="details_item_info_title">Service Process</h3>
            <div className="row mb-5 align-items-center justify-content-lg-between">
              <div className="col-lg-6">
                <ProcessesAccordion processes={service.processes} />
              </div>
              <div className="col-lg-5">
                <ItemIndicator processes={service.processes} />
              </div>
            </div>

            {service.p1 && (
              <div dangerouslySetInnerHTML={{ __html: renderHtml(service.p1.json, {
                renderNode: {
                  [BLOCKS.HEADING_3]: (node, next) => `<h3 class="details_item_info_title">${next(node.content)}</h3>`,
                  [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-4">${next(node.content)}</p>`
                }
              }) }} />
            )}
            
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  {service.outcomes.slice(0, service.outcomes.length / 2).map((outcome, idx) => (
                    <li key={idx}>
                      <span className="icon_list_icon">
                        {outcome.title && (
                          <Image src={IconCheck} alt={outcome.title} />
                        )}
                      </span>
                      <span className="icon_list_text">
                        {outcome.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="icon_list unordered_list_block">
                  {service.outcomes.slice(service.outcomes.length / 2, service.outcomes.length).map((outcome, idx) => (
                    <li key={idx}>
                      <span className="icon_list_icon">
                        {outcome.title && (
                          <Image src={IconCheck} alt={outcome.title} />
                        )}
                      </span>
                      <span className="icon_list_text">
                        {outcome.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="/assets/images/services/service_details_image_2.webp" alt="Service Details Image" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="/assets/images/services/service_details_image_3.webp" alt="Service Details Image" />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="details_item_image m-0">
                  <img src="/assets/images/services/service_details_image_4.webp" alt="Service Details Image" />
                </div>
              </div>
            </div> */}
          </div>
        </section>
    </>
  )
}

export async function generateStaticParams() {
  const { data: servicesData } = await query<ServicesLinksQuery>({
    query: GET_SERVICES
  })

  const { items } = servicesData.serviceCollection || {}

  return items.map(({ slug }) => ({ slug }))
}
