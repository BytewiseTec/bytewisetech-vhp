'use client'

import { ListItem } from '@/app/content.types'
import classNames from 'classnames'
import { useExpandedIndex } from './ExpandedIndexProvider'

type ItemIndicatorProps = {
  processes: ListItem[]
}

export default function ItemIndicator({ processes }: ItemIndicatorProps) {
  const { expandedIdx } = useExpandedIndex()

  return (
    <ul className="content_layer_group unordered_list_block text-center">
      {processes.map((process, idx) => (
        <li
          key={idx}
          className={classNames('accordion-button', { collapsed: idx === 0 })}
          role="button"
          data-bs-toggle="collapse"
          data-bs-target={`#process_${idx}`}
          aria-expanded={idx === expandedIdx}
          aria-controls={`process_${idx}`}
        >
          <span>{process.title}</span>
        </li>
      ))}
    </ul>
  )
}