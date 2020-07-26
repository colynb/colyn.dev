<template>
  <Layout
    ><div class="container mx-auto md:py-16">
      <h1 class="text-3xl font-bold leading-tight mb-3">
        Open Hours for Open Source
      </h1>
      <div class="mb-12">
        <p>
          Starting July 24 2020, I have set aside an hour
          <strong>every Friday</strong> to work with any developer one-on-one on
          an Open Source project - for FREE!. For example, if you're struggling
          with integrating a Vue or React component library, I might be able to
          help. No guarantees but sometimes it helps to have a second pair of
          eyes, and likely we both come away better for it. I've also used this
          to work one-on-one with another developer who helped me get his PR
          merged on my serverless-dotenv-plugin. It was a good experience and I
          want to keep doing this.
        </p>
      </div>

      <div>
        <a
          href="#"
          onclick="Calendly.initPopupWidget({url: 'https://calendly.com/infrontlabs/openhours'});return false;"
          class="inline-block rounded-lg bg-primary text-white text-xl px-5 py-3 font-semibold hover:bg-black mb-1"
          >Book a time that works best!</a
        >
        <p class="text-sm">Available: Every Friday 4pm-6pm (Arizona)</p>
      </div>
    </div></Layout
  >
</template>

<style scoped>
p {
  @apply mb-3;
}
</style>

<script>
export default {
  metaInfo: {
    title: 'Open Hours for Open Source',
    meta: [
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Open Hours for Open Sources',
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Open Hours for Open Source',
      },
      {
        key: 'twitter:desctiption',
        name: 'twitter:description',
        content:
          'Starting Friday, July 24th, I have set aside a couple hours to work with any developer 1:1 on an open-source project.',
      },
      {
        key: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        key: 'twitter:creator',
        name: 'twitter:creator',
        content: '@colynb',
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://colyn.dev/assets/static/favicon.7b22250.65fb38b692f638eeb604e9aa2eba7992.png',
      },
    ],
  },
}
</script>
