import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import CounterCard from './index'

const defaultProps = {}
/**
 * Factory function to create a ShallowWrapper for the CounterCard component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props: CounterCardProps): ShallowWrapper => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<CounterCard {...setupProps} />)
}

test('renders without error', () => {
  const props = {
    title: 'Total users',
    total: 100,
    icon: 'users'
  }

  const wrapper = setup(props)
  const component = wrapper.find('.CounterCard__summary')

  expect(component.length).toBe(1)
})

describe('props is valid and installed', () => {
  const props = {
    title: 'Total users',
    total: 100,
    icon: 'users'
  }

  const wrapper = setup(props)

  test('title props', () => {
    const component = wrapper.find('.CounterCard__summary__title')
    expect(component.text()).toBe(`${props.title}`)
  })

  test('total props', () => {
    const component = wrapper.find('.CounterCard__summary__total')
    expect(component.text()).toBe(`${props.total}`)
  })
})

describe('update props', () => {
  const props = {
    title: 'Total users',
    total: 100,
    icon: 'users'
  }

  const wrapper = setup(props)

  test('total update', () => {
    const TOTAL_UPDATE = 500

    wrapper.setProps({ total: TOTAL_UPDATE })
    const component = wrapper.find('.CounterCard__summary__total')
    expect(component.text()).toBe(`${TOTAL_UPDATE}`)
  })
})
