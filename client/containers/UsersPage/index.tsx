import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Layout from '../../components/Layout'

/* --- REDUX ACTIONS --- */
import { fetchUsers } from '../../store/actionCreators/users'

const UsersPage = (): JSX.Element => {
  const title = 'User List'
  const dispatch = useDispatch()
  const { users } = useSelector((state: AppState) => state)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <Table
          isLoading={users.meta.isLoading}
          columns={[
            {
              key: 'id',
              label: '#ID'
            },
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
          actions={[
            {
              type: 'text-blue-500',
              label: 'Posts',
              onClick: (obj: any) => dispatch(push(`/users/${obj.id}/posts`))
            },
            {
              type: 'text-green-500',
              label: 'Albums',
              onClick: (obj: any) => dispatch(push(`/users/${obj.id}/albums`))
            }
          ]}
        />
      </Layout>
    </>
  )
}

export default UsersPage
