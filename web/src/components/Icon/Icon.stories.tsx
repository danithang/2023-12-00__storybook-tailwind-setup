// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

// autodocs automatically adds the Storybook icon to the table of contents
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

// declare all the stories you intend to write here - this will ensure that they are added to the table of contents in the correct order and that they are all documented in the README file for this component (see web/src/components/Icon/README.md)
export const Calendar: Story = {
  args: {
    id: 'calendar',
  },
}

export const check: Story = {
  args: {
    id: 'check',
  },
}

export const chevron: Story = {
  args: {
    id: 'chevron',
  },
}

export const Close: Story = {
  args: {
    id: 'close',
  },
}

export const eyeClosed: Story = {
  args: {
    id: 'eyeClosed',
  },
}

export const eyeOpened: Story = {
  args: {
    id: 'eyeOpened',
  },
}

export const logout: Story = {
  args: {
    id: 'logout',
  },
}

export const minus: Story = {
  args: {
    id: 'minus',
  },
}

export const plus: Story = {
  args: {
    id: 'plus',
  },
}

export const question: Story = {
  args: {
    id: 'question',
  },
}

export const thumbsDown: Story = {
  args: {
    id: 'thumbsDown',
  },
}

export const thumbsUp: Story = {
  args: {
    id: 'thumbsUp',
  },
}

export const upload: Story = {
  args: {
    id: 'upload',
  },
}

export const user: Story = {
  args: {
    id: 'user',
  },
}
