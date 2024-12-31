import PageBanner from '../../../components/PageBanner'
import { FieldIdQuery, FieldQuery, GET_FIELD, GET_FIELD_ID } from './query'
import { renderDomToReact } from '../../../utils/renderers'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import ProcessesAccordion from '../../../components/ProcessesAccordion'
import ItemIndicator from '../../../components/ProcessesAccordion/ItemIndicator'
import ExpandedIndexProvider from '../../../components/ProcessesAccordion/ExpandedIndexProvider'
import { query } from '../../ApolloClient'
import Image, { StaticImageData } from 'next/image'
import { FieldsLinksQuery, GET_FIELDS } from '@/components/Navbar/query'
import generateStructuredData from '@/utils/structured-data'

import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import BetterServices from '../../../public/assets/images/about/better-services.jpg'
import IconCheck2 from '../../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../../public/assets/images/icons/icon_microscope.svg'
import ParallaxImage from '@/components/Shared/ParallaxImage'
import { Metadata } from 'next'

const whyUsImages: Record<string, StaticImageData> = {
  'icon_check_2.svg': IconCheck2,
  'icon_leaf.svg': IconLeaf,
  'icon_box.svg': IconBox,
  'icon_receipt_add.svg': IconReceiptAdd,
  'icon_monitor.svg': IconMonitor,
  'icon_microscope.svg': IconMicroscope,
}

type FieldsPageProps = {
  params: Promise<{ slug: string }>,
}

export async function generateMetadata(
  { params }: FieldsPageProps,
): Promise<Metadata> {
  const { slug } = await params
  const { data: fieldsData } = await query<FieldIdQuery>({ query: GET_FIELD_ID, variables: { slug } })

  const { items } = fieldsData.fieldCollection || {}

  if (!items?.length) {
    return {}
  }

  const { data: fieldData } = await query<FieldQuery>({
    query: GET_FIELD,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { field } = fieldData || {}

  if (!field) {
    return {}
  }

  const description = documentToPlainTextString(field.p0.json)

  return {
    title: `${field.name} - Bytewise Technologies`,
    description,
    keywords: field.benefits,
    openGraph: {
      locale: 'en_US',
      type: 'website',
      title: `${field.name} - Bytewise Technologies`,
      description,
      url: `https://bytewisetechnologies.com/fields/${slug}`,
      siteName: 'Bytewise Technologies',
    },
    alternates: {
      canonical: `https://bytewisetechnologies.com/fields/${slug}`,
    }
  }
}

export default async function FieldsPage({ params }: FieldsPageProps) {
  const { slug } = await params
  const { data: fieldsData } = await query<FieldIdQuery>({ query: GET_FIELD_ID, variables: { slug } })

  const { items } = fieldsData.fieldCollection || {}

  if (!items?.length) {
    return null
  }

  const { data: fieldData } = await query<FieldQuery>({
    query: GET_FIELD,
    variables: {
      id: items?.[0]?.sys.id
    },
  })

  const { field } = fieldData || {}

  const jsonLd = generateStructuredData([
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://bytewisetechnologies.com/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bytewisetechnologies.com/' },
        { '@type': 'ListItem', position: 2, name: 'Fields', item: 'https://bytewisetechnologies.com/fields' },
        { '@type': 'ListItem', position: 3, name: field.name },
      ],
    }
  ])

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={field.name}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Fields', url: '/fields' },
          { name: field.name },
        ]}
      />

      <section className="service_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            {field.banner && (
              <ParallaxImage src={field.banner.url} alt={field.banner.title} width={field.banner.width} height={field.banner.height} />
            )}
          </div>
          {field.p0 && renderDomToReact(field.p0.json)}

          {field.p1 && renderDomToReact(field.p1.json, {
            renderNode: {
              [BLOCKS.HEADING_3]: (_, children) => <h3 className="details_item_info_title">{children}</h3>,
              [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-4">{children}</p>
            }
          })}

          <div className="row mb-5">
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {field.benefits.slice(0, field.benefits.length / 2).map((benefit, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <Image src={IconCheck} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="icon_list unordered_list_block">
                {field.benefits.slice(field.benefits.length / 2, field.benefits.length).map((benefit, idx) => (
                  <li key={idx}>
                    <span className="icon_list_icon">
                      <Image src={IconCheck} alt="Check SVG Icon" />
                    </span>
                    <span className="icon_list_text">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="details_item_info_title">Service Process</h3>
          <div className="row mb-5 align-items-center justify-content-lg-between">
            <ExpandedIndexProvider>
              <div className="col-lg-6">
                <ProcessesAccordion processes={field.processes} />
              </div>
              <div className="col-lg-5">
                <ItemIndicator processes={field.processes} />
              </div>
            </ExpandedIndexProvider>
          </div>
        </div>
      </section>

      <section className="service_section section_space bg-light pt-0">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6">
              <div className="image_wrap">
                <Image src={BetterServices} alt="Bytewise Tech - About Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-5">
                <div className="heading_block">
                  <div className="heading_focus_text">
                    <span className="badge bg-secondary text-white">Why Us</span>
                    Better
                  </div>
                  <h2 className="heading_text mb-0">
                    {field.whyUs.title}
                  </h2>
                </div>
                <ul className="service_facilities_group unordered_list">
                  {field.whyUs.children?.map((child, idx) => (
                    <li key={idx}>
                      <div className="iconbox_block layout_icon_left">
                        <span className="iconbox_icon">
                          {child.icon && child.title && (
                            <Image src={whyUsImages[child.icon]} alt={child.title} />
                          )}
                        </span>
                        <span className="iconbox_content">
                          <strong className="iconbox_title mb-0">{child.title}</strong>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function generateStaticParams() {
  const { data: fieldsCollection } = await query<FieldsLinksQuery>({ query: GET_FIELDS })

  const { items: fields } = fieldsCollection.fieldCollection || {}

  return fields.map(({ slug }) => ({ slug }))
}