import { render, screen } from '@testing-library/react'
import Card from 'src/components/card/Card'

const dataWithoutButton = {
  title: 'Event or Activity Card Example',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacini scelerisque',
  image: {
    ID: 362,
    id: 362,
    title: 'image 1',
    filename: 'image-1.png',
    filesize: 81746,
    url: 'https://wpvip-presidio-gov.go-vip.net/wp-content/uploads/2023/03/image-1.png',
    link: 'https://wpvip-presidio-gov.go-vip.net/?attachment_id=362',
    alt: '',
    author: '12',
    description: '',
    caption: '',
    name: 'image-1',
    status: 'inherit',
    uploaded_to: 276,
    date: '2023-03-13 10:03:31',
    modified: '2023-03-13 10:03:44',
    menu_order: 0,
    mime_type: 'image/png',
    type: 'image',
    subtype: 'png',
    icon: 'https://wpvip-presidio-gov.go-vip.net/wp-includes/images/media/default.png',
    width: 241,
    height: 144,
    sizes: [],
  },
}

const data = {
  title: 'Event or Activity Card Example',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacini scelerisque',
  image: {
    ID: 362,
    id: 362,
    title: 'image 1',
    filename: 'image-1.png',
    filesize: 81746,
    url: 'https://wpvip-presidio-gov.go-vip.net/wp-content/uploads/2023/03/image-1.png',
    link: 'https://wpvip-presidio-gov.go-vip.net/?attachment_id=362',
    alt: '',
    author: '12',
    description: '',
    caption: '',
    name: 'image-1',
    status: 'inherit',
    uploaded_to: 276,
    date: '2023-03-13 10:03:31',
    modified: '2023-03-13 10:03:44',
    menu_order: 0,
    mime_type: 'image/png',
    type: 'image',
    subtype: 'png',
    icon: 'https://wpvip-presidio-gov.go-vip.net/wp-includes/images/media/default.png',
    width: 241,
    height: 144,
    sizes: [],
  },
  link: {
    title: 'Learn More',
    url: '#',
    target: '0',
  },
}

describe('Card Component', () => {
  test('renders card component without an action button', () => {
    render(<Card cardData={dataWithoutButton} />)

    const button = screen.queryByTestId('card-button')

    expect(button).not.toBeInTheDocument()

    expect(
      screen.getByText('Event or Activity Card Example')
    ).toBeInTheDocument()
  })

  test('renders without crashing if no data is passed', () => {
    render(<Card />)
  })

  test('renders button correctly', () => {
    render(<Card cardData={data} />)

    expect(screen.queryByTestId('card-button')).toHaveTextContent('Learn More')
  })
})
