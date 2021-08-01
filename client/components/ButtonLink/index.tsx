import React from 'react'
import styled from 'styled-components'
import { Link as RouteLink } from 'react-router-dom'

const Button = styled(RouteLink)``

type IButtonLinkProps = {
  url: string
  label: string
}

const ButtonLink = (props: IButtonLinkProps): JSX.Element => {
  const { url, label } = props

  return (
    <Button
      to={url}
      className="inline-block px-4 py-2 mb-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
    >
      {label}
    </Button>
  )
}

export default ButtonLink
