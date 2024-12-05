'use client'

import { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const MobileMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <button onClick={handleMenuToggle} className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
      {isMenuOpen ? <FaXmark /> : <FaBars />}
    </button>
  )
}

export default MobileMenuButton
