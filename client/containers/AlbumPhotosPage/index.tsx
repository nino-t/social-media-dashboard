import React, { useEffect, useState } from 'react'
import _get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/* --- UI COMPONENTS --- */
import Table from '../../components/Table'
import Panel from '../../components/Panel'
import Layout from '../../components/Layout'

/* --- REDUX ACTIONS --- */
import { fetchUser } from '../../store/actionCreators/users'
import { fetchPosts } from '../../store/actionCreators/posts'
import { fetchAlbum, fetchAlbumPhotos } from '../../store/actionCreators/albums'

const AlbumPhotosPage = (): JSX.Element => {
  const title = 'Album Photos'
  const dispatch = useDispatch()
  const { id, albumId } = useParams<{ id: string; albumId: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [album, setAlbum] = useState<Album | null>(null)

  const [photos, setPhotos] = useState<Photo[] | null>(null)
  const [photoIsLoading, setPhotoIsLoading] = useState<boolean>(false)

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

    const loadAlbumDetail = (paramsId: number): void => {
      dispatch(
        fetchAlbum(paramsId, (xalbum: Album | null) => {
          if (xalbum) {
            setAlbum(xalbum)
          }
        })
      )
    }

    const loadAlbumPhotos = (paramsId: number): void => {
      setPhotoIsLoading(true)

      dispatch(
        fetchAlbumPhotos(paramsId, (xphotos: Photo[] | null) => {
          if (xphotos) {
            setPhotos(xphotos)
          }

          setPhotoIsLoading(false)
        })
      )
    }

    loadUserDetail(parseInt(id))
    loadAlbumDetail(parseInt(id))
    loadAlbumPhotos(parseInt(albumId))
    dispatch(fetchPosts())
  }, [dispatch, id, albumId])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout title={title}>
        <Panel title="ALBUM INFORMATION">
          <table className="w-full">
            <tbody>
              <tr>
                <td width="20%" className="py-1">
                  Album ID
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(album, 'id', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Title
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(album, 'title', '-')}</td>
              </tr>
              <tr>
                <td width="20%" className="py-1">
                  Owned
                </td>
                <td width="30" className="py-1">
                  :
                </td>
                <td className="py-1">{_get(user, 'name', '-')}</td>
              </tr>
            </tbody>
          </table>
        </Panel>

        <h3 className="block mb-2 font-bold">ALBUM PHOTOS</h3>
        <Table
          isLoading={photoIsLoading}
          columns={[
            {
              key: 'thumbnailUrl',
              label: 'Thumbnail',
              type: 'img'
            },
            {
              key: 'title',
              label: 'Title'
            },
            {
              key: 'url',
              label: 'URL',
              type: 'link'
            }
          ]}
          records={photos || []}
        />
      </Layout>
    </>
  )
}

export default AlbumPhotosPage
