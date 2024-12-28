'use client'

import { AnimatePresence } from 'framer-motion'
import * as m from 'framer-motion/m'
import parse from 'html-react-parser'
import { useState } from 'react'

import { processHtmlContent } from '@/utils/process-html-content'

import styles from './VideoDescription.module.scss'

export function VideoDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const { isShouldShowToggle, initialContent } = processHtmlContent(description, 3)

  return (
    <div className='relative mb-4 bg-gray-800 py-1.5 px-3 rounded-lg'>
      <AnimatePresence initial={false}>
        <m.article
          key={isExpanded ? 'expanded' : 'collapsed'}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.article}
        >
          {parse(isExpanded ? description : initialContent)}
        </m.article>
      </AnimatePresence>
      {isShouldShowToggle && (
        <button
          onClick={() => setIsExpanded(prev => !prev)}
          className='text-gray-400 uppercase transition-colors hover:text-gray-300 mt-2'
        >
          {isExpanded ? 'Hide' : 'Show more'}
        </button>
      )}
    </div>
  )
}
