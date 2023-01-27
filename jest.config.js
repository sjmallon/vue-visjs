module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!vis-data|vis-util|@deia/vis-timeline|vis-network)'],
  setupFiles: ['./tests/globalCrypto.js']
}
