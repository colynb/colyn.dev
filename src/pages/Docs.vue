<template>
  <Layout>
    <div class="container mx-auto md:py-16">
      <div class="bg-primary text-white p-6 mb-6">
        <h1 class="text-3xl font-bold mb-3">Open Source Documentation</h1>
        <h2 class="text-xl mb-6">
          Below is a list of open-source packages that I have created and
          maintain.
        </h2>
        <p>
          If you need help with any of these projects, I have opened up some
          hours each Friday to dedicate to working wirh you 1-on-1. Schedule a
          time with me here:
          <a href="https://calendly.com/infrontlabs/openhours" class="font-bold"
            >Open Hours for Open Source</a
          >
        </p>
      </div>

      <div
        v-for="doc in $page.docs.edges"
        :key="doc.id"
        class="post border-gray-400 mb-6 text-primary p-6"
        :class="{ 'bg-gray-200': true }"
      >
        <h2
          class="text-2xl font-bold text-primary leading-none mb-1 md:flex justify-between items-start"
        >
          <g-link :to="doc.node.path" class="text-copy-primary mb-3 block">{{
            doc.node.title
          }}</g-link>
          <div class="flex">
            <a
              class="mr-2"
              :href="'https://www.npmjs.com/package/' + doc.node.name"
              ><img :src="downloadBadge(doc.node.name)" alt="NPM downloads"
            /></a>
            <a :href="'https://www.github.com/colynb/' + doc.node.name"
              ><img :src="starsBadge(doc.node.name)" alt="Stars"
            /></a>
          </div>
        </h2>

        <div class="text-lg mb-3">
          {{ doc.node.excerpt }}
        </div>

        <div>
          <g-link :to="doc.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>
      <!-- end post -->
    </div>
  </Layout>
</template>

<page-query>
query Documentation {
  docs: allDocumentation (sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        name
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Docs',
  },
  methods: {
    downloadBadge: (name) => {
      return `https://img.shields.io/npm/dt/${name}`
    },
    starsBadge: (name) => {
      return `https://img.shields.io/github/stars/colynb/${name}`
    },
  },
}
</script>
