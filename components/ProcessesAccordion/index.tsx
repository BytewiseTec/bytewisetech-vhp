'use client'

import classNames from 'classnames'
import { FaMinus, FaPlus } from 'react-icons/fa6'

import { ListItem } from '../../app/content.types'
import { padWithZeros } from '../../utils/helpers'

import { useExpandedIndex } from './ExpandedIndexProvider'


type ProcessesAccordionProps = {
  processes: ListItem[]
}

export default function ProcessesAccordion({ processes }: ProcessesAccordionProps) {
  const { expandedIdx, onExpand } = useExpandedIndex()

  const isExpanded = (idx: number) => idx === expandedIdx

  return (
    <div className="accordion" id="service_process_faq">
      {processes.map((process, idx) => (
        <div className="accordion-item" key={idx}>
          <div
            className={classNames('accordion-button', { collapsed: idx > 0 })}
            onClick={() => onExpand(idx)}
            role="button"
            data-bs-toggle="collapse"
            data-bs-target={`#process_${idx}`}
            aria-expanded={isExpanded(idx)}
            aria-controls={`process_${idx}`}
          >
            {padWithZeros(idx + 1, 2)}. {process.title}
          </div>
          <div id={`process_${idx}`} className={classNames('accordion-collapse collapse', { show: idx === 0 })} data-bs-parent="#service_process_faq">
            <div className="accordion-body">
              <p className="m-0">
                {process.description}
              </p>
            </div>
          </div>
        </div> 
      ))}
    </div>
  )
}