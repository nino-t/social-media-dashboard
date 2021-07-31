import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const DashboardPage = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <p>
        Hello World <Link to="/about">About</Link>
      </p>
    </>
  )
}

export default DashboardPage
