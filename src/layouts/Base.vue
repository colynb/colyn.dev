<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      {
        property: 'og:image',
        content: require('~/favicon.png')
      }
    ]
  }
}
</script>

<style src="../css/main.css" />
