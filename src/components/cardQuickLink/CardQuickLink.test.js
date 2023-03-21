import { render, screen, waitFor } from '@testing-library/react'
import CardQuickLink from 'src/components/cardQuickLink/CardQuickLink'

const data = {
  quick_link_colour: 'cypress_green',
  quick_link_link_title: 'Link5',
  quick_link_url: 'https://presidiotunnel.com/link1',
  quick_link_link_target: '_blank',
  quick_link_link_discritpion:
    'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.ututut',
}

describe('CardQuickLink', () => {
  test('renders and check for the availiblity of tags', () => {
    render(<CardQuickLink data={data} />)

    expect(screen.queryByTestId('card-quick-link-title')).toBeInTheDocument()
    expect(
      screen.queryByTestId('card-quick-link-description')
    ).toBeInTheDocument()
    waitFor(() =>
      expect(screen.queryByTestId('card-quick-link-icon')).toBeInTheDocument()
    )
  })
})
