import React, { useEffect, useState } from 'react'
import _get from 'lodash/get'
import _filter from 'lodash/filter'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Panel from '../../components/Panel'
import Layout from '../../components/Layout'

/* --- REDUX ACTIONS --- */
import { fetchUser } from '../../store/actionCreators/users'
import { fetchPost } from '../../store/actionCreators/posts'
import { fetchComments } from '../../store/actionCreators/comments'

const DetailPostPage = (): JSX.Element => {
  const title = 'Post Detail'
  const dispatch = useDispatch()
  const { id, postId } = useParams<{ id: string; postId: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [post, setPost] = useState<Post | null>(null)
  const { comments } = useSelector((state: AppState) => state)

  useEffect(() => {
    const loadUserDetail = (paramsId: number): void => {
      dispatch(
        fetchUser(paramsId, (xuser: User | null) => {
          if (xuser) {
            setUser(xuser)
          }
        })
      )
    }

    const loadPostDetail = (paramsId: number): void => {
      dispatch(
        fetchPost(paramsId, (xpost: Post | null) => {
          if (xpost) {
            setPost(xpost)
          }
        })
      )
    }

    loadUserDetail(parseInt(id))
    loadPostDetail(parseInt(postId))
    dispatch(fetchComments())
  }, [dispatch, id, postId])

  const userComments = _filter(comments.data, (comment: Comment) => {
    return comment.postId === parseInt(postId)
  })

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <Panel title="INFORMATION">
          <table className="w-full">
            <tbody>
              <tr>
                <td width="20%" className="py-1">
                  Post ID
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(post, 'id', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Title
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(post, 'title', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Body
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(post, 'body', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Author
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'name', '-')}</td>
              </tr>
            </tbody>
          </table>
        </Panel>

        <h3 className="block mb-2 font-bold">COMMENTS</h3>
        <Table
          isLoading={comments.meta.isLoading}
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
              key: 'body',
              label: 'Body'
            }
          ]}
          records={userComments}
        />
      </Layout>
    </>
  )
}

export default DetailPostPage
