import Badge from '../../../components/Badge'
import PageBanner from '../../../components/PageBanner'
import { FieldIdQuery, FieldQuery, GET_FIELD, GET_FIELD_ID } from './query'
import { renderHtml } from '../../../utils/renderers'
import { BLOCKS } from '@contentful/rich-text-types'
import ProcessesAccordion from '../../../components/ProcessesAccordion'
import ItemIndicator from '../../../components/ProcessesAccordion/ItemIndicator'
import ExpandedIndexProvider from '../../../components/ProcessesAccordion/ExpandedIndexProvider'
import { query } from '../../ApolloClient'
import Image, { StaticImageData } from 'next/image'
import { FieldsLinksQuery, GET_FIELDS } from '@/components/Navbar/query'

import IconCheck from '../../../public/assets/images/icons/icon_check_3.svg'
import BetterServices from '../../../public/assets/images/about/better-services.jpg'
import IconCheck2 from '../../../public/assets/images/icons/icon_check_2.svg'
import IconLeaf from '../../../public/assets/images/icons/icon_leaf.svg'
import IconBox from '../../../public/assets/images/icons/icon_box.svg'
import IconReceiptAdd from '../../../public/assets/images/icons/icon_receipt_add.svg'
import IconMonitor from '../../../public/assets/images/icons/icon_monitor.svg'
import IconMicroscope from '../../../public/assets/images/icons/icon_microscope.svg'
import Link from 'next/link'

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

  return (
    <>
      <PageBanner title={field.name} />

      <nav aria-label="breadcrumb" className="bg-light">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active">
              <Link href="/fields">Fields</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{field.name}</li>
          </ol>
        </div>
      </nav>

      <section className="service_details_section section_space bg-light">
        <div className="container">
          <div className="details_item_image">
            {field.banner && (
              <Image src={field.banner.url} alt={field.banner.title} width={field.banner.width} height={field.banner.height} />
            )}
          </div>
          {field.p0 && <div dangerouslySetInnerHTML={{ __html: renderHtml(field.p0.json) }} />}

          {field.p1 && (
            <div dangerouslySetInnerHTML={{
              __html: renderHtml(field.p1.json, {
                renderNode: {
                  [BLOCKS.HEADING_3]: (node, next) => `<h3 class="details_item_info_title">${next(node.content)}</h3>`,
                  [BLOCKS.PARAGRAPH]: (node, next) => `<p class="mb-4">${next(node.content)}</p>`
                }
              })
            }} />
          )}

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