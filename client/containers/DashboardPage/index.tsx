import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import CounterCard from '../../components/CounterCard'

/* --- REDUX ACTIONS --- */
import { fetchUsers } from '../../store/actionCreators/users'
import { fetchPosts } from '../../store/actionCreators/posts'

const DashboardPage = (): JSX.Element => {
  const title = 'Dashboard'
  const dispatch = useDispatch()
  const { users, posts } = useSelector((state: AppState) => state)

  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <CounterCard title="Total users" total={users.data.length} icon="users" />
          <CounterCard title="Total posts" total={posts.data.length} icon="posts" />
        </div>

        <Table
          isLoading={users.meta.isLoading}
          columns={[
            {
              key: 'name',
              label: 'Name'
            },
            {
              key: 'username',
              label: 'Username'
            },
            {
              key: 'email',
              label: 'Email'
            },
            {
              key: 'phone',
              label: 'Phone'
            }
          ]}
          records={users.data}
        />
      </Layout>
    </>
  )
}

export default DashboardPage
