import { render } from '@testing-library/react'
import MegaMenu from 'src/components/main-navigation/mega-menu/MegaMenu'

describe('Mega Menu', () => {
  test('renders Mega Menu without crashing if no data is passed', () => {
    render(<MegaMenu />)
  })
})
