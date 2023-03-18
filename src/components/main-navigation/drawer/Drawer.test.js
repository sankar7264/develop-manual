import { render } from '@testing-library/react'
import Drawer from 'src/components/main-navigation/drawer/Drawer'

describe('Drawer', () => {
  test('renders drawer without crashing if no data is passed', () => {
    render(<Drawer />)
  })
})
