import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import Layout from '../../components/Layout'
import Panel from '../../components/Panel'
import Button from '../../components/Button'
import InputText from '../../components/InputText'
import InputTextarea from '../../components/InputTextarea'
import SelectDropdown from '../../components/SelectDropdown'

/* --- REDUX ACTIONS --- */
import { fetchUsers } from '../../store/actionCreators/users'
import { createPost, updatePost, fetchPost } from '../../store/actionCreators/posts'

interface IOption {
  label: string | number
  value: string | number | Record<string, any>
}

const FormPostPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { users } = useSelector((state: AppState) => state)

  const [userId, setUserId] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  useEffect(() => {
    dispatch(fetchUsers())

    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      loadPostDetail(parseInt(id))
    }
  }, [dispatch, id])

  const loadPostDetail = (paramsId: number): void => {
    dispatch(
      fetchPost(paramsId, (post: Post | null) => {
        if (post) {
          setTitle(post.title)
          setBody(post.body)
          setUserId(`${post.userId}`)
        }
      })
    )
  }

  const handleSubmitForm = (e: any): void => {
    e.preventDefault()
    const payload = {
      userId: parseInt(userId),
      title: title,
      body: body
    }

    if (id) {
      dispatch(updatePost(payload, parseInt(id)))
    } else {
      dispatch(createPost(payload))
    }
  }

  const authorOptions = users.data.reduce((results: IOption[], user: User): IOption[] => {
    results.push({
      label: user.name,
      value: user.id
    })
    return results
  }, [])

  const pageTitle = id ? 'Edit Post' : 'New Post'
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Layout title={pageTitle}>
        <Panel>
          <form onSubmit={handleSubmitForm}>
            <InputText
              id="title"
              label="Title"
              value={title}
              onChange={(e: any) => setTitle(e.target.value)}
              placeholder="Type your post title.."
            />

            <SelectDropdown
              id="user_id"
              label="Author"
              options={authorOptions}
              placeholder="Select Author"
              value={userId}
              onChange={(x: any) => setUserId(x.value)}
            />

            <InputTextarea
              id="body"
              label="Body"
              value={body}
              onChange={(e: any) => setBody(e.target.value)}
              placeholder="Type your post boty.."
            />

            <Button type="submit" label="Submit" />
          </form>
        </Panel>
      </Layout>
    </>
  )
}

export default FormPostPage
