<template>
  <Layout>
    <div class="bg-primary text-white">
      <div class="container mx-auto sm:flex px-3 sm:py-16 items-start mb-6">
        <img
          src="https://www.gravatar.com/avatar/f0dc292864631e648736f6b454832970?s=500"
          alt="hero"
          class="rounded-full w-32 h-32 sm:mr-6"
        />
        <div class="">
          <div class="leading-tight text-4xl font-bold">
            Startup Technology Consultant and UI/UX Expert
          </div>
          <div class="text-highlight leading-tight text-2xl mb-6">
            I help small-business entrepreneurs deliver valuable solutions to
            their valuable customers.
          </div>
          <a
            href="#"
            onclick="Calendly.initPopupWidget({url: 'https://calendly.com/infrontlabs/30min?hide_event_type_details=1'});return false;"
            class="block text-xl font-bold bg-white hover:bg-highlight hover:text-white shadow text-primary rounded-full py-1 px-4 text-center"
            >Schedule a FREE 30-minute Consultation</a
          >
        </div>
      </div>
    </div>
    <!-- end hero -->
  </Layout>
</template>

<script>
import Layout from '../layouts/Home'
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
