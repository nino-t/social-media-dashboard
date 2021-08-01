/* eslint-disable max-len */
import React from 'react'
import Select from 'react-select'
import _filter from 'lodash/filter'
import styled from 'styled-components'

const Wrapper = styled.div.attrs(() => ({
  className: 'SelectDropdown block text-sm mb-4'
}))`
  > input[type='text'] {
    border: 1px solid #e5e7eb;
    border-radius: 2px;
    padding: 9px 16px;
    line-height: 21px;
  }
`

interface IOption {
  label: string | number
  value: string | number | Record<string, any>
}

/**
 * SelectDropdown component properties
 */
type SelectDropdownProps = {
  /** The id attribute specifies a unique id for an React Component. */
  id: string
  /** The label attribute determines the title of component to display. */
  label: string
  /** The value attribute specifies the value of an dropdown component. */
  value: string | number[] | string[]
  /** The onChange attribute specifies the onChange function of an dropdown component. */
  onChange: any
  /** List of options. */
  options: IOption[]
  /** Placeholder text. */
  placeholder?: string
}

const SelectDropdown = (props: SelectDropdownProps): JSX.Element => {
  const { id, label, options, onChange, value } = props
  const placeholder = props.placeholder || '.....'

  return (
    <Wrapper>
      <label htmlFor={id} className="SelectDropdown__label block mb-2 text-gray-700">
        {label}
      </label>
      <Select
        styles={{
          control: (provided: any, state: any) => ({
            ...provided,
            borderRadius: '2px'
          }),
          valueContainer: (provided: any, state: any) => ({
            ...provided,
            padding: '5px 16px',
            fontSize: '14px',
            lineHeight: '21px'
          }),
          indicatorsContainer: (provided: any, state: any) => ({
            ...provided,
            '&:before': {
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjQzMDg4IDQuNzY0MzJDMS41NjEwNiA0LjYzNDE0IDEuNzcyMTEgNC42MzQxNCAxLjkwMjI5IDQuNzY0MzJMNy45OTk5MiAxMC44NjE5TDE0LjA5NzUgNC43NjQzMkMxNC4yMjc3IDQuNjM0MTQgMTQuNDM4OCA0LjYzNDE0IDE0LjU2OSA0Ljc2NDMyQzE0LjY5OTEgNC44OTQ0OSAxNC42OTkxIDUuMTA1NTUgMTQuNTY5IDUuMjM1NzJMOC4yMzU2MiAxMS41NjkxQzguMTA1NDUgMTEuNjk5MiA3Ljg5NDM5IDExLjY5OTIgNy43NjQyMiAxMS41NjkxTDEuNDMwODggNS4yMzU3MkMxLjMwMDcxIDUuMTA1NTUgMS4zMDA3MSA0Ljg5NDQ5IDEuNDMwODggNC43NjQzMloiIGZpbGw9IiMzRjNGNDgiLz4KPC9zdmc+Cg==')",
              height: '17px',
              width: '17px',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              display: 'inline-block',
              content: '""',
              position: 'relative',
              right: '16px'
            },
            '& > div ': {
              display: 'none'
            },
            '& > span ': {
              display: 'none'
            }
          })
        }}
        value={_filter(options, (option) => {
          return option.value == value
        })}
        isMulti={false}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
      />
    </Wrapper>
  )
}

export default SelectDropdown
