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
import { fetchPosts } from '../../store/actionCreators/posts'
import { createComment, updateComment, fetchComment } from '../../store/actionCreators/comments'

interface IOption {
  label: string | number
  value: string | number | Record<string, any>
}

const FormCommentPage = (): JSX.Element => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { posts } = useSelector((state: AppState) => state)

  const [postId, setPostId] = useState<number>(0)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [body, setBody] = useState<string>('')

  useEffect(() => {
    const loadCommentDetail = (paramsId: number): void => {
      dispatch(
        fetchComment(paramsId, (comment: Comment | null) => {
          if (comment) {
            setBody(comment.body)
            setName(comment.name)
            setEmail(comment.email)
            setPostId(comment.postId)
          }
        })
      )
    }

    dispatch(fetchPosts())
    if (id) {
      loadCommentDetail(parseInt(id))
    }
  }, [dispatch, id])

  const handleSubmitForm = (e: any): void => {
    e.preventDefault()
    const payload: any = {
      name: name,
      email: email,
      body: body,
      postId: postId
    }

    if (id) {
      dispatch(updateComment(payload, parseInt(id)))
    } else {
      dispatch(createComment(payload))
    }
  }

  const postOptions = posts.data.reduce((results: IOption[], post: Post): IOption[] => {
    if (post.id) {
      results.push({
        label: post.title,
        value: post.id
      })
    }
    return results
  }, [])

  const pageTitle = id ? 'Edit Comment' : 'New Comment'
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Layout title={pageTitle}>
        <Panel>
          <form onSubmit={handleSubmitForm}>
            <SelectDropdown
              id="post_id"
              label="Post"
              options={postOptions}
              placeholder="Select Post"
              value={`${postId}`}
              onChange={(x: any) => {
                setPostId(x.value)
              }}
            />

            <InputText
              id="name"
              label="Author Name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              placeholder="Type your author name.."
            />

            <InputText
              id="email"
              label="Author Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Type your author email.."
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

export default FormCommentPage
