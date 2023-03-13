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
  version: 'cypress-green',
  link: 'My Link',
  description: 'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
}

export const BakerBeachVersion = Template.bind({})
BakerBeachVersion.args = {
  version: 'baker-beach',
  link: 'My Link',
  description: 'Cras ac mauris finibus, tempus tellus ut, tempus mi.',
}

// export const CardWithNoMedia = Template.bind({})
// CardWithNoMedia.args = {
//   cardTitle: 'Event or Activity Card Title',
//   cardContent: 'Card content here',
//   cardAction: {
//     name: 'Learn More',
//     ariaLabel: 'Card Action Button',
//     onClick: () => {},
//   },
// }

// export const CardWithNoActions = Template.bind({})
// CardWithNoActions.args = {
//   cardTitle: 'Event or Activity Card Title',
//   cardContent: 'Card content here',
//   cardMedia: {
//     imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//     altText: 'Hat Image',
//   },
// }

// export const LargeCard = Template.bind({})
// LargeCard.args = {
//   cardTitle: 'Event or Activity Card Title',
//   cardContent:
//     'Lorem ipsum dolor sit, amet consectetur adipisicing elit omnis magni quisquam beatae enim impedit ipsam facilis voluptas, perspiciatis distinctio molestias ex numquamprovident ipsum dolorem adipisci ab nam voluptatem rem. id natus fugiat maiores mollitia pariatur explicabo soluta, numquam at laborum facilis animi consequunturaperiam quaerat dicta nisi voluptas accusantium illum atque. Ducimusnesciunt ipsum, nisi magnam et distinctio quisquam qui placeatvoluptas optio nam quam iusto laborum dicta, exercitationem quiapraesentium accusantium culpa possimus. Eos accusantium sapienterepellat est earum commodi laboriosam voluptate! Dignissimos, minus?Dicta aliquam cumque doloremque sit, ipsam atque.',
//   cardMedia: {
//     imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//     altText: 'Hat Image',
//     height: '250',
//   },
//   cardAction: {
//     name: 'Learn More',
//     ariaLabel: 'Card Action Button',
//     onClick: () => {},
//   },
//   maxWidth: '500px',
// }
