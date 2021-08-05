import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Table from './index'

const defaultProps = {}
/**
 * Factory function to create a ShallowWrapper for the Table component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props: TableProps): ShallowWrapper => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Table {...setupProps} />)
}

test('renders without error', () => {
  const props = {
    columns: [
      {
        key: 'id',
        label: 'ID'
      },
      {
        key: 'name',
        label: 'Name'
      }
    ],
    records: [
      {
        id: 1,
        name: 'Trisno Nino'
      },
      {
        id: 2,
        name: 'John Doe'
      }
    ]
  }

  const wrapper = setup(props)
  const component = wrapper.find('.Table__wrapper')

  expect(component.length).toBe(1)
})
