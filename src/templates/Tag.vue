<template>
  <Layout>
    <div class="container mx-auto my-16">
      <div class="bg-primary text-white p-6 mb-6">
        <h1 class="text-3xl font-bold mb-3">{{ $page.tag.title }}</h1>
        <h2 class="text-xl">Blog posts tagged as {{ $page.tag.title }}</h2>
      </div>

      <div
        v-for="post in posts"
        :key="post.node.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{
            post.node.title
          }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span> &middot; </span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ post.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase"
            >Read More</g-link
          >
        </div>
      </div>

      <pagination-posts
        v-if="$page.tag.belongsTo.pageInfo.totalPages > 1"
        :base="`/tag/${$page.tag.title}`"
        :totalPages="$page.tag.belongsTo.pageInfo.totalPages"
        :currentPage="$page.tag.belongsTo.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 3) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            timeToRead
    	      date (format: "MMMM D, YYYY")
            path
            summary
            status
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  computed: {
    posts() {
      return this.$page.tag.belongsTo.edges.filter(
        (page) => page.node.status !== 'draft'
      )
    },
  },
  metaInfo() {
    return {
      title: 'Tag: ' + this.$page.tag.title,
    }
  },
  components: {
    PaginationPosts,
  },
}
</script>
