import React from 'react'
import Button from 'src/common/button/Button'

export default {
  title: 'Common/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Call to Action',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Call to Action',
  disabled: false,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
  children: 'Call to Action',
  disabled: false,
}
