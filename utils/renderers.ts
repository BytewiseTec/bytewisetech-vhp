import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'

export const renderHtml = (document: Document, options: Options = {}) => {
  const defaultOptions: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, next) => {
        return `<h2 class="details_item_title">${next(node.content)}</h2>`
      }
    }
  }

  return documentToHtmlString(document, { ...defaultOptions, ...options})
}
