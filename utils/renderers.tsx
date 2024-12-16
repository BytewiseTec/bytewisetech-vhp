import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

export const renderDomToReact = (document: Document, options: Options = {}) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (_, children) => {
        return <h2 className="details_item_title">{children}</h2>
      }
    }
  }

  return documentToReactComponents(document, { ...defaultOptions, ...options})
}
