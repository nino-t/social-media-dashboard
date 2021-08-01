/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button.attrs(() => ({
  className:
    'Button px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple'
}))``

type ButtonProps = {
  type?: 'button' | 'submit'
  label: string
  onClick?: any
}

const Button = (props: ButtonProps): JSX.Element => {
  const { type = 'button', label, onClick } = props

  let attrs = {}
  if (onClick) {
    attrs = Object.assign(attrs, { onClick: onClick })
  }

  return (
    <Wrapper type={type} {...attrs}>
      {label}
    </Wrapper>
  )
}

export default Button
