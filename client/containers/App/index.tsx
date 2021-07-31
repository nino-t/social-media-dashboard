import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../../store/actionCreators/users'

const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const { users } = useSelector((state: AppState) => state)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <>
      <p className="text-lg">Welcome to Social Media Dashboard</p>
      <ul>
        {users.data.map(
          (user: User, index: number): JSX.Element => (
            <li key={index}>{user.name}</li>
          )
        )}
      </ul>
    </>
  )
}

export default App
