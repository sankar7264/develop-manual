import { render } from '@testing-library/react'
import MainNavigation from 'src/components/main-navigation/MainNavigation'

describe('Main Navigation', () => {
  test('renders Main Navigation without crashing if no data is passed', () => {
    render(<MainNavigation />)
  })
})
