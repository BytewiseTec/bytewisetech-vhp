'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import styles from './BlogCategoryFilter.module.css'

interface BlogCategoryFilterProps {
  categories: string[]
  categoryCounts: Record<string, number>
}

export default function BlogCategoryFilter({ categories, categoryCounts }: BlogCategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category') || null
  )
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    setIsOpen(false)
    
    const params = new URLSearchParams()
    const currentSearch = searchParams.get('search')
    
    if (currentSearch) {
      params.set('search', currentSearch)
    }
    
    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    
    params.set('page', '1')
    router.push(`/blog?${params.toString()}`)
  }

  const sortedCategories = [...categories].sort((a, b) => {
    const countA = categoryCounts[a] || 0
    const countB = categoryCounts[b] || 0
    return countB - countA
  })

  return (
    <div className={styles.filterWrapper} ref={dropdownRef}>
      <button
        type="button"
        className={styles.filterButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={styles.filterButtonText}>
          {selectedCategory || 'All Categories'}
        </span>
        <FaChevronDown className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
      </button>
      
      {isOpen && (
        <>
          <div className={styles.overlay} onClick={() => setIsOpen(false)} />
          <div className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.dropdownItem} ${!selectedCategory ? styles.active : ''}`}
              onClick={() => handleCategorySelect(null)}
            >
              <span>All Categories</span>
              <span className={styles.count}>
                {Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)}
              </span>
            </button>
            {sortedCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.dropdownItem} ${selectedCategory === category ? styles.active : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                <span>{category}</span>
                <span className={styles.count}>{categoryCounts[category] || 0}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

