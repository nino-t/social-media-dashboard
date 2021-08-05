import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import LogoImage from '../../../images/logo.png'

const Wrapper = styled.div.attrs(() => ({
  className: 'app-footer w-full px-20 z-10 mt-10'
}))`
  background: #1e1f22;
`

const Navigation = styled.div.attrs(() => ({
  className: ''
}))`
  > b {
    display: block;
    color: #fea600;
    margin-bottom: 25px;

    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
  }

  > ul {
    li {
      margin-bottom: 12px;
    }
  }
`

const Content = styled.div.attrs(() => ({
  className: 'py-7'
}))`
  color: #ffffff;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  .web-logo {
    width: 150px;
    margin-bottom: 25px;
  }

  .web-icon {
    width: 12px;
    height: 12px;

    content: '';
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;

    &.icon-company {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMFYxNS40Mjg2SDUuMTQyODZWMTIuNDI4Nkg2Ljg1NzE0VjE1LjQyODZIMTJWMEgwWk0xLjcxNDI5IDEuNzE0MjlIMy40Mjg1N1YzLjQyODU3SDEuNzE0MjlWMS43MTQyOVpNNS4xNDI4NiAxLjcxNDI5SDYuODU3MTRWMy40Mjg1N0g1LjE0Mjg2VjEuNzE0MjlaTTguNTcxNDMgMS43MTQyOUgxMC4yODU3VjMuNDI4NTdIOC41NzE0M1YxLjcxNDI5Wk0xLjcxNDI5IDUuMTQyODZIMy40Mjg1N1Y2Ljg1NzE0SDEuNzE0MjlWNS4xNDI4NlpNNS4xNDI4NiA1LjE0Mjg2SDYuODU3MTRWNi44NTcxNEg1LjE0Mjg2VjUuMTQyODZaTTguNTcxNDMgNS4xNDI4NkgxMC4yODU3VjYuODU3MTRIOC41NzE0M1Y1LjE0Mjg2Wk0xLjcxNDI5IDguNTcxNDNIMy40Mjg1N1YxMC4yODU3SDEuNzE0MjlWOC41NzE0M1pNNS4xNDI4NiA4LjU3MTQzSDYuODU3MTRWMTAuMjg1N0g1LjE0Mjg2VjguNTcxNDNaTTguNTcxNDMgOC41NzE0M0gxMC4yODU3VjEwLjI4NTdIOC41NzE0M1Y4LjU3MTQzWk0xLjcxNDI5IDEySDMuNDI4NTdWMTMuNzE0M0gxLjcxNDI5VjEyWk04LjU3MTQzIDEySDEwLjI4NTdWMTMuNzE0M0g4LjU3MTQzVjEyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iLTAuMDgzNTc4IiB5MT0iNi45MzM0NSIgeDI9IjEyLjA0ODQiIHkyPSI2LjkxNDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRUE2MDAiLz4KPHN0b3Agb2Zmc2V0PSIwLjI3Nzg2NiIgc3RvcC1jb2xvcj0iI0Y5OTAwNSIvPgo8c3RvcCBvZmZzZXQ9IjAuNzUxNzAyIiBzdG9wLWNvbG9yPSIjRUE2NzA4Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDNkUwOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=);
    }

    &.icon-envelope {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjggMi40TDYgNS40TDEuMiAyLjRWMS4yTDYgNC4yTDEwLjggMS4yVjIuNFpNMTAuOCAwSDEuMkMwLjUzNCAwIDAgMC41MzQgMCAxLjJWOC40QzAgOC43MTgyNiAwLjEyNjQyOCA5LjAyMzQ4IDAuMzUxNDcyIDkuMjQ4NTNDMC41NzY1MTUgOS40NzM1NyAwLjg4MTc0IDkuNiAxLjIgOS42SDEwLjhDMTEuMTE4MyA5LjYgMTEuNDIzNSA5LjQ3MzU3IDExLjY0ODUgOS4yNDg1M0MxMS44NzM2IDkuMDIzNDggMTIgOC43MTgyNiAxMiA4LjRWMS4yQzEyIDAuODgxNzQgMTEuODczNiAwLjU3NjUxNSAxMS42NDg1IDAuMzUxNDcyQzExLjQyMzUgMC4xMjY0MjggMTEuMTE4MyAwIDEwLjggMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii0wLjA4MzU3OCIgeTE9IjQuMzE0MTUiIHgyPSIxMi4wNDgzIiB5Mj0iNC4yODM5OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkVBNjAwIi8+CjxzdG9wIG9mZnNldD0iMC4yNzc4NjYiIHN0b3AtY29sb3I9IiNGOTkwMDUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc1MTcwMiIgc3RvcC1jb2xvcj0iI0VBNjcwOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQzZFMDkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K);
    }

    &.icon-phone {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwNTEgOC41MjkyNUw5LjAzMzgzIDcuNDk1NEM5LjE3MyA3LjM1Nzg4IDkuMzQ5MDkgNy4yNjM3NSA5LjU0MDcgNy4yMjQ0MkM5LjczMjMyIDcuMTg1MSA5LjkzMTIzIDcuMjAyMjcgMTAuMTEzMyA3LjI3Mzg3TDExLjM3MjYgNy43NzY5NEMxMS41NTY2IDcuODUxNjYgMTEuNzE0MyA3Ljk3OTE4IDExLjgyNiA4LjE0MzQ1QzExLjkzNzYgOC4zMDc3MiAxMS45OTgyIDguNTAxMzggMTIgOC43MDAwMlYxMS4wMDc3QzExLjk5ODkgMTEuMTQyOCAxMS45NzA1IDExLjI3NjQgMTEuOTE2NSAxMS40MDAyQzExLjg2MjUgMTEuNTI0MSAxMS43ODQgMTEuNjM1NyAxMS42ODU4IDExLjcyODRDMTEuNTg3NSAxMS44MjExIDExLjQ3MTUgMTEuODkzIDExLjM0NDggMTEuOTM5N0MxMS4yMTggMTEuOTg2MyAxMS4wODMxIDEyLjAwNjkgMTAuOTQ4MiAxMkMyLjEyMzUyIDExLjQ1MDggMC4zNDI4OTQgMy45NzM4NiAwLjAwNjE0MzM4IDEuMTEyMzNDLTAuMDA5NDg4ODEgMC45NzE4MDUgMC4wMDQ3OTM5IDAuODI5NTY0IDAuMDQ4MDUxOSAwLjY5NDk2MkMwLjA5MTMwOTggMC41NjAzNTkgMC4xNjI1NjMgMC40MzY0NDYgMC4yNTcxMjMgMC4zMzEzNzRDMC4zNTE2ODMgMC4yMjYzMDIgMC40Njc0MDcgMC4xNDI0NTIgMC41OTY2ODMgMC4wODUzNDA2QzAuNzI1OTU4IDAuMDI4MjI5NCAwLjg2NTg1NSAtMC4wMDA4NDg4NDMgMS4wMDcxNyAxLjg4NjI2ZS0wNUgzLjIzNTI2QzMuNDM0MDggMC4wMDA2MDc2ODcgMy42MjgxOSAwLjA2MDY5NjEgMy43OTI2IDAuMTcyNTU1QzMuOTU3MDIgMC4yODQ0MTUgNC4wODQyMiAwLjQ0MjkzIDQuMTU3ODYgMC42Mjc3MTFMNC42NjA2OCAxLjg4NzcxQzQuNzM0NjEgMi4wNjkxMyA0Ljc1MzQ3IDIuMjY4MzIgNC43MTQ5MSAyLjQ2MDM5QzQuNjc2MzUgMi42NTI0NyA0LjU4MjA4IDIuODI4OTIgNC40NDM4NyAyLjk2NzcxTDMuNDEwNTUgNC4wMDE1NkMzLjQxMDU1IDQuMDAxNTYgNC4wMDU2MyA4LjAzMDc5IDguMDAwNTEgOC41MjkyNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9Ii0wLjA4MzU3OCIgeTE9IjUuMzkzMjgiIHgyPSIxMi4wNDg0IiB5Mj0iNS4zNjkxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkVBNjAwIi8+CjxzdG9wIG9mZnNldD0iMC4yNzc4NjYiIHN0b3AtY29sb3I9IiNGOTkwMDUiLz4KPHN0b3Agb2Zmc2V0PSIwLjc1MTcwMiIgc3RvcC1jb2xvcj0iI0VBNjcwOCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEQzZFMDkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K);
    }
  }

  table > tr > td {
    padding-bottom: 14px;
  }

  table > tr > td:nth-child(1) {
    padding-right: 12px;
    vertical-align: text-top;
  }
`

