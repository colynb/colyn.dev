---
title: Add Drafts to a Gridsome Blog
date: 2020-07-27
path: /add-drafts-to-gridsome-blog
tags:
  - 'VueJS'
  - 'Gridsome'
summary: 'Quick way to publish a blog post but hide it from a blog page'
---

I'm sure there are a million ways to do this but for this small feature I wanted I decided that I wasn't going to google search for a solution or download some plugin, that I would just see if I knew enough to build it myself.

My only goal is to be able to make a draft publicly accessible but not show up on my blog index page. This is how I did it.

First, keep in mind that I'm using the markdown and file system plugins that are commonly used for building a blog with Gridsome. I don't think Gridsome provides this out of the box and I don't intend to explain in this post how to set that up. This assumes you are already creating a blog in this way.

Given that the markdown renderer makes use of "frontmatter", a block of YAML at the top of the markdown file, I knew right away that is where I would set the draft status of a blog post.

```yaml
---
title: Add Drafts to a Gridsome Blog
date: 2020-07-27
path: /add-drafts-to-gridsome-blog
summary: 'Publish a blog post but hide it from blog page'
status: 'draft'
---

```

You will first need to include status in the graphql query:

```graphql
edges {
    node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
        status
    }
}
```

From there, I went into the script section of the Blog index page to see if I could filter out any post that has a status of "draft". To do this, I had to create a computed property called posts, which would allow me to filter out any posts with the status of "draft":

```javascript
computed: {
    posts() {
        return this.$page.posts.edges.filter(page => page.node.status !== 'draft')
    },
},
```

This ensures the Blog index page does not include the post. If you have any other pages that list blog posts, you will need to make similar change. For instance, the Tag page will likely be showing your draft post if it includes tags.

From there, just make sure you change your v-for from `v-for="post in $page.posts.edges"` to `v-for="post in posts"`

Now, if you've gotten this far you may notice that it's not working. Like me, I realized that I needed to update the `gridsome.server.js` file to include "status" in the API

```javascript
const posts = collection.data.map((post) => {
  return pick(post, ['title', 'path', 'summary', 'status'])
})
```

That's it, I hope you found that helpful. Do you have any tips for making this better? Find me on Twitter [@colynb](https://twitter.com/colynb) and let me know.
