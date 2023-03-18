import { render } from '@testing-library/react'
import Search from 'src/components/main-navigation/search-bar/Search'

describe('Search', () => {
  test('renders search component without crashing if no data is passed', () => {
    render(<Search />)
  })
})
