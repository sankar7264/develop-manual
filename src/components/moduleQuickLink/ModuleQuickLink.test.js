import { render, screen, waitFor } from '@testing-library/react'
import ModuleQuickLink from 'src/components/moduleQuickLink/ModuleQuickLink'

const data = {
  block_section_title: 'Quick Liks',
  block_section_id: 'quick_link_1',
  quick_link_title: 'Module Title',
  quick_link_description:
    'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
  quick_link_colour: 'cypress_green',
  quick_link_layout: 'left',
  quick_links: [
    {
      quick_link_link_title: 'Link1',
      quick_link_url: 'https://presidio.gov/link1',
      quick_link_link_target: '',
      quick_link_link_discritpion:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
    },
    {
      quick_link_link_title: 'Link2',
      quick_link_url: 'https://presidio.gov/link1',
      quick_link_link_target: '',
      quick_link_link_discritpion:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
    },
    {
      quick_link_link_title: 'Link3',
      quick_link_url: 'https://presidio.gov/link1',
      quick_link_link_target: '',
      quick_link_link_discritpion:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
    },
    {
      quick_link_link_title: 'Link4',
      quick_link_url: 'https://presidio.gov/link1',
      quick_link_link_target: '',
      quick_link_link_discritpion:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
    },
    {
      quick_link_link_title: 'Link5',
      quick_link_url: 'https://presidiotunnel.com/link1',
      quick_link_link_target: '_blank',
      quick_link_link_discritpion:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.ututut',
    },
  ],
}

describe('ModuleQuickLink', () => {
  test('renders and check for the availiblity of tags', () => {
    render(<ModuleQuickLink data={data} />)

    expect(screen.queryByTestId('quick-link-title')).toBeInTheDocument()
    expect(screen.queryByTestId('quick-link-description')).toBeInTheDocument()
    waitFor(() =>
      expect(screen.queryByTestId('card-quick-link')).toBeInTheDocument()
    )
  })
})
