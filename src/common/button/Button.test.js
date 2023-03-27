import { render } from '@testing-library/react'
import Button from 'src/common/button/Button'

describe('Button', () => {
  test('renders Button without crashing if no data is passed', () => {
    render(<Button />)
  })

  test('renders Button with data', () => {
    render(<Button>Action to Call</Button>)
  })

  test('renders Button with data secondary varant', () => {
    render(<Button variant="secondary">Action to Call</Button>)
  })
})
