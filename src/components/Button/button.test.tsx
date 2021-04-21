import React from 'react';

import {render} from '@testing-library/react'

import Button from './button'

// test('our first react test case', () => {
//   const wrapper = render(<Button>Nice</Button>)
//   const ele = wrapper.queryByText('Nice')
//   expect(ele).toBeTruthy()
//   expect(ele).toBeInTheDocument()
// })


describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const ele = wrapper.getByText('Nice')
    expect(ele).toBeInTheDocument()
    expect(ele.tagName).toEqual('BUTTON')
    expect(ele).toHaveClass('btn btn-default')
  })
  it('should render the correct based on different props button', () => {
    
  })

  it('should render a link when bthType equals link and href is provided', () => {
    
  })
  it('should render disabled button  when disabled set to true', () => {

  })
})