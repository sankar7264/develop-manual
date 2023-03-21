import React from 'react'
import Card from 'src/components/card/Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Standard = Template.bind({})
Standard.args = {
  cardData: {
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
  },
}

export const CardWithNoMedia = Template.bind({})
CardWithNoMedia.args = {
  cardData: {
    title: 'Event or Activity Card Example',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacini scelerisque',
    link: {
      title: 'Learn More',
      url: '#',
      target: '0',
    },
  },
}

export const CardWithNoActions = Template.bind({})
CardWithNoActions.args = {
  cardData: {
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
  },
}
