import React from 'react'

/* --- UI COMPONENTS --- */
import Header from './Header'
import Footer from './Footer'

/* --- UI ELEMENTS --- */
import LayoutElement from './Elements/Layout'
import ContentElement from './Elements/Content'

type ILayoutComponentProps = {
  children: JSX.Element | JSX.Element[]
}

const LayoutComponent = (props: ILayoutComponentProps): JSX.Element => {
  const { children } = props

  return (
    <LayoutElement>
      <Header />
      <ContentElement>{children}</ContentElement>
      <Footer />
    </LayoutElement>
  )
}

export default LayoutComponent
