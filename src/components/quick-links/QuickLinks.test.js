import { render, screen, waitFor } from '@testing-library/react'
import QuickLinks from 'src/components/quick-links/QuickLinks'

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

describe('Quick Links', () => {
  test('renders Quick Links without crashing if no data is passed', () => {
    render(<QuickLinks />)
  })

  test('renders Quick links with data', () => {
    render(<QuickLinks data={data} />)
  })
})
