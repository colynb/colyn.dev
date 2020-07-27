<template>
  <Layout>
    <div class="container mx-auto md:my-16 Post">
      <h1 class="text-4xl font-bold leading-tight mb-3">
        {{ $page.post.title }}
      </h1>
      <h2 class="text-2xl">{{ $page.post.summary }}</h2>
      <div class="text-gray-600 py-6 mb-4">{{ $page.post.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.post.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-orange-300"
        >
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    summary
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          property: 'og:image',
          content: require('~/favicon.png'),
        },
        {
          property: 'og:title',
          content: this.$page.post.title,
        },
        {
          property: 'og:description',
          content: this.$page.post.summary,
        },
      ],
    }
  },
}
</script>

<style>
.markdown-body a {
  @apply text-highlight;
  border-bottom: solid 1px #ccc;
}
.markdown-body a:hover {
  @apply text-primary;
  border-bottom: solid 1px #666;
}
</style>

<style src="../css/github-markdown.css" />
