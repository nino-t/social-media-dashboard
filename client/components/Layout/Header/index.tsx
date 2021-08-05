/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoImage from '../../../images/logo.png'

const Wrapper = styled.div.attrs(() => ({
  className: 'app-header flex items-center sticky top-0 h-16 w-full px-20 z-10'
}))`
  background: #1f2022;
  box-shadow: 0px 2px 18px rgba(103, 132, 134, 0.1);

  .web-logo {
    height: 38px;
    width: auto;
  }
`

const RightPosition = styled.div.attrs(() => ({
  className: 'absolute right-20 flex justify-center items-center'
}))`
  .icon-account {
    width: 15px;
    height: 15.5px;

    top: 1px;
    content: '';
    position: relative;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;

    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS40MTE3IDUuMDU5N0MxMS40MTE3IDcuNTA2MTMgOS40NDkzIDkuNDY3NzcgNy4wMDAwNCA5LjQ2Nzc3QzQuNTUxNjMgOS40Njc3NyAyLjU4ODM5IDcuNTA2MTMgMi41ODgzOSA1LjA1OTdDMi41ODgzOSAyLjYxMzI3IDQuNTUxNjMgMC42NTI0NjYgNy4wMDAwNCAwLjY1MjQ2NkM5LjQ0OTMgMC42NTI0NjYgMTEuNDExNyAyLjYxMzI3IDExLjQxMTcgNS4wNTk3Wk03LjAwMDA0IDE3LjMxMTdDMy4zODUzNSAxNy4zMTE3IDAuMzMzMzc0IDE2LjcyNDQgMC4zMzMzNzQgMTQuNDU4OEMwLjMzMzM3NCAxMi4xOTIzIDMuNDA0NTMgMTEuNjI1OCA3LjAwMDA0IDExLjYyNThDMTAuNjE1NiAxMS42MjU4IDEzLjY2NjcgMTIuMjEzMSAxMy42NjY3IDE0LjQ3ODdDMTMuNjY2NyAxNi43NDUzIDEwLjU5NTYgMTcuMzExNyA3LjAwMDA0IDE3LjMxMTdaIiBmaWxsPSIjOTM5M0E1Ii8+Cjwvc3ZnPgo=);
  }

  .icon-search {
    width: 14px;
    height: 16px;

    top: 1px;
    content: '';
    margin-right: 30px;
    position: relative;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;

    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNiAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjcuMDIxOTciIGN5PSI4LjE3NDgyIiByeD0iNi4wMjE5NyIgcnk9IjYuMTg5MSIgc3Ryb2tlPSIjOTM5M0E1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuMzk3MSAxMy45MTg3TDE0LjY0NDIgMTcuOTc4NiIgc3Ryb2tlPSIjOTM5M0E1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
  }
`

const Spliter = styled.div`
  content: '';
  display: inline-block;
  width: 1px;
  height: 27px;
  background: #9393a5;
  margin: 0px 25px;
`

const Menu = styled.ul.attrs(() => ({
  className: 'app-menu flex ml-14'
}))``

