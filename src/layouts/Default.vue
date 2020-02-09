<template>
  <div
    class="content-wrapper font-sans leading-normal flex flex-col min-h-screen text-primary"
  >
    <header class="border-t-14 border-highlight">
      <HeaderNav logoColor="light" />
    </header>

    <div class="flex-grow px-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export default {
  components: {
    HeaderNav,
    Footer
  }
}
</script>

<style src="../css/main.css" />
