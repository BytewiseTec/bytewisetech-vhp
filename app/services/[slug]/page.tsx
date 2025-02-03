import { BLOCKS } from '@contentful/rich-text-types'
import Image from 'next/image'
import { Metadata } from 'next'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Script from 'next/script'

import { GET_SERVICES, ServicesLinksQuery } from '@/components/Navbar/query'
import generateStructuredData from '@/utils/structured-data'

import { renderDomToReact } from '../../../utils/renderers'
import { query } from '../../ApolloClient'
import ProcessesAccordion from '../../../components/ProcessesAccordion'
import ItemIndicator from '../../../components/ProcessesAccordion/ItemIndicator'
import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import PageBanner from '../../../components/PageBanner'

import { GET_SERVICE, GET_SERVICE_ID, ServiceIdQuery, ServiceQuery } from './query'

type ServiceDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: ServiceDetailsPageProps,
): Promise<Metadata> {
  const { slug } = await params
  const { data: servicesData } = await query<ServiceIdQuery>({ query: GET_SERVICE_ID, variables: { slug } })

  const { items } = servicesData.serviceCollection || {}

  if (!items?.length) {
    return {}
  }

  const { data: serviceData } = await query<ServiceQuery>({
    query: GET_SERVICE,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { service } = serviceData || {}

  if (!service) {
    return {}
  }

  const description = documentToPlainTextString(service.p0.json)

  return {
    title: `${service.name} - Bytewise Technologies`,
    description,
    keywords: service.areasjson,
    openGraph: {
      locale: 'en_US',
      type: 'website',
      title: `${service.name} - Bytewise Technologies`,
      description,
      url: `https://bytewisetechnologies.com/services/${slug}`,
      siteName: 'Bytewise Technologies',
    },
    alternates: {
      canonical: `https://bytewisetechnologies.com/services/${slug}`,
    }
  }
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

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://bytewisetechnologies.com/services' },
        { '@type': 'ListItem', position: 3, name: service.name },
      ],
    }
  ])

  return (
    <>
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        id="structured-data"
      />

      <PageBanner
        title={service.name}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.name },
        ]}
      />

      <section className="service_details_section section_space bg-light">
        <div className="container">
          {service.p0 && renderDomToReact(service.p0.json)}

          <h3 className="details_item_info_title">Service Process</h3>
          <div className="row mb-5 align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <ProcessesAccordion processes={service.processes} />
            </div>
            <div className="col-lg-5">
              <ItemIndicator processes={service.processes} />
            </div>
          </div>

          {service.p1 && renderDomToReact(service.p1.json, {
            renderNode: {
              [BLOCKS.HEADING_3]: (_, children) => <h3 className="details_item_info_title">{children}</h3>,
              [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>
            }
          })}

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
