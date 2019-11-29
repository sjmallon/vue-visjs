import { mount } from '@vue/test-utils'
import Graph2d from '@/components/Graph2d'

// simple test data
const graph2d = {
  groups: [
    {
      id: 0,
      content: 'SquareShaded',
      options: {
        drawPoints: {
          style: 'square' // square, circle
        },
        shaded: {
          orientation: 'bottom' // top, bottom
        }
      }
    },
    {
      id: 1,
      content: 'Bargraph',
      options: {
        style: 'bar'
      }
    },
    {
      id: 2,
      content: 'Blank',
      options: { drawPoints: false }
    },
    {
      id: 3,
      content: 'CircleShaded',
      options: {
        drawPoints: {
          style: 'circle' // square, circle
        },
        shaded: {
          orientation: 'top' // top, bottom
        }
      }
    }
  ],
  items: [
    { x: '2014-06-13', y: 60 },
    { x: '2014-06-14', y: 40 },
    { x: '2014-06-15', y: 55 },
    { x: '2014-06-16', y: 40 },
    { x: '2014-06-17', y: 50 },
    { x: '2014-06-13', y: 30, group: 0 },
    { x: '2014-06-14', y: 10, group: 0 },
    { x: '2014-06-15', y: 15, group: 1 },
    { x: '2014-06-16', y: 30, group: 1 },
    { x: '2014-06-17', y: 10, group: 1 },
    { x: '2014-06-18', y: 15, group: 1 },
    { x: '2014-06-19', y: 52, group: 1 },
    { x: '2014-06-20', y: 10, group: 1 },
    { x: '2014-06-21', y: 20, group: 2 },
    { x: '2014-06-22', y: 60, group: 2 },
    { x: '2014-06-23', y: 10, group: 2 },
    { x: '2014-06-24', y: 25, group: 2 },
    { x: '2014-06-25', y: 30, group: 2 },
    { x: '2014-06-26', y: 20, group: 3 },
    { x: '2014-06-27', y: 60, group: 3 },
    { x: '2014-06-28', y: 10, group: 3 },
    { x: '2014-06-29', y: 25, group: 3 },
    { x: '2014-06-30', y: 30, group: 3 }
  ],
  options: {
    defaultGroup: 'ungrouped',
    legend: true,
    start: '2014-06-10',
    end: '2014-07-04'
  }
}

describe('Graph2d.vue', () => {
  it('the graph exists', () => {
    const wrapper = mount(Graph2d, {
      propsData: {
        groups: graph2d.groups,
        items: graph2d.items,
        options: graph2d.options
      }
    })
    expect(wrapper.vm.graph2d).not.toBeNull()
  })

  it('renders elements within graph', () => {
    const wrapper = mount(Graph2d, {
      propsData: {
        groups: graph2d.groups,
        items: graph2d.items,
        options: graph2d.options
      }
    })
    expect(wrapper.contains('.vis-bar')).toBe(true)
  })
})
