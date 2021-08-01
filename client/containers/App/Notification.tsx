import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotificationsSystem, { atalhoTheme, dismissNotification, setUpNotifications } from 'reapop'

const Notification = (): JSX.Element => {
  const dispatch = useDispatch()
  const notifications = useSelector((state: AppState) => state.notifications)

  setUpNotifications({
    defaultProps: {
      position: 'top-center',
      dismissible: true,
      dismissAfter: 4000
    }
  })

  return (
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dispatch(dismissNotification(id))}
      theme={atalhoTheme}
    />
  )
}

export default Notification
