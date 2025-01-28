import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'

export const renderDomToReact = (document: Document, options: Options = {}) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => {
        return <h2 className="details_item_title">{children}</h2>
      },
      [BLOCKS.HEADING_3]: (_, children) => {
        return <h3 className="details_item_info_title mb-5">{children}</h3>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div className="details_item_image m-0">
            <Image
              src={node.data.target.fields.file.url}
              alt={node.data.target.fields.title}
              width={node.data.target.fields.file.details.image.width}
              height={node.data.target.fields.file.details.image.height}
            />
          </div>
        )
      },
      [BLOCKS.UL_LIST]: (_, children) => {
        return <ul className="icon_list unordered_list_block">{children}</ul>
      },
      [BLOCKS.LIST_ITEM]: (node) => {
        return (
          <li>
            <span className="icon_list_text">
              {/* @ts-ignore */}
              {node.content[0].content[0].value}
            </span>
          </li>
        )
      },
    }
  }

  return documentToReactComponents(document, { ...defaultOptions, ...options})
}
