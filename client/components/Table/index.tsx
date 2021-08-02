/* eslint-disable max-len */
import React, { useState } from 'react'
import _get from 'lodash/get'
import _chunk from 'lodash/chunk'
import _orderBy from 'lodash/orderBy'
import styled from 'styled-components'
import _isNumber from 'lodash/isNumber'

const Wrapper = styled.div.attrs(() => ({
  className: 'Table w-full overflow-hidden rounded-lg shadow-xs'
}))`
  table {
    tbody {
      a {
        color: #7c3aed;
      }
    }
  }
`

const DEFAULT_PAGE_SIZE = 10
const DEFAULT_ORDER_BY = 'id'

const Table = (props: TableProps): JSX.Element => {
  const { columns, records = [], actions = [], isLoading = false } = props
  const results = _orderBy(records, DEFAULT_ORDER_BY[0], 'desc')
  const resultInPages = _chunk(results, DEFAULT_PAGE_SIZE)

  const [page, setPage] = useState<number>(1)
  const totalPage = resultInPages.length
  const pageIndex = page <= 1 ? 0 : page - 1

  const renderPageRange = (): any[] => {
    const current = page
    const last = totalPage,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = []
    let l

    for (let i = 1; i <= last; i++) {
      if (i == 1 || i == last || (i >= left && i < right)) {
        range.push(i)
      }
    }

    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1)
        } else if (i - l !== 1) {
          rangeWithDots.push('...')
        }
      }
      rangeWithDots.push(i)
      l = i
    }

    return rangeWithDots
  }

  const renderShowingInfo = (): JSX.Element => {
    let showingStart = 1
    let showingEnd = DEFAULT_PAGE_SIZE

    if (page > 1) {
      showingStart = page * DEFAULT_PAGE_SIZE - DEFAULT_PAGE_SIZE + 1
    }

    if (showingEnd > results.length) {
      showingEnd = showingEnd - results.length
    } else {
      showingEnd = page * DEFAULT_PAGE_SIZE
    }

    return (
      <span className="flex items-center col-span-3">
        Showing {showingStart}-{showingEnd} of {records.length}
      </span>
    )
  }

  const renderTdElement = (result: Record<string, any>, column: ITablePropsColumn): string | JSX.Element => {
    const { type = 'text', value } = column

    if (value) {
      return value
    }

    if (type === 'link') {
      const link = _get(result, column.key, '-')
      return (
        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      )
    }

    if (type === 'img') {
      const src = _get(result, column.key, '')
      return (
        <a href={src} target="_blank" rel="noreferrer">
          <img src={src} alt={src} width="100" />
        </a>
      )
    }

    return _get(result, column.key, '-')
  }

  return (
    <Wrapper>
      <div className="Table__wrapper w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50">
              {columns.map((column: ITablePropsColumn, index: number) => (
                <th key={index} className="px-4 py-3">
                  {column.label}
                </th>
              ))}
              {actions.length > 0 && <th>Action</th>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {isLoading ? (
              <tr>
                <td colSpan={20} className="px-8 py-6 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              <>
                {resultInPages[pageIndex] ? (
                  <>
                    {resultInPages[pageIndex].map(
                      (result: Record<string, any>, index: number): JSX.Element => (
                        <tr key={index} className="text-gray-700">
                          {columns.map(
                            (column: ITablePropsColumn, columnIndex: number): JSX.Element => (
                              <td key={columnIndex} className="px-4 py-3">
                                {renderTdElement(result, column)}
                              </td>
                            )
                          )}

                          {actions.length > 0 && (
                            <>
                              {actions.map((action: ITablePropsAction, actionIndex: number) => (
                                <td key={actionIndex}>
                                  <button
                                    type="button"
                                    className={`text-base ${action.type}`}
                                    onClick={() => action.onClick(result)}
                                  >
                                    {action.label}
                                  </button>
                                </td>
                              ))}
                            </>
                          )}
                        </tr>
                      )
                    )}
                  </>
                ) : (
                  <tr>
                    <td colSpan={20} className="px-8 py-6 text-center">
                      No data to Display
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>
      </div>
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-gray-50 sm:grid-cols-9">
        {renderShowingInfo()}
        <span className="col-span-2"></span>
        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              {page > 1 && (
                <li>
                  <button
                    onClick={() => setPage(page - 1)}
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              )}
              {renderPageRange().map(
                (xpage: number | string, xindex: number): JSX.Element => (
                  <li key={xindex}>
                    <button
                      disabled={_isNumber(xpage) ? false : true}
                      onClick={() => {
                        if (_isNumber(xpage)) {
                          setPage(xpage)
                        }
                      }}
                      className={`${
                        xpage === page
                          ? 'px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'
                          : 'px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'
                      }`}
                    >
                      {xpage}
                    </button>
                  </li>
                )
              )}
              {page < totalPage && (
                <li>
                  <button
                    onClick={() => setPage(page + 1)}
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </span>
      </div>
    </Wrapper>
  )
}
export default Table
