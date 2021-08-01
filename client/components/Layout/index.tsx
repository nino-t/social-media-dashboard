import React from 'react'
import styled from 'styled-components'

/* --- UI COMPONENTS --- */
import SidebarLayout from './SidebarLayout'
import HeaderLayout from './HeaderLayout'

const Wrapper = styled.div.attrs(() => ({
  className: 'AppLayout flex h-screen bg-gray-50 dark:bg-gray-900'
}))``

const MainLayout = styled.div.attrs(() => ({
  className: 'AppLayout__main flex flex-col flex-1 w-full'
}))``

const Content = styled.main.attrs(() => ({
  className: 'AppLayout__content h-full overflow-y-auto'
}))``

type ILayoutProps = {
  title: string
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: ILayoutProps): JSX.Element => {
  const { title, children } = props

  return (
    <Wrapper>
      <SidebarLayout />
      <MainLayout>
        <HeaderLayout />
        <Content>
          <div className="container px-6 pb-6 mx-auto grid">
            <h2 className="AppLayout__content__title my-6 text-2xl font-semibold text-gray-700">{title}</h2>
            {children}
          </div>
        </Content>
      </MainLayout>
    </Wrapper>
  )
}

export default Layout
