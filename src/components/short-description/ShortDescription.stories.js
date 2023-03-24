import React from 'react'
import ShortDescription from 'src/components/short-description/ShortDescription'

export default {
  title: 'Presidio/ShortDescription',
  component: ShortDescription,
}

const Template = (args) => <ShortDescription {...args} />

export const ChrissyField = Template.bind({})
ChrissyField.args = {
  data: {
    title:
      'The Presidio has the trails, vistas, and adventures you’d expect to find in a national park, and so much more.',
    description:
      'If you’re planning your first visit or looking for something new to experience, this is a great place to start. Whether your vibe is nature, history, or play, you’ll find something to do among the Presidio’s top attractions. The 1,500-acre park offers everything from ocean-side hikes to outdoor art exhibits to lively urban adventures. There’s also a regular lineup of events and volunteer activities. If you’re having trouble deciding, make it easy by selecting a sample itinerary.',
    have_cta: false,
    have_indent: false,
    color: 'chrissy_field',
  },
}

export const BakerBeach = Template.bind({})
BakerBeach.args = {
  data: {
    title:
      'The Presidio has the trails, vistas, and adventures you’d expect to find in a national park, and so much more.',
    description:
      'If you’re planning your first visit or looking for something new to experience, this is a great place to start. Whether your vibe is nature, history, or play, you’ll find something to do among the Presidio’s top attractions. The 1,500-acre park offers everything from ocean-side hikes to outdoor art exhibits to lively urban adventures. There’s also a regular lineup of events and volunteer activities. If you’re having trouble deciding, make it easy by selecting a sample itinerary.',
    have_cta: false,
    have_indent: false,
    color: 'baker_beach',
  },
}

export const WithIndentation = Template.bind({})
WithIndentation.args = {
  data: {
    title:
      'The Presidio has the trails, vistas, and adventures you’d expect to find in a national park, and so much more.',
    description:
      'If you’re planning your first visit or looking for something new to experience, this is a great place to start. Whether your vibe is nature, history, or play, you’ll find something to do among the Presidio’s top attractions. The 1,500-acre park offers everything from ocean-side hikes to outdoor art exhibits to lively urban adventures. There’s also a regular lineup of events and volunteer activities. If you’re having trouble deciding, make it easy by selecting a sample itinerary.',
    have_cta: false,
    have_indent: true,
    color: 'baker_beach',
  },
}

export const WithCTA = Template.bind({})
WithCTA.args = {
  data: {
    title:
      'The Presidio has the trails, vistas, and adventures you’d expect to find in a national park, and so much more.',
    description:
      'If you’re planning your first visit or looking for something new to experience, this is a great place to start. Whether your vibe is nature, history, or play, you’ll find something to do among the Presidio’s top attractions. The 1,500-acre park offers everything from ocean-side hikes to outdoor art exhibits to lively urban adventures. There’s also a regular lineup of events and volunteer activities. If you’re having trouble deciding, make it easy by selecting a sample itinerary.',
    have_cta: true,
    have_indent: false,
    color: 'baker_beach',
  },
}
