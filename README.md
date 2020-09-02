# vue-visjs

> Vue2 component that helps with <a href="http://visjs.org/">Visjs</a> interaction.
> This is a fork of the [vis2vue](https://github.com/alexcode/vue2vis) project to update to the latest split component Visjs structure.

<p align="center">
  <a href="https://travis-ci.org/sjmallon/vue-visjs">
    <img src="https://travis-ci.com/sjmallon/vue-visjs.svg?branch=master" alt="Build Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/sjmallon/vue-visjs" alt="Software License" />
  </a>
  <a href="https://github.com/sjmallon/vue-visjs/releases">
    <img src="https://img.shields.io/github/v/release/sjmallon/vue-visjs?sort=semver" alt="Latest Version" />
  </a>

  <a href="https://github.com/alexcode/vue2vis/issues">
    <img src="https://img.shields.io/github/issues/sjmallon/vue-visjs" alt="Issues" />
  </a>
</p>

### Installation

```
npm install --save vue-visjs
```

or

```
yarn add vue-visjs
```

## Usage

Declare the component

```javascript
import { Timeline } from 'vue-visjs'
Vue.component('timeline', Timeline)
```

Add the component in the template.

```html
<body>
  <div id="app">
    <timeline ref="timeline" :items="items" :groups="groups" :options="options"> </timeline>
  </div>
</body>
```

Add groups, items and options in your observed data or computed.

```javascript
new Vue({
  el: '#app',
  data() {
    return {
      groups: [
        {
          id: 0,
          content: 'Group 1'
        }
      ],
      items: [
        {
          id: 0,
          group: 0,
          start: new Date(),
          content: 'Item 1'
        }
      ],
      options: {
        editable: true
      }
    }
  }
})
```

## Events

### Component Events

By default all Vis events are emitted by your component. You can subscribe to a subset by passing an array in the prop `events` [Visjs event](http://visjs.org/docs/timeline/#Events).

```html
<body>
  <div id="app">
    <timeline
      ref="timeline"
      :items="items"
      :groups="groups"
      :options="options"
      :events="['drop', 'changed']"
      @drop="myDropCallback"
      @changed="myChangedCallback"
    >
    </timeline>
  </div>
</body>
```

### Data Events

When you pass an Array of data object, it is converted internally as a DataSet.
An event with the DataSet object will be fired at mounted. It's name will be prepend with the prop name (Ex: `items-mounted`, `groups-mounted`). You could use it to interact with the DataSet.

All the [Visjs DataSet event](http://visjs.org/docs/data/dataset.html#Events) will be prepened the same fashion (`items-add`, `items-remove`, `items-update`). For example, pushing a new object to the `items` prop will fire a `items-add` event with the following payload:

```javascript
{
  event: 'add',
  properties: {
    items: [7],
  },
  senderId: null,
}
```

#### Advanced

You can also manage your own data bindings by passing your own DataSet or DataView instead of an Array.

```javascript
import { DataSet } from 'vue2vis'

new Vue({
  el: '#app',
  data() {
    return {
      groups: new DataSet([
        {
          id: 0,
          content: 'Group 1'
        }
      ]),
      items: new DataSet([
        {
          id: 0,
          group: 0,
          start: new Date(),
          content: 'Item 1'
        }
      ]),
      options: {
        editable: true
      }
    }
  }
})
```

## Visjs documentation

Full reference of Item and Group formats, options properties and events: [Timeline](https://visjs.github.io/vis-timeline/docs/timeline/), [Network](https://visjs.github.io/vis-network/docs/network/), [Graph2d](https://visjs.github.io/vis-timeline/docs/graph2d/), [DataSet / DataView](https://visjs.github.io/vis-data/)

## List of currently implemented modules

- [x] Timeline
- [x] Graph2d
- [ ] Graph3d
- [x] Network

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

```bash
$ npm run test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) for details.

### Build Setup

```bash
# Once you have cloned this repo, install dependencies
$ npm install

# build for development and production with minification
$ npm run build

```

### Run demo locally

```bash
# Run demo at localhost:8080
$ npm link
$ cd examples
$ npm install
$ npm link vue-visjs
# serve with hot reload at localhost:8080
$ npm run serve
```

Go to <http://localhost:8080/> to see running examples

NOTE: If you make changes to the library you should run 'npm run build' again in the root folder.
The dev server should detect modification and reload the demo

## Security

If you discover any security related issues, please email public.sjmallon@gmail.com instead of using the issue tracker.

## Credits

- [Steve Malllon][link-author]

- [vue2vis contributors](https://github.com/alexcode/vue2vis/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/sjmallon
[link-contributors]: ../../contributors
