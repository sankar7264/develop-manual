import { render } from '@testing-library/react'
import ShortDescription from 'src/components/short-description/ShortDescription'

const data = {
  section_title: 'Short Description',
  background_color: 'chrissy_field',
  title:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  cta_button: {
    title: 'Learn more',
    url: 'https://google.com',
    target: '_blank',
  },
  indent: true,
  short_description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
}

describe('Short Description', () => {
  test('renders Short Description without crashing if no data is passed', () => {
    render(<ShortDescription />)
  })

  test('renders Short Description with data', () => {
    render(<ShortDescription data={data} />)
  })
})
