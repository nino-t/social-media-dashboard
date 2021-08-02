import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import ButtonLink from '../../components/ButtonLink'

/* --- REDUX ACTIONS --- */
import { fetchComments, deleteComment } from '../../store/actionCreators/comments'

const PostsPage = (): JSX.Element => {
  const title = 'Comment List'
  const dispatch = useDispatch()
  const { comments } = useSelector((state: AppState) => state)

  useEffect(() => {
    dispatch(fetchComments())
  }, [dispatch])

  const handleEdit = (id: number): void => {
    dispatch(push(`/comments/${id}/edit`))
  }

  const handleDelete = (id: number): void => {
    dispatch(deleteComment(id))
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <ButtonLink url="/comments/new" label="New Comment" />
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
          records={comments.data}
          actions={[
            {
              type: 'text-blue-500',
              label: 'Edit',
              onClick: (obj: Comment) => obj.id && handleEdit(obj.id)
            },
            {
              type: 'text-red-500',
              label: 'Delete',
              onClick: (obj: Comment) => obj.id && handleDelete(obj.id)
            }
          ]}
        />
      </Layout>
    </>
  )
}

export default PostsPage
