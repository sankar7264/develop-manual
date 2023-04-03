import React from 'react'
import FinalMedia, { MediaType, Size } from './Media'

export default {
  title: 'Media',
  component: FinalMedia,
}

const Template = (args) => <FinalMedia {...args} />

export const NormalVideo = Template.bind({})
NormalVideo.args = {
  mediaType: MediaType.VIDEO,
  size: Size.SMALL,
  video: {
    videoId: 'snYu2JUqSWs',
    videoControls: {
      autoPlay: true,
      controls: true,
      loop: true,
      allowFullScreen: false,
      muteByDefault: true,
    },
  },
}

export const NormalImage = Template.bind({})
NormalImage.args = {
  mediaType: MediaType.IMAGE,
  size: Size.SMALL,
  image: {
    url: 'https://wpvip-presidio-gov.go-vip.net/wp-content/uploads/2023/03/image-1.png',
    alt: 'Image alt ',
  },
}

export const BannerVideo = Template.bind({})
BannerVideo.args = {
  mediaType: MediaType.VIDEO,
  variant: 'hero',
  width: '600px',
  height: '400px',
  video: {
    videoId: 'snYu2JUqSWs',
    videoControls: {
      autoPlay: true,
      controls: true,
      loop: true,
      allowFullScreen: false,
      muteByDefault: true,
    },
  },
  onReady: function () {},
}

export const BannerImage = Template.bind({})
BannerImage.args = {
  mediaType: MediaType.IMAGE,
  variant: 'hero',
  width: '600px',
  height: '400px',
  image: {
    url: 'https://wpvip-presidio-gov.go-vip.net/wp-content/uploads/2023/03/image-1.png',
    alt: 'Image alt ',
  },
}
