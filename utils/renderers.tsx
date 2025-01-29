import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import Image from 'next/image'
import React from 'react'

import { GET_ASSET, GetAssetQuery, GetAssetQueryVariables } from '@/app/global.query'
import { query } from '@/app/ApolloClient'

export const renderDomToReact = (document: Document, options: Options = {}) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => {
        return <h2 className="details_item_title">{children}</h2>
      },
      [BLOCKS.HEADING_3]: (_, children) => {
        return <h3 className="details_item_info_title mb-5">{children}</h3>
      },
      [BLOCKS.EMBEDDED_ASSET]: async (node) => {
        const { data } = await query<GetAssetQuery, GetAssetQueryVariables>({
          query: GET_ASSET,
          variables: {
            id: node.data.target.sys.id,
          },
        })

        if (!data?.asset) {
          return null
        }

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
      [BLOCKS.UL_LIST]: (_, children) => {
        return <ul className="icon_list unordered_list_block">{children}</ul>
      },
      [BLOCKS.LIST_ITEM]: (_, children) => {
        const newChildren = React.Children.map(children, (child) => {
          if (React.isValidElement<HTMLElement>(child)) {
            return React.cloneElement(child, {
              className: 'icon_list_text',
            })
          }
          return child
        })

        return (
          <li>
            {newChildren}
          </li>
        )
      },
    }
  }

  return documentToReactComponents(document, { ...defaultOptions, ...options})
}
