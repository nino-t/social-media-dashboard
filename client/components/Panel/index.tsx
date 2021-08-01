import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs(() => ({
  className: 'Panel'
}))``

type PanelProps = {
  title?: string
  children: JSX.Element | JSX.Element[]
}

const Panel = (props: PanelProps): JSX.Element => {
  const { title = '', children } = props

  return (
    <Wrapper>
      {title && (
        <div className="Panel__heading">
          <h3 className="block mb-2 font-bold">{title}</h3>
        </div>
      )}
      <div className="Panel__body px-6 py-5 mb-8 bg-white rounded-lg shadow-md">{children}</div>
    </Wrapper>
  )
}

export default Panel
