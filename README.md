# Bitbond Vue Components
[![npm (scoped)](https://img.shields.io/npm/v/@bitbond/components)]('https://www.npmjs.com/package/@bitbond/components')

## Installation
Install the npm package:
```bash
npm install @bitbond/components
# or with yarn
yarn add @bitbond/components
```

Add it as a plugin in your Vue project, e.g. create a file like `bitbond/components.js` in your plugins folder and add the following to it's contents:
```javascript
// plugins/bitbond/components.js
import Vue from 'vue'
import bbComponents from '@bitbond/components'

Vue.use(bbComponents)
```

Import this plugin in your app's build step/file.

## Dependencies
### Required
[Tailwindcss](https://tailwindcss.com/) - It is expected that your project has Tailwind installed. The components then use the Tailwind classes provided by your Tailwind configuration.

For example, using the `bb-btn` component:
```html
<bb-btn color="primary">Hello World</bb-btn>
```
This will use your Tailwind colour class for `bg-primary-500` as the background colour for the button, and variant classes for hover/active states.

### Optional
There is one optional dependency, [Fontawesome](https://fontawesome.com/).

The `bb-icon` component takes a `name` prop and applies that as a class to an underlying `<i :class="'icon ${name}" />` element. The purpose is such that if you have Fontawesome installed in your app you can use the component like this:

```html
<bb-icon name="fas fa-user-circle" />
```

Please see [bbIcon.vue](/src/components/bbIcon.vue) for more information.

## Development
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn run build
```
