const devPresets = [
  '@vue/babel-preset-app',
  {
    include: [/(optional-chaining|nullish-coalescing)/]
  }
] //includes babel-preset-env
const buildPresets = [
  [
    '@babel/preset-env',
    // Config for @babel/preset-env
    {
      include: [/(optional-chaining|nullish-coalescing)/]
    }
  ]
]
module.exports = {
  presets: process.env.NODE_ENV === 'development' ? devPresets : buildPresets,
  plugins: process.env.NODE_ENV === 'test' ? ['@babel/plugin-transform-runtime'] : undefined
}
