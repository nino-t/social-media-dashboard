import React, { useEffect, useState } from 'react'
import _get from 'lodash/get'
import _filter from 'lodash/filter'
import { Helmet } from 'react-helmet'
import { push } from 'connected-react-router'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Panel from '../../components/Panel'
import Layout from '../../components/Layout'

/* --- REDUX ACTIONS --- */
import { fetchUser } from '../../store/actionCreators/users'
import { fetchPosts } from '../../store/actionCreators/posts'

const UserPostsPage = (): JSX.Element => {
  const title = 'User Posts'
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const { posts } = useSelector((state: AppState) => state)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    loadUserDetail(parseInt(id))
    dispatch(fetchPosts())
  }, [dispatch, id])

  const loadUserDetail = (paramsId: number): void => {
    dispatch(
      fetchUser(paramsId, (xuser: User | null) => {
        if (xuser) {
          setUser(xuser)
        }
      })
    )
  }

  const userPosts = _filter(posts.data, (post: Post) => {
    return post.userId === parseInt(id)
  })

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <Panel title="USER INFORMATION">
          <table className="w-full">
            <tbody>
              <tr>
                <td width="20%" className="py-1">
                  User ID
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'id', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Name
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'name', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Username
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'username', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Email
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'email', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Phone
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'phone', '-')}</td>
              </tr>
            </tbody>
          </table>
        </Panel>

        <h3 className="block mb-2 font-bold">USER POSTS</h3>
        <Table
          isLoading={posts.meta.isLoading}
          columns={[
            {
              key: 'id',
              label: '#ID'
            },
            {
              key: 'title',
              label: 'Title'
            },
            {
              key: 'user.name',
              label: 'Author',
              value: _get(user, 'name', '-')
            }
          ]}
          records={userPosts}
          actions={[
            {
              type: 'text-blue-500',
              label: 'Detail',
              onClick: (obj: any) => dispatch(push(`/users/${id}/posts/${obj.id}/detail`))
            }
          ]}
        />
      </Layout>
    </>
  )
}

export default UserPostsPage
