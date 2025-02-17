import { Settings } from 'lucide-react'
import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Heading } from '@/ui/Heading'

import { SettingsForm } from './SettingsForm'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE
}

export default function SettingsPage() {
  return (
    <div>
      <Heading
        isPageHeading
        Icon={Settings}
      >
        Settings
      </Heading>
      <SettingsForm />
    </div>
  )
}
