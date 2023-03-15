import { render } from '@testing-library/react'
import Card from 'src/components/card/Card'

// @TODO - tests for card module
test('renders card component', () => {
  render(<Card />)

  expect(true).toBeTruthy()
})
