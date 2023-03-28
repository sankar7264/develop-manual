import { render, screen, waitFor } from '@testing-library/react'
import QuickLinks from 'src/components/quick-links/QuickLinks'

const data = {
  section_title: 'Quick',
  section_id: 'quick_1679911551015',
  title: 'Module Title',
  quick_links: {
    acf_fc_layout: 'quick_links',
    section_title: 'Quick',
    section_id: 'quick_1679911551015',
    background_color: 'cypress_green',
    layout: 'right',
    title: 'Module Title',
    description:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
    links: [
      {
        link: {
          title: 'Link',
          url: '#',
          target: '0',
        },
        description:
          'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tel',
      },
      {
        link: {
          title: '',
          url: '#',
          target: '0',
        },
        description: '',
      },
      {
        link: {
          title: '',
          url: '#',
          target: '0',
        },
        description: '',
      },
    ],
  },
}

describe('Quick Links', () => {
  test('renders Quick Links without crashing if no data is passed', () => {
    render(<QuickLinks />)
  })

  test('renders Quick links with data', () => {
    render(<QuickLinks data={data} />)
  })
})
