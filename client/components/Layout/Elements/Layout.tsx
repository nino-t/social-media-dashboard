import styled from 'styled-components'

/*
  Layout (Styled Components)
  type: 'HTML DIV Element'
  Props: {
    className: 'Additional className'
  }
*/

export const Layout = styled.div.attrs((props: any) => ({
  className: `app-layout font-sans ${props.className || ''}`
}))``

export default Layout
