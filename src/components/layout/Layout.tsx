'use client'

import cn from 'clsx'
import { type PropsWithChildren, useEffect, useState } from 'react'

import { Content } from './content/Content'
import { SideBar } from './side-bar/SideBar'
import { authService } from '@/services/auth.service'

import styles from './Layout.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar, setIsShowedSidebar] = useState(true)

  const toggleSidebar = () => {
    setIsShowedSidebar(!isShowedSidebar)
  }

  useEffect(() => {
    authService.initializeAuth()
  })

  return (
    <main
      className={cn(
        'flex min-h-screen',
        styles.initialSidebar,
        isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
      )}
    >
      <SideBar
        toggleSidebar={toggleSidebar}
        isShowedSidebar={isShowedSidebar}
      />
      <Content>{children}</Content>
    </main>
  )
}
