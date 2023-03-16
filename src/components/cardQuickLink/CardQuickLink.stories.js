import React from 'react'
import CardQuickLink from 'src/components/cardQuickLink/CardQuickLink'

export default {
  title: 'CardQuickLink',
  component: CardQuickLink,
  argTypes: {
    maxWidth: {
      name: 'Max Width',
      type: { name: 'string', required: false },
      defaultValue: '250px',
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args) => <CardQuickLink {...args} />

export const CypressGreenVersion = Template.bind({})
CypressGreenVersion.args = {
  data: {
    quick_link_colour: 'cypress_green',
    quick_link_link_title: 'Link5',
    quick_link_url: 'https://presidiotunnel.com/link1',
    quick_link_link_target: '_blank',
    quick_link_link_discritpion:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.ututut',
  },
}

export const BakerBeachVersion = Template.bind({})
BakerBeachVersion.args = {
  data: {
    quick_link_colour: 'baker_beach',
    quick_link_link_title: 'Link5',
    quick_link_url: 'https://presidiotunnel.com/link1',
    quick_link_link_target: '_blank',
    quick_link_link_discritpion:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.ututut',
  },
}
