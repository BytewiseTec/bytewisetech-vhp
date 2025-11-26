'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, FormEvent } from 'react'
import Image from 'next/image'

import SearchIcon from '@/public/assets/images/icons/icon_search.svg'

import styles from './BlogSearch.module.css'

export default function BlogSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams()
    
    if (searchQuery.trim()) {
      params.set('search', searchQuery.trim())
      params.set('page', '1')
    } else {
      params.delete('search')
    }
    
    router.push(`/blog?${params.toString()}`)
  }

  const handleClear = () => {
    setSearchQuery('')
    const params = new URLSearchParams()
    params.delete('search')
    params.delete('page')
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className={styles.searchForm}>
      <form onSubmit={handleSubmit} className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="search"
          name="search"
          placeholder="Search blogs by title, category, or content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search blog posts"
        />
        <div className={styles.actionsContainer}>
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className={styles.clearButton}
              title="Clear search"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
          <button
            type="submit"
            className={styles.searchButton}
            title="Search"
            aria-label="Search"
          >
            <Image 
              src={SearchIcon} 
              alt="Search" 
              width={20} 
              height={20}
              className={styles.searchIcon}
            />
          </button>
        </div>
      </form>
    </div>
  )
}

