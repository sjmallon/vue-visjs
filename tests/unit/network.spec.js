import { mount } from '@vue/test-utils'
import Timeline from '@/components/Network'

// simple test data
const network = {
  nodes: [
    { id: 1, label: 'Node 1' },
    { id: 2, label: 'Node 2' },
    { id: 3, label: 'Node 3' },
    { id: 4, label: 'Node 4' },
    { id: 5, label: 'Node 5' }
  ],
  edges: [
    { id: 1, from: 1, to: 3 },
    { id: 2, from: 1, to: 2 },
    { id: 3, from: 2, to: 4 },
    { id: 4, from: 2, to: 5 },
    { id: 5, from: 3, to: 3 }
  ],
  options: {
    nodes: {
      shape: 'circle'
    }
  }
}

describe('Network.vue', () => {
  it('the network exists', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        nodes: network.nodes,
        edges: network.edges,
        options: network.options
      }
    })
    expect(wrapper.vm.network).not.toBeNull()
  })

  it('renders elements within network', () => {
    const wrapper = mount(Timeline, {
      propsData: {
        nodes: network.nodes,
        edges: network.edges,
        options: network.options
      }
    })
    // console.log(wrapper.html().split('</div>'))
    expect(wrapper.find('.vis-network').exists()).toBe(true)
  })
})
