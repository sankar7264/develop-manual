import { COLOR_THEME } from 'src/common/constants'
import ShortDescription from 'src/components/short-description/ShortDescription'

export default {
  title: 'Presidio/ShortDescription',
  component: ShortDescription,
}

const Template = (args) => <ShortDescription {...args} />

export const CrissyFieldVersion = Template.bind({})
CrissyFieldVersion.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      background_color: COLOR_THEME.CRISSY_FIELD,
      indent: false,
    },
  },
}

export const BakerBeachVersion = Template.bind({})
BakerBeachVersion.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      background_color: COLOR_THEME.THE_BAKER_BEACH,
      indent: false,
    },
  },
}

export const WithIndentation = Template.bind({})
WithIndentation.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      background_color: COLOR_THEME.CRISSY_FIELD,
      indent: true,
    },
  },
}

export const WithoutIndentation = Template.bind({})
WithoutIndentation.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      background_color: COLOR_THEME.CRISSY_FIELD,
      indent: false,
    },
  },
}

export const WithCTA = Template.bind({})
WithCTA.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      cta_button: {
        title: 'learn morelearn morelearn morelearn',
        url: 'https://wpvip-presidio-gov.go-vip.net/wp-admin/post.php?post=441&action=edit',
        target: '0',
      },
      background_color: COLOR_THEME.CRISSY_FIELD,
      indent: false,
    },
  },
}

export const WithoutCTA = Template.bind({})
WithoutCTA.args = {
  data: {
    section_title: 'short description',
    section_id: 'shortdescription_1680664946348',
    short_description: {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      short_desc:
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. <a href="https://wpvip-presidio-gov.go-vip.net/short-description">Lorem Ipsum</a> has been the industry&#8217;s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting.</p>\n',
      background_color: COLOR_THEME.CRISSY_FIELD,
      indent: false,
    },
  },
}
