<template>
  <div>
    <Base>
      <div
        class="bg-primary text-white  content-wrapper font-sans leading-normal flex flex-col min-h-screen"
      >
        <header class="border-t-14 border-highlight">
          <HeaderNav logoColor="dark" />
        </header>

        <div class="flex-grow">
          <slot />
        </div>
        <Footer />
      </div>
    </Base>
  </div>
</template>

<script>
import Base from '../layouts/Base'
import HeaderNav from '../components/HeaderNav'
import Footer from '../components/Footer'

export default {
  components: {
    HeaderNav,
    Footer,
    Base
  }
}
</script>
