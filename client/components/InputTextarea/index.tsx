/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs(() => ({
  className: 'InputTextarea block text-sm mb-4'
}))`
  > textarea {
    border: 1px solid #e5e7eb;
    border-radius: 2px;
    padding: 9px 16px;
    line-height: 21px;
  }
`

/**
 * InputTextarea component properties
 */
type IInputTextareaProps = {
  /** The id attribute specifies a unique id for an React Component. */
  id: string
  /** The label attribute determines the title of textarea element to display. */
  label: string
  /** The value attribute specifies the value of an textarea component. */
  value: string
  /** The onChange attribute specifies the onChange function of an textarea component. */
  onChange: any
  /** The placeholder attribute determines the placeholder of textarea component to display. */
  placeholder?: string
}

const InputTextarea = (props: IInputTextareaProps): JSX.Element => {
  const { id, label, value, onChange } = props
  const placeholder = props.placeholder || '.....'

  return (
    <Wrapper>
      <label htmlFor={id} className="text-gray-700 dark:text-gray-400">
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        className="h-48 block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      ></textarea>
    </Wrapper>
  )
}

export default InputTextarea
