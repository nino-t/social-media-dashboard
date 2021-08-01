/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs(() => ({
  className: 'InputText block text-sm mb-4'
}))`
  > .InputText__input {
    border: 1px solid #e5e7eb;
    border-radius: 2px;
    padding: 9px 16px;
    line-height: 21px;
  }
`

/**
 * InputText component properties
 */
type IInputTextProps = {
  /** The id attribute specifies a unique id for an React Component. */
  id: string
  /** The type attribute determines the type of input element to display. by default it will be set to text. */
  type?: string
  /** The label attribute determines the title of input element to display. */
  label: string
  /** The value attribute specifies the value of an input component. */
  value: string
  /** The handleOnChange attribute specifies the onChange function of an input component. */
  onChange: any
  /** The placeholder attribute determines the placeholder of input component to display. */
  placeholder?: string
}

const InputText = (props: IInputTextProps): JSX.Element => {
  const { id, type = 'text', label, value, onChange } = props
  const placeholder = props.placeholder || '.....'

  return (
    <Wrapper>
      <label htmlFor={id} className="InputText__label mb-2 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="InputText__input block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:shadow-outline-purple"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default InputText
