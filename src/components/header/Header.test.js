import { render } from '@testing-library/react'
import Header from './Header'

const data = {
  header: {
    weather_latitude: '222.7041° N',
    weather_longitude: '100.1025° E',
    visitor_center: {
      title: 'Visitor Center ',
      url: '#',
      target: '0',
    },
    open_time: 'open daily: 9:00 p.m. - 5:00 a.m.',
    logo: {
      ID: 236,
      id: 236,
      title: 'presidio-logo (1)',
      filename: 'presidio-logo-1.webp',
      filesize: 3953,
      url: 'https://wpvip-presidio-gov.go-vip.net/wp-content/uploads/2023/03/presidio-logo-1.webp',
      link: 'https://wpvip-presidio-gov.go-vip.net/presidio-logo-1',
      alt: '',
      author: '12',
      description: '',
      caption: '',
      name: 'presidio-logo-1',
      status: 'inherit',
      uploaded_to: 0,
      date: '2023-03-07 10:10:26',
      modified: '2023-03-07 10:10:26',
      menu_order: 0,
      mime_type: 'image/webp',
      type: 'image',
      subtype: 'webp',
      icon: 'https://wpvip-presidio-gov.go-vip.net/wp-includes/images/media/default.png',
      width: 607,
      height: 134,
      sizes: [],
    },
    header_links: [
      {
        links: {
          title: 'RENT A HOME',
          url: '#',
          target: '0',
        },
      },
      {
        links: {
          title: 'LEASE AN OFFICE',
          url: '#',
          target: '0',
        },
      },
      {
        links: {
          title: 'PLAN AN EVENT',
          url: '#',
          target: '0',
        },
      },
    ],
  },
}
describe('Header', () => {
  test('renders header without crashing if no data is passed', () => {
    render(<Header />)
  })
  test('renders header with data', () => {
    render(<Header data={data} />)
    const messages = document.getElementById('openTime')
    expect(messages).toHaveTextContent('open daily:')
  })
})
