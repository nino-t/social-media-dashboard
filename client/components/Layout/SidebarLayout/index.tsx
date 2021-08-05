import React from 'react'
import _get from 'lodash/get'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

/* --- UI COMPONENTS --- */
import MenuItem from './MenuItem'

const Wrapper = styled.aside.attrs(() => ({
  className: 'AppLayout__sidebar z-20 hidden w-64 overflow-y-auto bg-white md:block flex-shrink-0 relative'
}))``

const Footer = styled.div.attrs(() => ({
  className: 'AppLayout__sidebar__footer absolute bottom-0 w-full px-4 py-2.5'
}))`
  border-top: 1px solid #e5e7eb;

  > .MeButton__shortinfo {
    > img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 5px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      line-height: 24px;
    }

    small {
      font-style: normal;
      font-weight: normal;
      line-height: 15px;
    }

    > .MeButton__shortinfo__arrow {
      position: absolute;
      right: 0;

      height: 14px;
      width: 14px;
      display: inline-block;

      background-repeat: no-repeat !important;
      background-position: center !important;
      background-size: contain !important;

      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjY0NTk4IDEuNjQ1OTlDNC42OTI0MiAxLjU5OTQzIDQuNzQ3NiAxLjU2MjQ5IDQuODA4MzQgMS41MzcyOEM0Ljg2OTA5IDEuNTEyMDcgNC45MzQyMSAxLjQ5OTEgNC45OTk5OCAxLjQ5OTFDNS4wNjU3NSAxLjQ5OTEgNS4xMzA4NyAxLjUxMjA3IDUuMTkxNjEgMS41MzcyOEM1LjI1MjM2IDEuNTYyNDkgNS4zMDc1MyAxLjU5OTQzIDUuMzUzOTggMS42NDU5OUwxMS4zNTQgNy42NDU5OUMxMS40MDA1IDcuNjkyNDQgMTEuNDM3NSA3Ljc0NzYxIDExLjQ2MjcgNy44MDgzNkMxMS40ODc5IDcuODY5MTEgMTEuNTAwOSA3LjkzNDIzIDExLjUwMDkgNy45OTk5OUMxMS41MDA5IDguMDY1NzYgMTEuNDg3OSA4LjEzMDg4IDExLjQ2MjcgOC4xOTE2M0MxMS40Mzc1IDguMjUyMzcgMTEuNDAwNSA4LjMwNzU1IDExLjM1NCA4LjM1Mzk5TDUuMzUzOTggMTQuMzU0QzUuMjYwMDkgMTQuNDQ3OSA1LjEzMjc1IDE0LjUwMDYgNC45OTk5OCAxNC41MDA2QzQuODY3MiAxNC41MDA2IDQuNzM5ODYgMTQuNDQ3OSA0LjY0NTk4IDE0LjM1NEM0LjU1MjA5IDE0LjI2MDEgNC40OTkzNSAxNC4xMzI4IDQuNDk5MzUgMTRDNC40OTkzNSAxMy44NjcyIDQuNTUyMDkgMTMuNzM5OSA0LjY0NTk4IDEzLjY0NkwxMC4yOTMgNy45OTk5OUw0LjY0NTk4IDIuMzUzOTlDNC41OTk0MSAyLjMwNzU1IDQuNTYyNDcgMi4yNTIzNyA0LjUzNzI3IDIuMTkxNjNDNC41MTIwNiAyLjEzMDg4IDQuNDk5MDggMi4wNjU3NiA0LjQ5OTA4IDEuOTk5OTlDNC40OTkwOCAxLjkzNDIzIDQuNTEyMDYgMS44NjkxMSA0LjUzNzI3IDEuODA4MzZDNC41NjI0NyAxLjc0NzYxIDQuNTk5NDEgMS42OTI0NCA0LjY0NTk4IDEuNjQ1OTlWMS42NDU5OVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=');
    }
  }
`

const Pattern = styled.div.attrs(() => ({
  className: 'AppLayout__pattern w-full h-56 bg-purple-600'
}))``

const SidebarLayout = (): JSX.Element => {
  const { router = {} } = useSelector((state: any) => state)
  const pathname = _get(router, 'location.pathname', '/')
  const firstPathname = pathname.split('/')[1]

  const menuItems = [
    {
      url: '/dashboard',
      label: 'Dashboard',
      icon: 'dashboard'
    },
    {
      url: '/users',
      label: 'Users',
      icon: 'users'
    },
    {
      url: '/posts',
      label: 'Posts',
      icon: 'posts'
    },
    {
      url: '/comments',
      label: 'Comments',
      icon: 'comments'
    }
  ]

  return (
    <Wrapper>
      <div className="py-4 pt-0 text-gray-500">
        <Pattern />

        <ul className="mt-6">
          {menuItems.map((item, index: number) => {
            let isActive = false
            const menuURL = item.url
            const menuFirstPathname = menuURL.split('/')[1]

            if (menuFirstPathname === firstPathname || (firstPathname === '' && index === 0)) {
              isActive = true
            }

            return <MenuItem key={index} url={item.url} label={item.label} icon={item.icon} isActive={isActive} />
          })}
        </ul>
      </div>

      <Footer>
        <button type="button" className="MeButton__shortinfo w-full flex items-center relative">
          <img src="https://i.ibb.co/h9HwwBW/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash-min.jpg" alt="Thomas Cruise" />
          <div className="text-left">
            <p className="text-sm text-gray-700 block">Thomas Cruise</p>
            <small className="text-xs text-gray-600 block">thomas.cruise@mola.tv</small>
          </div>
          <span className="MeButton__shortinfo__arrow" />
        </button>
      </Footer>
    </Wrapper>
  )
}

export default SidebarLayout