const Copyright = styled.div.attrs(() => ({
  className: 'py-4'
}))`
  border-top: 1px solid #3d3e44;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`

const SocialMediaList = styled.ul.attrs(() => ({
  className: 'flex justify-between pr-10'
}))`
  .social-icon {
    width: 21px;
    height: 21px;

    content: '';
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;

    &.icon-facebook {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjI3NzggMEgwLjk1Nzc5OEMwLjQ5MzE3MyAwIDAuMTE3Nzk4IDAuMzc1Mzc1IDAuMTE3Nzk4IDAuODRWMjAuMTZDMC4xMTc3OTggMjAuNjI0NiAwLjQ5MzE3MyAyMSAwLjk1Nzc5OCAyMUgyMC4yNzc4QzIwLjc0MjQgMjEgMjEuMTE3OCAyMC42MjQ2IDIxLjExNzggMjAuMTZWMC44NEMyMS4xMTc4IDAuMzc1Mzc1IDIwLjc0MjQgMCAyMC4yNzc4IDBaTTE3Ljg1MjMgNi4xMjkzN0gxNi4xNzQ5QzE0Ljg1OTggNi4xMjkzNyAxNC42MDUyIDYuNzU0MTIgMTQuNjA1MiA3LjY3Mjg3VjkuNjk2NzVIMTcuNzQ0N0wxNy4zMzUyIDEyLjg2NTFIMTQuNjA1MlYyMUgxMS4zMzE4VjEyLjg2NzhIOC41OTM5MlY5LjY5Njc1SDExLjMzMThWNy4zNjA1QzExLjMzMTggNC42NDg4NyAxMi45ODgyIDMuMTcxIDE1LjQwODQgMy4xNzFDMTYuNTY4NyAzLjE3MSAxNy41NjM1IDMuMjU3NjMgMTcuODU0OSAzLjI5N1Y2LjEyOTM3SDE3Ljg1MjNaIiBmaWxsPSIjOTM5M0E1Ii8+Cjwvc3ZnPgo=);
    }

    &.icon-twitter {
      width: 26px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyNyAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI2LjI2MzkgMi40OTQ1NEMyNS4zMTM0IDIuOTA0NiAyNC4yNzkxIDMuMTk5NzIgMjMuMjEzNyAzLjMxNDY2QzI0LjMxOTggMi42NTc0MyAyNS4xNDgyIDEuNjE5MTIgMjUuNTQzMyAwLjM5NDUzOUMyNC41MDUzIDEuMDEyMDggMjMuMzY4MiAxLjQ0NTExIDIyLjE4MjUgMS42NzQ0MkMyMS42ODY5IDEuMTQ0NTMgMjEuMDg3NSAwLjcyMjM5OSAyMC40MjE2IDAuNDM0MzI2QzE5Ljc1NTcgMC4xNDYyNTIgMTkuMDM3NyAtMC4wMDE1ODk4NiAxOC4zMTIyIDEuMjg5MzNlLTA1QzE1LjM3NjkgMS4yODkzM2UtMDUgMTMuMDE2MyAyLjM3OTYgMTMuMDE2MyA1LjI5OTcxQzEzLjAxNjMgNS43MDk3NyAxMy4wNjYgNi4xMTk4MyAxMy4xNDY3IDYuNTE0MzZDOC43NTE1NCA2LjI4NDQ4IDQuODMxNiA0LjE4NDQ4IDIuMjI1NTYgMC45NjkyNDNDMS43NTA3MSAxLjc4MDQgMS41MDE4NyAyLjcwNCAxLjUwNDkzIDMuNjQzOTRDMS41MDQ5MyA1LjQ4MyAyLjQzOTg4IDcuMTA0NTkgMy44NjU1OSA4LjA1ODI5QzMuMDI1NCA4LjAyNTIgMi4yMDQ4OCA3Ljc5NDIzIDEuNDcwNzYgNy4zODQxOFY3LjQ0OTQyQzEuNDcwNzYgMTAuMDI0NyAzLjI5MDk2IDEyLjE1ODkgNS43MTY4NSAxMi42NDk3QzUuMjYxMzYgMTIuNzY4IDQuNzkyOCAxMi44Mjg2IDQuMzIyMiAxMi44Mjk5QzMuOTc3NDEgMTIuODI5OSAzLjY1MTI3IDEyLjc5NTcgMy4zMjIwMiAxMi43NDkxQzMuOTkyOTUgMTQuODQ5MSA1Ljk0NjcgMTYuMzc0NCA4LjI3MzIgMTYuNDI0MUM2LjQ1MyAxNy44NSA0LjE3MzEgMTguNjg4OCAxLjY5NzUxIDE4LjY4ODhDMS4yNTMzNCAxOC42ODg4IDAuODQzMzI2IDE4LjY3MzIgMC40MTc3ODYgMTguNjIzNUMyLjc2NjAyIDIwLjEzMDIgNS41NTIyMiAyMSA4LjU1Mjc1IDIxQzE4LjI5MzYgMjEgMjMuNjIzNyAxMi45MjkzIDIzLjYyMzcgNS45MjQxMkMyMy42MjM3IDUuNjk0MjQgMjMuNjIzNyA1LjQ2NDM2IDIzLjYwODIgNS4yMzQ0OEMyNC42Mzk0IDQuNDc5NiAyNS41NDMzIDMuNTQ0NTQgMjYuMjYzOSAyLjQ5NDU0WiIgZmlsbD0iIzkzOTNBNSIvPgo8L3N2Zz4K);
    }

    &.icon-instagram {
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQ2NSA2Ljk5ODUxQzkuNTM2OTMgNi45OTg1MSA3Ljk2MzUzIDguNTcxOTUgNy45NjM1MyAxMC41QzcuOTYzNTMgMTIuNDI4MSA5LjUzNjkzIDE0LjAwMTUgMTEuNDY1IDE0LjAwMTVDMTMuMzkzIDE0LjAwMTUgMTQuOTY2NCAxMi40MjgxIDE0Ljk2NjQgMTAuNUMxNC45NjY0IDguNTcxOTUgMTMuMzkzIDYuOTk4NTEgMTEuNDY1IDYuOTk4NTFaTTIxLjk2NjYgMTAuNUMyMS45NjY2IDkuMDUwMDIgMjEuOTc5NyA3LjYxMzE3IDIxLjg5ODMgNi4xNjU4MkMyMS44MTY5IDQuNDg0NjkgMjEuNDMzNCAyLjk5MjY4IDIwLjIwNDEgMS43NjMzNUMxOC45NzIxIDAuNTMxMzkgMTcuNDgyOCAwLjE1MDUwNyAxNS44MDE3IDAuMDY5MDc3NEMxNC4zNTE3IC0wLjAxMjM1MjYgMTIuOTE0OSAwLjAwMDc4MTMxOSAxMS40Njc2IDAuMDAwNzgxMzE5QzEwLjAxNzYgMC4wMDA3ODEzMTkgOC41ODA4MSAtMC4wMTIzNTI2IDcuMTMzNDggMC4wNjkwNzc0QzUuNDUyMzggMC4xNTA1MDcgMy45NjA0IDAuNTM0MDE2IDIuNzMxMDkgMS43NjMzNUMxLjQ5OTE1IDIuOTk1MyAxLjExODI4IDQuNDg0NjkgMS4wMzY4NSA2LjE2NTgyQzAuOTU1NDIxIDcuNjE1OCAwLjk2ODU1NSA5LjA1MjY1IDAuOTY4NTU1IDEwLjVDMC45Njg1NTUgMTEuOTQ3NCAwLjk1NTQyMSAxMy4zODY4IDEuMDM2ODUgMTQuODM0MkMxLjExODI4IDE2LjUxNTMgMS41MDE3OCAxOC4wMDczIDIuNzMxMDkgMTkuMjM2N0MzLjk2MzAyIDIwLjQ2ODYgNS40NTIzOCAyMC44NDk1IDcuMTMzNDggMjAuOTMwOUM4LjU4MzQzIDIxLjAxMjQgMTAuMDIwMyAyMC45OTkyIDExLjQ2NzYgMjAuOTk5MkMxMi45MTc1IDIwLjk5OTIgMTQuMzU0MyAyMS4wMTI0IDE1LjgwMTcgMjAuOTMwOUMxNy40ODI4IDIwLjg0OTUgMTguOTc0OCAyMC40NjYgMjAuMjA0MSAxOS4yMzY3QzIxLjQzNiAxOC4wMDQ3IDIxLjgxNjkgMTYuNTE1MyAyMS44OTgzIDE0LjgzNDJDMjEuOTgyNCAxMy4zODY4IDIxLjk2NjYgMTEuOTUgMjEuOTY2NiAxMC41Wk0xMS40NjUgMTUuODg3NUM4LjQ4MzYyIDE1Ljg4NzUgNi4wNzc1NCAxMy40ODE0IDYuMDc3NTQgMTAuNUM2LjA3NzU0IDcuNTE4NjEgOC40ODM2MiA1LjExMjQ4IDExLjQ2NSA1LjExMjQ4QzE0LjQ0NjMgNS4xMTI0OCAxNi44NTI0IDcuNTE4NjEgMTYuODUyNCAxMC41QzE2Ljg1MjQgMTMuNDgxNCAxNC40NDYzIDE1Ljg4NzUgMTEuNDY1IDE1Ljg4NzVaTTE3LjA3MyA2LjE1MDA2QzE2LjM3NjkgNi4xNTAwNiAxNS44MTQ4IDUuNTg3OTMgMTUuODE0OCA0Ljg5MTg0QzE1LjgxNDggNC4xOTU3NCAxNi4zNzY5IDMuNjMzNjEgMTcuMDczIDMuNjMzNjFDMTcuNzY5MSAzLjYzMzYxIDE4LjMzMTIgNC4xOTU3NCAxOC4zMzEyIDQuODkxODRDMTguMzMxNCA1LjA1NzEzIDE4LjI5OSA1LjIyMDgzIDE4LjIzNTkgNS4zNzM1OEMxOC4xNzI3IDUuNTI2MzMgMTguMDggNS42NjUxMiAxNy45NjMyIDUuNzgyQzE3Ljg0NjMgNS44OTg4OCAxNy43MDc1IDUuOTkxNTUgMTcuNTU0OCA2LjA1NDcxQzE3LjQwMiA2LjExNzg3IDE3LjIzODMgNi4xNTAyNyAxNy4wNzMgNi4xNTAwNloiIGZpbGw9IiM5MzkzQTUiLz4KPC9zdmc+Cg==);
    }

    &.icon-youtube {
      width: 30px;
      background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAzMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI5LjU5NzUgMy4yODA0MUMyOS40MjcgMi42NDUxOSAyOS4wOTI3IDIuMDY1OTEgMjguNjI4IDEuNjAwNTNDMjguMTYzMyAxLjEzNTE2IDI3LjU4NDYgMC44MDAwMjQgMjYuOTQ5NyAwLjYyODY2M0MyNC42MTI4IDEuMjc1NjJlLTA3IDE1LjI0NTIgMCAxNS4yNDUyIDBDMTUuMjQ1MiAwIDUuODc3NjMgLTEuMjc1NjJlLTA3IDMuNTQwNzQgMC42MjUzMThDMi45MDU2IDAuNzk2MTI0IDIuMzI2NTggMS4xMzEwOCAxLjg2MTgxIDEuNTk2NTNDMS4zOTcwNSAyLjA2MTk5IDEuMDYyOSAyLjY0MTU3IDAuODkyOTM3IDMuMjc3MDdDMC4yNjc3NjEgNS42MTc4MyAwLjI2Nzc2MSAxMC41IDAuMjY3NzYxIDEwLjVDMC4yNjc3NjEgMTAuNSAwLjI2Nzc2MSAxNS4zODIyIDAuODkyOTM3IDE3LjcxOTZDMS4yMzcyOSAxOS4wMTA0IDIuMjUzNjEgMjAuMDI2OSAzLjU0MDc0IDIwLjM3MTNDNS44Nzc2MyAyMSAxNS4yNDUyIDIxIDE1LjI0NTIgMjFDMTUuMjQ1MiAyMSAyNC42MTI4IDIxIDI2Ljk0OTcgMjAuMzcxM0MyOC4yNDAyIDIwLjAyNjkgMjkuMjUzMiAxOS4wMTA0IDI5LjU5NzUgMTcuNzE5NkMzMC4yMjI3IDE1LjM4MjIgMzAuMjIyNyAxMC41IDMwLjIyMjcgMTAuNUMzMC4yMjI3IDEwLjUgMzAuMjIyNyA1LjYxNzgzIDI5LjU5NzUgMy4yODA0MVpNMTIuMjY5OCAxNC45ODA5VjYuMDE5MTFMMjAuMDI2IDEwLjQ2NjZMMTIuMjY5OCAxNC45ODA5WiIgZmlsbD0iIzkzOTNBNSIvPgo8L3N2Zz4K);
    }
  }
`

