module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!vis-data|vis-timeline)'],
  setupFiles: ['./tests/globalCrypto.js']
}
