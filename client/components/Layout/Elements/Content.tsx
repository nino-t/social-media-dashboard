import styled from 'styled-components'

/*
  Content (Styled Components)
  type: 'HTML DIV Element'
  Props: {
    className: 'Additional className'
  }
*/

export const Content = styled.div.attrs((props: { className: string }) => ({
  className: `app-content w-full ${props.className || ''}`
}))``

export default Content
