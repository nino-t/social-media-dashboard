import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { push } from 'connected-react-router'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import ButtonLink from '../../components/ButtonLink'

/* --- REDUX ACTIONS --- */
import { fetchPosts, deletePost } from '../../store/actionCreators/posts'

const PostsPage = (): JSX.Element => {
  const title = 'Post List'
  const dispatch = useDispatch()
  const { posts } = useSelector((state: AppState) => state)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleEdit = (id: number): void => {
    dispatch(push(`/posts/${id}/edit`))
  }

  const handleDelete = (id: number): void => {
    dispatch(deletePost(id))
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <ButtonLink url="/posts/new" label="New Post" />
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
            }
          ]}
          records={posts.data}
          actions={[
            {
              type: 'text-blue-500',
              label: 'Edit',
              onClick: (obj: Post) => obj.id && handleEdit(obj.id)
            },
            {
              type: 'text-red-500',
              label: 'Delete',
              onClick: (obj: Post) => obj.id && handleDelete(obj.id)
            }
          ]}
        />
      </Layout>
    </>
  )
}

export default PostsPage
