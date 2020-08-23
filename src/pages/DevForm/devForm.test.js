/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Login from './index'


describe('Test for login Component', () => {
  it('Shold search a User when form has submitted', () => {
    // Digitar no Input
    const { getByTestId } = render(<Login />)
    expect(getByTestId('form-field')).toBeTruthy()
    const newTask = 'testing'
    const fieldNode = getByTestId('form-field')
    fireEvent.change(
      fieldNode,
      { target : { value: newTask }}
    )
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = getByTestId('form-btn')
    fireEvent.click(btnNode)
  })
})
