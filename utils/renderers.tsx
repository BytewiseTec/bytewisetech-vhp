import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'
import React from 'react'

import { GET_ASSET, GetAssetQuery, GetAssetQueryVariables } from '@/app/global.query'
import { query } from '@/app/ApolloClient'

export const renderDomToReact = (document: Document, options: Options = {}) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="details_item_title">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className="details_item_info_title mb-5">{children}</h3>
      ),
      [BLOCKS.EMBEDDED_ASSET]: async (node) => {
        const { data } = await query<GetAssetQuery, GetAssetQueryVariables>({
          query: GET_ASSET,
          variables: { id: node.data.target.sys.id },
        })

        if (!data?.asset) return null

        return (
          <div className="details_item_image m-0">
            <Image
              src={data.asset.url}
              alt={data.asset.title}
              width={data.asset.width}
              height={data.asset.height}
            />
          </div>
        )
      },

      // ✅ UL wrapper
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="icon_list unordered_list_block un_list">{children}</ul>
      ),

      // ✅ LI without nested <p>
      [BLOCKS.LIST_ITEM]: (_, children) => {
        const childArray = React.Children.toArray(children)

        return (
          <li className="icon_list_text d-inline dots">
            {childArray.map((child, i) => {
              if (React.isValidElement(child) && child.type === 'p') {
                // unwrap <p>
                const el = child as React.ReactElement<{ children?: React.ReactNode }>
                return <React.Fragment key={i}>{el.props.children}</React.Fragment>
              }
              return child
            })}
          </li>
        )
      },

      // ✅ Paragraph cleanup (remove empty <p>)
      [BLOCKS.PARAGRAPH]: (_, children) => {
        const childArray = React.Children.toArray(children)

        // Skip empty paragraphs (extra spacing)
        if (
          childArray.length === 0 ||
          (childArray.length === 1 && childArray[0] === '')
        ) {
          return null
        }

        return <p>{children}</p>
      },
    },
  }

  return documentToReactComponents(document, {
    ...defaultOptions,
    ...options,
  })
}
