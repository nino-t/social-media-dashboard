import React from 'react'
import { Helmet } from 'react-helmet'

/* --- UI COMPONENTS --- */
import Layout from '../../components/Layout'

const BerandaPage = (): JSX.Element => {
  const titlePage = 'Dashboard'
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <Layout>
        <p>Hello World</p>
      </Layout>
    </>
  )
}

export default BerandaPage
