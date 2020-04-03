import Timeline from './components/Timeline.vue'
import Graph2d from './components/Graph2d.vue'
import Network from './components/Network.vue'
import '../node_modules/vis-timeline/dist/vis-timeline-graph2d.min.css'
import '../node_modules/vis-network/dist/vis-network.min.css'

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component(Timeline.name, Timeline)
  Vue.component(Network.name, Network)
  Vue.compoents(Graph2D.name, Graph2d)
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  /* eslint no-undef: 0 */
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
export { DataSet, DataView } from 'vis-data/peer'
export { Timeline, Graph2d, Network }
