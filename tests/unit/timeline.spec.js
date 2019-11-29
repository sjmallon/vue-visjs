import { mount } from '@vue/test-utils'
import Timeline from '@/components/Timeline'

// simple test data
const timeline = {
  groups: [
    {
      id: 0,
      content: 'Group 1'
    }
  ],
  /*  WARN: it seems that timeline content is not rendered unless an item with both start and end is included
   *   This is a visjs issue, so just work with it here
   */
  items: [
    {
      id: 4,
      group: 0,
      content: 'item 4',
      start: '2014-04-16',
      end: '2014-04-19'
    },
    {
      id: 6,
      group: 0,
      content: 'item 6',
      start: '2014-04-27',
      type: 'point'
    }
  ]
}

describe('Timeline.vue', () => {
  it('the timeline exists', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        groups: timeline.groups,
        items: timeline.items
      }
    })
    expect(wrapper.vm.timeline).not.toBeNull()
  })

  it('renders elements within timeline', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        groups: timeline.groups,
        items: timeline.items,
        options: { start: '2014-01-01', end: '2014-12-31', width: 1000 }
      }
    })
    expect(wrapper.contains('.vis-item-content')).toBe(true)
  })
})
