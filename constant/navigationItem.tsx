import React from 'react'
import { FaHome, FaHeart, FaEnvelope, FaUser, FaFileAlt } from 'react-icons/fa'

import { RESUME_URL } from './externalLinks'

export const navigationItems = [
  {
    name: 'Home',
    href: '/',
    isExternal: false,
    icon: <FaHome className="w-5 h-5" />
  },
  {
    name: 'About',
    href: '/about',
    isExternal: false,
    icon: <FaUser className="w-5 h-5" />
  },
  {
    name: 'Interest',
    href: '/interest',
    isExternal: false,
    icon: <FaHeart className="w-5 h-5" />
  },
  {
    name: 'Contact',
    href: '/contact',
    isExternal: false,
    icon: <FaEnvelope className="w-5 h-5" />
  },
  {
    name: 'Resume',
    href: RESUME_URL,
    isExternal: true,
    icon: <FaFileAlt className="w-5 h-5" />
  }
]
