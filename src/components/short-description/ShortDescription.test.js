import { render } from '@testing-library/react'
import ShortDescription from 'src/components/short-description/ShortDescription'

describe('Short Description', () => {
  test('renders Short Description without crashing if no data is passed', () => {
    render(<ShortDescription />)
  })

  test('renders Short Description with data', () => {
    render(
      <ShortDescription
        data={{
          title:
            'The Presidio has the trails, vistas, and adventures you’d expect to find in a national park, and so much more.',
          description:
            'If you’re planning your first visit or looking for something new to experience, this is a great place to start. Whether your vibe is nature, history, or play, you’ll find something to do among the Presidio’s top attractions. The 1,500-acre park offers everything from ocean-side hikes to outdoor art exhibits to lively urban adventures. There’s also a regular lineup of events and volunteer activities. If you’re having trouble deciding, make it easy by selecting a sample itinerary.',
          have_cta: true,
        }}
      />
    )
  })
})
