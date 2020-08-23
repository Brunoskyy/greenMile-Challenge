/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { render, getByTestId } from '@testing-library/react';
import Profile from './index'

describe('Test for Profile Component', () => {
  it('Should Render a Profile Info', () => {
    const { getByTestId } = render(<Profile />)
    expect(getByTestId('container-profile')).toBeTruthy()
  })

  it('Should Render Map', () => {
    const { getByTestId } = render(<Profile />)
    expect(getByTestId('map-container')).toBeTruthy()
  })

  it('Should render Repositories', () => {
    const { getByTestId } = render(<Profile />)
    expect(getByTestId('repositories-container')).toBeTruthy()
  })
})
