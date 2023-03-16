import ModuleQuickLink from 'src/components/moduleQuickLink/ModuleQuickLink'

export default {
  title: 'ModuleQuickLink',
  component: ModuleQuickLink,
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

const Template = (args) => <ModuleQuickLink {...args} />

export const CypressGreenVersion = Template.bind({})
CypressGreenVersion.args = {
  data: {
    block_section_title: 'Quick Liks',
    block_section_id: 'quick_link_1',
    quick_link_title: 'Module Title',
    quick_link_description:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
    quick_link_colour: 'cypress_green',
    quick_link_layout: 'right',
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
  },
}

export const BakerBeachVersion = Template.bind({})
BakerBeachVersion.args = {
  data: {
    block_section_title: 'Quick Liks',
    block_section_id: 'quick_link_1',
    quick_link_title: 'Module Title',
    quick_link_description:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
    quick_link_colour: 'baker_beach',
    quick_link_layout: 'right',
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
  },
}

export const LeftLayoutType = Template.bind({})
LeftLayoutType.args = {
  data: {
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
  },
}

export const RightLayoutType = Template.bind({})
RightLayoutType.args = {
  data: {
    block_section_title: 'Quick Liks',
    block_section_id: 'quick_link_1',
    quick_link_title: 'Module Title',
    quick_link_description:
      'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
    quick_link_colour: 'cypress_green',
    quick_link_layout: 'right',
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
  },
}
