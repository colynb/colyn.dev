// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'keywords',
    content:
      'fullstack, full-stack, startup, web development, javascript, vuejs, reactjs, laravel, php'
  })

  head.meta.push({
    name: 'description',
    content:
      'Startup technology consultant and UI/UX expert helping small-business entrepreneurs deliver valuable solutions to their valuable customers.'
  })

  head.meta.push({
    name: 'author',
    content: 'Colyn Brown'
  })

  // head.meta.push({
  //   property: 'og:image',
  //   content: '/assets/static/src/favicon.png'
  // })
}
