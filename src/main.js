import Timeline from './components/Timeline.vue'
import Graph2d from './components/Graph2d.vue'
import Network from './components/Network.vue'
import '../node_modules/vis-timeline/styles/vis-timeline-graph2d.min.css'
import '../node_modules/vis-network/styles/vis-network.min.css'

// Declare install function executed by Vue.use()
export function install(app) {
  if (install.installed) return

  install.installed = true
  app.component(Timeline.name, Timeline)
  app.component(Network.name, Network)
  app.component(Graph2d.name, Graph2d)
}

const plugin = { install }

// To auto-install when Vue is found
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export { DataSet, DataView } from 'vis-data/esnext'
export { Timeline, Graph2d, Network }