type IFooterProps = {
  style?: Record<string, any>
}

const Footer = (props: IFooterProps): JSX.Element => {
  const { style = {} } = props
  return (
    <Wrapper style={{ ...style }}>
      <Content>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 pr-44">
            <Link to="/web">
              <img src={LogoImage} className="web-logo" alt="Law Indonesia" />
            </Link>

            <table>
              <tr>
                <td>
                  <span className="web-icon icon-company"></span>
                </td>
                <td>
                  AD Premier 9th Floor Jl.TB Simatupang No.5 Ragunan, Pasar Minggu Jakarta Selatan, Daerah Khusus
                  Ibukota Jakarta
                </td>
              </tr>
              <tr>
                <span className="web-icon icon-envelope"></span>
                <td>redaksi@hukumonline.com, marketing@hukumonline.com</td>
              </tr>
              <tr>
                <span className="web-icon icon-phone"></span>
                <td>62-21 2270 8910</td>
              </tr>
            </table>
          </div>
          <div className="col-span-2">
            <Navigation>
              <b>PERUSAHAAN</b>
              <ul>
                <li>Tentang Kami</li>
                <li>Redaksi</li>
                <li>Pedoman Media Siber</li>
                <li>Kode Etik</li>
                <li>Syarat Penggunaan</li>
                <li>Karir</li>
              </ul>
            </Navigation>
          </div>
          <div className="col-span-2">
            <Navigation>
              <b>MENU</b>
              <ul>
                <li>Jurnal</li>
                <li>Pusat Data</li>
                <li>Konsultasi Hukum</li>
                <li>Produk dan Jasa</li>
              </ul>
            </Navigation>
          </div>
          <div className="col-span-2">
            <Navigation>
              <b>SOSIAL MEDIA</b>
              <SocialMediaList>
                <li>
                  <a href="#">
                    <span className="social-icon icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="social-icon icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="social-icon icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="social-icon icon-youtube"></span>
                  </a>
                </li>
              </SocialMediaList>
            </Navigation>
          </div>
        </div>
      </Content>
      <Copyright>&copy; 2021 Indonesia Law, All Right Reserved</Copyright>
    </Wrapper>
  )
}

export default Footer