const MenuItem = styled.li.attrs(() => ({
  className: 'app-menu-item px-4 text-xs'
}))`
  color: #9393a5;

  &:hover {
    color: #fff;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span.m-icon {
    width: 16px;
    height: 16px;

    top: 3px;
    content: '';
    position: relative;
    margin-right: 6px;
    display: inline-block;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: contain !important;

    &.icon-beranda {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuODUxMTEgMTQuNTY3VjEyLjI3NDdDNS44NTExMSAxMS42ODk2IDYuMzI5MTYgMTEuMjE1MiA2LjkxODg2IDExLjIxNTJIOS4wNzQ0OUM5LjM1NzY3IDExLjIxNTIgOS42MjkyNSAxMS4zMjY4IDkuODI5NDkgMTEuNTI1NUMxMC4wMjk3IDExLjcyNDIgMTAuMTQyMiAxMS45OTM3IDEwLjE0MjIgMTIuMjc0N1YxNC41NjdDMTAuMTQwNCAxNC44MTAzIDEwLjIzNjYgMTUuMDQ0MiAxMC40MDkzIDE1LjIxNjhDMTAuNTgyIDE1LjM4OTUgMTAuODE3MSAxNS40ODY2IDExLjA2MjIgMTUuNDg2NkgxMi41MzI5QzEzLjIxOTggMTUuNDg4MyAxMy44NzkxIDE1LjIxODggMTQuMzY1NCAxNC43Mzc1QzE0Ljg1MTcgMTQuMjU2MiAxNS4xMjUgMTMuNjAyNyAxNS4xMjUgMTIuOTIxMVY2LjM5MDc5QzE1LjEyNSA1Ljg0MDI0IDE0Ljg3OTEgNS4zMTgwMSAxNC40NTM1IDQuOTY0NzlMOS40NTA1NSAwLjk5OTk2MUM4LjU4MDI3IDAuMzA0NzkyIDcuMzMzMzYgMC4zMjcyMzcgNi40ODkwNyAxLjA1MzI3TDEuNjAwMjkgNC45NjQ3OUMxLjE1NDU5IDUuMzA3NiAwLjg4ODE5NSA1LjgzMTM3IDAuODc1MDMxIDYuMzkwNzlWMTIuOTE0NEMwLjg3NTAzMSAxNC4zMzUgMi4wMzU1NyAxNS40ODY2IDMuNDY3MTYgMTUuNDg2Nkg0LjkwNDI1QzUuNDEzNDUgMTUuNDg2NiA1LjgyNzI4IDE1LjA3ODkgNS44MzA5NyAxNC41NzM3TDUuODUxMTEgMTQuNTY3WiIgZmlsbD0iIzkzOTNBNSIvPgo8L3N2Zz4K);
    }

    &.icon-pusat-data {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjY5NDM2IDExLjc4NDhIOC43MzM5NkM5LjAzODQyIDExLjc4NDggOS4yOTA4OSAxMS41Mjk4IDkuMjkwODkgMTEuMjIyM0M5LjI5MDg5IDEwLjkxNDggOS4wMzg0MiAxMC42NjczIDguNzMzOTYgMTAuNjY3M0g0LjY5NDM2QzQuMzg5OSAxMC42NjczIDQuMTM3NDMgMTAuOTE0OCA0LjEzNzQzIDExLjIyMjNDNC4xMzc0MyAxMS41Mjk4IDQuMzg5OSAxMS43ODQ4IDQuNjk0MzYgMTEuNzg0OFpNNy4yMDQyNiA2LjkxODk5SDQuNjk0MzZDNC4zODk5IDYuOTE4OTkgNC4xMzc0MyA3LjE3Mzk5IDQuMTM3NDMgNy40ODE0OUM0LjEzNzQzIDcuNzg4OTkgNC4zODk5IDguMDM2NDkgNC42OTQzNiA4LjAzNjQ5SDcuMjA0MjZDNy41MDg3MiA4LjAzNjQ5IDcuNzYxMTkgNy43ODg5OSA3Ljc2MTE5IDcuNDgxNDlDNy43NjExOSA3LjE3Mzk5IDcuNTA4NzIgNi45MTg5OSA3LjIwNDI2IDYuOTE4OTlaTTEyLjUwMzYgNi4yNjQxNkMxMi42NzgyIDYuMjYyMTUgMTIuODY4MiA2LjI1OTk2IDEzLjA0MDkgNi4yNTk5NkMxMy4yMjY1IDYuMjU5OTYgMTMuMzc1MSA2LjQwOTg5IDEzLjM3NTEgNi41OTczMVYxMi42MjQ2QzEzLjM3NTEgMTQuNDgzOCAxMS44ODI1IDE1Ljk5MDYgMTAuMDQwOSAxNS45OTA2SDQuMTMwMDFDMi4xOTkzMiAxNS45OTA2IDAuNjI1MDYxIDE0LjQwODggMC42MjUwNjEgMTIuNDU5N1Y0LjM3ODNDMC42MjUwNjEgMi41MTkxMyAyLjEyNTA2IDAuOTk3MzEzIDMuOTc0MDcgMC45OTczMTNINy45Mzk0MkM4LjEzMjQ5IDAuOTk3MzEzIDguMjgxIDEuMTU0NzQgOC4yODEgMS4zNDIxNlYzLjc1NjA4QzguMjgxIDUuMTI3OTYgOS40MDIyOSA2LjI1MjQ2IDEwLjc2MTIgNi4yNTk5NkMxMS4wNzg2IDYuMjU5OTYgMTEuMzU4NCA2LjI2MjMzIDExLjYwMzMgNi4yNjQ0QzExLjc5MzggNi4yNjYwMiAxMS45NjMyIDYuMjY3NDUgMTIuMTEyNyA2LjI2NzQ1QzEyLjIxODQgNi4yNjc0NSAxMi4zNTU0IDYuMjY1ODcgMTIuNTAzNiA2LjI2NDE2Wk0xMi43MDg0IDUuMTcwMDlDMTIuMDk4IDUuMTcyMzQgMTEuMzc4NCA1LjE3MDA5IDEwLjg2MDkgNS4xNjQ4NEMxMC4wMzk2IDUuMTY0ODQgOS4zNjMwOSA0LjQ4MTkgOS4zNjMwOSAzLjY1Mjc3VjEuNjc2NjVDOS4zNjMwOSAxLjM1MzU1IDkuNzUxNDUgMS4xOTMxMiA5Ljk3MzQ4IDEuNDI2MjZDMTAuMzc1NyAxLjg0ODUgMTAuOTI4NiAyLjQyOTA1IDExLjQ3ODkgMy4wMDY4QzEyLjAyNjcgMy41ODIwMSAxMi41NzE5IDQuMTU0NDUgMTIuOTYzMSA0LjU2NTExQzEzLjE3OTkgNC43OTIyNiAxMy4wMjEgNS4xNjkzNCAxMi43MDg0IDUuMTcwMDlaIiBmaWxsPSIjOTM5M0E1Ii8+Cjwvc3ZnPgo=);
    }

    &.icon-konsultasi-hukum {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjAyODMzIDIuMTM1MzlDNi41MjU1OCAyLjEzNTM5IDYuMDk3ODYgMi40ODQ3NiA1Ljk3NzggMi45NTU2NEgxMC4wMTQ4QzkuODk0NzYgMi40ODQ3NiA5LjQ2NzA1IDIuMTM1MzkgOC45NjQzIDIuMTM1MzlINy4wMjgzM1pNMTEuMTU1NCAyLjk1NTkySDEyLjY0MTFDMTQuMjE2OSAyLjk1NTkyIDE1LjUwMDEgNC4yNTQwNyAxNS41MDAxIDUuODQ4MjlDMTUuNTAwMSA1Ljg0ODI5IDE1LjQ1NSA2LjUyMzE3IDE1LjQ0IDcuNDYzQzE1LjQzODUgNy41MzczOSAxNS40MDI1IDcuNjEwMjcgMTUuMzQzMiA3LjY1NDNDMTQuOTgyMyA3LjkyMDc2IDE0LjY1MjEgOC4xNDA5MiAxNC42MjIxIDguMTU2MUMxMy4zNzY1IDguOTkxMTcgMTEuOTI5IDkuNTc4NzUgMTAuMzg3IDkuODcxMDJDMTAuMjg2NSA5Ljg5MDc2IDEwLjE4NzQgOS44MzgzOCAxMC4xMzY0IDkuNzQ4OEM5LjcwNDE2IDkuMDAwMjggOC44OTY3NiA4LjUxMjkgNy45OTYzMSA4LjUxMjlDNy4xMDE4NiA4LjUxMjkgNi4yODY5NiA4Ljk5NDk2IDUuODQxOTggOS43NDQyNEM1Ljc5MDIxIDkuODMyMyA1LjY5MjY2IDkuODgzMTcgNS41OTI4NiA5Ljg2NDE5QzQuMDYzNTkgOS41NzExNiAyLjYxNjEyIDguOTg0MzMgMS4zNzggOC4xNjM2OUwwLjY1NzY0IDcuNjYyNjVDMC41OTc2MSA3LjYyNDcgMC41NjAwOTEgNy41NTYzNyAwLjU2MDA5MSA3LjQ4MDQ2QzAuNTM3NTggNy4wOTMyOSAwLjUwMDA2MSA1Ljg0ODI5IDAuNTAwMDYxIDUuODQ4MjlDMC41MDAwNjEgNC4yNTQwNyAxLjc4MzIgMi45NTU5MiAzLjM1ODk5IDIuOTU1OTJINC44MzcyM0M0Ljk3OTggMS44NTUxNiA1LjkwMjc2IDAuOTk3MzE2IDcuMDI4MzMgMC45OTczMTZIOC45NjQyOUMxMC4wODk5IDAuOTk3MzE2IDExLjAxMjggMS44NTUxNiAxMS4xNTU0IDIuOTU1OTJaTTE1LjI0NDkgOS4xMDQ0NkwxNS4yMTQ5IDkuMTE5NjRDMTMuNjk5MiAxMC4xMzY5IDExLjg3NTggMTAuODEyNSA5Ljk2MjMgMTEuMDkzNEM5LjY5MjE2IDExLjEzMTQgOS40MjIwMyAxMC45NTY4IDkuMzQ2OTkgMTAuNjgzNUM5LjE4MTkxIDEwLjA2MSA4LjY0OTE0IDkuNjUxMDUgOC4wMTEzMiA5LjY1MTA1SDguMDAzODJINy45ODg4MUM3LjM1MDk5IDkuNjUxMDUgNi44MTgyMyAxMC4wNjEgNi42NTMxNCAxMC42ODM1QzYuNTc4MTEgMTAuOTU2OCA2LjMwNzk3IDExLjEzMTQgNi4wMzc4NCAxMS4wOTM0QzQuMTI0MzggMTAuODEyNSAyLjMwMDk3IDEwLjEzNjkgMC43ODUyMSA5LjExOTY0QzAuNzc3NzA2IDkuMTEyMDUgMC43MDI2NjkgOS4wNjY1IDAuNjQyNjM5IDkuMTA0NDZDMC41NzUxMDUgOS4xNDI0MiAwLjU3NTEwNSA5LjIzMzUyIDAuNTc1MTA1IDkuMjMzNTJMMC42Mjc2MzEgMTMuMTA1MkMwLjYyNzYzMSAxNC42OTk0IDEuOTAzMjcgMTUuOTkgMy40NzkwNiAxNS45OUgxMi41MTM2QzE0LjA4OTQgMTUuOTkgMTUuMzY1IDE0LjY5OTQgMTUuMzY1IDEzLjEwNTJMMTUuNDI1IDkuMjMzNTJDMTUuNDI1IDkuMjMzNTIgMTUuNDI1IDkuMTQyNDIgMTUuMzU3NSA5LjEwNDQ2QzE1LjMyIDkuMDgxNjkgMTUuMjc1IDkuMDg5MjggMTUuMjQ0OSA5LjEwNDQ2Wk04LjU1OTA5IDEyLjI4NjdDOC41NTkwOSAxMi42MDU3IDguMzExNDcgMTIuODU2MyA3Ljk5NjMxIDEyLjg1NjNDNy42ODg2NSAxMi44NTYzIDcuNDMzNTMgMTIuNjA1NyA3LjQzMzUzIDEyLjI4NjdWMTEuMzA3QzcuNDMzNTMgMTAuOTk1NiA3LjY4ODY1IDEwLjczNzQgNy45OTYzMSAxMC43Mzc0QzguMzExNDcgMTAuNzM3NCA4LjU1OTA5IDEwLjk5NTYgOC41NTkwOSAxMS4zMDdWMTIuMjg2N1oiIGZpbGw9IiM5MzkzQTUiLz4KPC9zdmc+Cg==);
    }

    &.icon-produk-dan-jasa {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43NTgxIDEwLjQ0MzNDMTIuMDY4NiAxMC40NDMzIDEyLjMyMDYgMTAuMTkxNCAxMi4zMjA2IDkuODgxMDdWOC40OTI2OUMxMi4zMjA2IDguMTgyMzMgMTIuMDY4NiA3LjkzMDQ0IDExLjc1ODEgNy45MzA0NEg3LjQ4OTA5QzcuMjQ2MDkgNy4xMzA1NSA2LjUwOTU5IDYuNTQyODEgNS42MzA1OSA2LjU0MjgxQzQuNTU1MDkgNi41NDI4MSAzLjY3OTg0IDcuNDE3NjcgMy42Nzk4NCA4LjQ5MjY5QzMuNjc5ODQgOS41Njg0NiA0LjU1NTA5IDEwLjQ0MzMgNS42MzA1OSAxMC40NDMzQzYuNTA5NTkgMTAuNDQzMyA3LjI0NjA5IDkuODU1NTggNy40ODkwOSA5LjA1NDk0SDkuMDczMDlWOS44ODEwN0M5LjA3MzA5IDEwLjE5MTQgOS4zMjUwOSAxMC40NDMzIDkuNjM1NTkgMTAuNDQzM0M5Ljk0NjA5IDEwLjQ0MzMgMTAuMTk4MSAxMC4xOTE0IDEwLjE5ODEgOS44ODEwN1Y5LjA1NDk0SDExLjE5NTZWOS44ODEwN0MxMS4xOTU2IDEwLjE5MTQgMTEuNDQ3NiAxMC40NDMzIDExLjc1ODEgMTAuNDQzM1pNNC43NDkzNCAwLjk5NjczNEgxMS4yNTExQzEzLjc5MjEgMC45OTY3MzQgMTUuNDk5OCAyLjc3OTQ0IDE1LjQ5OTggNS40MzI1VjExLjU1NUMxNS40OTk4IDE0LjIwODEgMTMuNzkyMSAxNS45OSAxMS4yNTAzIDE1Ljk5SDQuNzQ5MzRDMi4yMDc1OSAxNS45OSAwLjQ5OTgzOCAxNC4yMDgxIDAuNDk5ODM4IDExLjU1NVY1LjQzMjVDMC40OTk4MzggMi43Nzk0NCAyLjIwNzU5IDAuOTk2NzM0IDQuNzQ5MzQgMC45OTY3MzRaTTQuODA0MTcgOC40OTM3NEM0LjgwNDE3IDguMDM3NzQgNS4xNzU0MiA3LjY2NzI0IDUuNjMwNjcgNy42NjcyNEM2LjA4NTkyIDcuNjY3MjQgNi40NTcxNyA4LjAzNzc0IDYuNDU3MTcgOC40OTM3NEM2LjQ1NzE3IDguOTQ4OTkgNi4wODU5MiA5LjMxOTQ5IDUuNjMwNjcgOS4zMTk0OUM1LjE3NTQyIDkuMzE5NDkgNC44MDQxNyA4Ljk0ODk5IDQuODA0MTcgOC40OTM3NFoiIGZpbGw9IiM5MzkzQTUiLz4KPC9zdmc+Cg==);
    }
  }
`

const Header = (): JSX.Element => {
  const routes = [
    {
      url: '/web',
      iconname: 'icon-beranda',
      label: 'Beranda'
    },
    {
      url: '/web/pusat-data',
      iconname: 'icon-pusat-data',
      label: 'Pusat Data'
    },
    {
      url: '#',
      iconname: 'icon-konsultasi-hukum',
      label: 'Konsultasi Hukum'
    },
    {
      url: '#',
      iconname: 'icon-produk-dan-jasa',
      label: 'Produk dan Jasa'
    }
  ]

  return (
    <Wrapper>
      <Link to="/web">
        <img src={LogoImage} className="web-logo" alt="Law Indonesia" />
      </Link>

      <Menu>
        {routes.map((route, index) => (
          <MenuItem key={index}>
            <Link to={route.url}>
              <p>
                <span className={`m-icon ${route.iconname}`}></span> {route.label}
              </p>
            </Link>
          </MenuItem>
        ))}
      </Menu>

      <RightPosition>
        <Link to="/web/search">
          <span className="icon-search"></span>
        </Link>
        <Link to="/web/accounts/login">
          <span className="icon-account"></span>
        </Link>
        <Spliter />
      </RightPosition>
    </Wrapper>
  )
}

export default Header
