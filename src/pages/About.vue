<template>
  <Layout
    ><div class="container mx-auto md:py-16">
      <h1 class="text-3xl font-bold leading-tight mb-3">
        About Me
      </h1>
      <div class="mb-12">
        <div class="md:flex">
          <img
            src="https://www.gravatar.com/avatar/f0dc292864631e648736f6b454832970?s=500"
            alt="hero"
            class="rounded-full w-32 h-32 mb-6 sm:mr-6"
          />
          <div class="mb-3">
            With 20 years of web development and design experience and 5 years specializing in frontend architecture and product development, I have helped numerous businesses to not only look their best and provide the best user experience to their customers but to also modernize and bootstrap their development processes enabling them to scale with their team. I work best with product and customer-driven organizations, those that are passionate about solving problems and creating solutions that bring big value to their customers. From a technical perspective, I am a full-stack developer specializing in languages required for building modern web applications such as Javascript, both on the frontend and backend. I am currently Senior UI Architect at ForSaleByOwner.com and a part-time startup technology consultant with the company I founded in 2017, InFront Labs, LLC.
          </div>
        </div>
      </div>
      <div class="p-3 bg-gray-100 mb-12">
        Hey, need one-on-one help with an Open Source project? I started
        <g-link to="/openhours" class="font-bold underline"
          >Open Hours for Open Source</g-link
        >, where I devote an hour every week helping out the open source
        community, for FREE.
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
