---
title: Why I Started Using NuxtJS
date: 2020-01-24
path: /why-i-started-using-nuxtjs
tags:
  - 'Javascript'
  - 'NuxtJS'
  - 'NuxtJS-Series'
  - 'Web Development'
  - 'PHP'
  - 'Laravel'
summary: 'My thoughts on the problems I run into that can be solved by the NuxtJS framework.'
---

Back in 2001, the dev team I was on had the opportunity to rebuild our website in either PHP or JSP. We chose PHP. Since then, PHP is the language that has been the foundation of my career. I've been doing web development for a long time and a large portion of that time has been spent using PHP and more recently, Laravel, building server rendered apps that sprinkle in Javascript now and then.

How does this stack up against today's web application requirements? Most of the heavy lifting and business logic is moving to the frontend with JavaScript, leaving the backend for APIs. Increasingly, the question that needs to be answered is who is responsible for rendering the HTML: the backend server or JavaScript. Increasingly, the answer is Javascript in the form of a UI framework like React or Vue - Single Page Applications (SPAs). This is the new model for building modern web applications. This means, the web server is responsible for a few things: delivering the initial html page, serving the javascript files and other frontend assets, and an API if you need to talk to a database. Once that javascript app has been loaded, it takes over the user experience. All the routing (navigating from page to page) that used to be handled by web servers is now being handled by javascript, without going back to the server to request the new page. Again, only a single page was requested from the server. After that, all interactions and navigation happen completely on the frontend.

So, given that, how does a PHP framework like Laravel fit into this new model? I believe Laravel has evolved quite nicely to compete in this new space. It has many features that enable developers to quickly build API backends plus it even ships with all the frontend build tools modern applications require, like webpack and your choice of either Vue or React. In short, Laravel is a very nice choice for building SPAs.

So what's the problem? The problem that I keep running into is that at times I'm forced to make a binary choice: either I build a completely server rendered application (e.g. use Laravel and it's templating language, Blade) and sacrifice the performance and responsiveness you get from a SPA, or I build a completely client-side rendered application (e.g. use VueJS and only use Laravel for the API) and sacrifice some of the SEO benefits you get from a fully server rendered app. I don't want to spend too much time talking about the various trade-offs between the two choices because to be fair it can be a bit subjective. I only mention this to point out the binary nature of the choices we have.

So, what if I want to build something in-between, where some pages are server rendered and others are client-side rendered SPAs? A classic example of this would be a SaaS (Software-as-a-Service) app where your homepage and all other landing pages, any page designed for marketing purposes, are rendered on the server so that they are optimized for search engines to crawl and index. Then, when your customers log into their dashboard (the part of your application not related to marketing and thus no requirement to be optimized for search engines), the app and navigation is completely rendered and handled by javascript. To do this you essentially have to create two different apps, one for your marketing SEO driven pages and one for your admin dashboard.

Especially if the Javascript app and the homepage share UI elements like the navbar, footer, etc, this starts to break down and becomes a suboptimal way of developing. Lots of copying and pasting between template languages like Laravel's Blade and JSX in React. I don't know of a clean way to manage this.

I need a _single_ template language that can be rendered on the server and the client. A framework for rendering the initial UI on the server, one that lets the client take over the user experience from there.

I believe this is why NuxtJS exists. Yes, it provides these tools for building apps that let you render HTML on the server or in a SPA, or even pre-rendered, but it's very clear to me why it exists.

In my next post I will walk you through some practical examples of how I'm using it in my [OneHourUp](https://onehourup.com) project.
