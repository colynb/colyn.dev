---
title: Upcoming Changes to serverless-dotenv-plugin
date: 2020-02-10
path: /upcoming-changes-to-serverless-dotenv-plugin
tags:
  - 'Serverless'
  - 'Dotenv'
summary: 'Some much needed changes to a popular plugin.'
---

**Background**

My first commit to the `serverless-dotenv-plugin` was back in Aug 7, 2017. Going on 3 years. In that time, it's not really gone through any major changes. I created it to do some very basic environment variable management that I personally needed while working on a project for my employer. At that time, I had not had much experience doing serverless, particularly with AWS. One thing that I have gotten used to and in fact enjoyed was how other systems that I have been using up to this point, all had decent and intuitive environment variable management. The idea is simple: you create a file named `.env` and add any environment variables you need to that file in a straight key/value format. Not JSON, not YAML, just a list of key/value pairs.

```bash
APP_SECRET=abc1234
DATABASE_PASSWORD=1234qwerty
...
```

Depending on what platform you are using (NodeJS, PHP, etc), you load those variables into your server environment using a version of the "dotenv" library. For nodejs, you import [dotenv](https://www.npmjs.com/package/dotenv). For PHP, you require [phpdotenv](https://github.com/vlucas/phpdotenv). The repo for PHP also includes a great introduction and explanation into why using .env files is beneficial which I don't want to get into here.

So, when I started on this serverless project a few years ago, as a team, we decided to use the Serverless Framework found at [serverless.com](https://serverless.com). At that time AWS had not developed the comparable "SAM" library, at least we weren't aware of it. So, after years of managing environment variables in other projects using .env files, I was a little surprised that there was not comparable system in the serverless framework. There were plugins for managing environment variables but they were a bit less intuitive than what I was used to. So thinking that I wasn't the only one with this frustration, I created and published the [serverless-dotenv-plugin](https://www.npmjs.com/package/serverless-dotenv-plugin) on npm. At the time of this writing, it's getting 36K weekly downloads.

**Where it's heading**

> My number one goal is to not break this. This needs to be guaranteed.

Ok, so, I honestly didn't realize that so many developers would be using this plugin. The downside to this is that as the maintainer I have increased responsibility to ensure that this doesn't break for the thousands of developers who depend on this to deploy their functions to AWS. My number one goal is to not break this. This needs to be guaranteed. For me, as someone who really isn't a serverless expert and as someone who can't possibly imagine all the ways in which developers use and depend on it, what it means is that I err on the side of not making any changes at all. Understandably, this has frustrated a handful of developers who have submitted feature requests and instead of communicating my reservations to them, I just ignored them. I just didn't have time to even think through how to even implement any of these requests in a _guaranteed_ backwards compatible way.

Now, I've changed my attitude. For a good reason for which I will expand upon in a later post, I decided to to my best to be a good steward of my open-source projects.

With ALL of that said (sorry for the rant), I've made some changes to the plugin that will satisfy most usage concerns. Most of the concerns and requests revolve around configuring the dotenv plugin itself. The serverless-dotenv-plugin is really just a wrapper around the main dotenv plugin and developers have asked for various features to be able to configure _that_ in some ways. So I started thinking about it and I realized that I made an architectural error when first developing this. The error is that I include the dotenv plugin as a dependency and as such my plugin has to do all the configuring. For instance, I include the dotenv-expand library to further enhance it. This is the wrong approach. It really should have started out with dotenv as a peer dependency with a hook into my plugin that will allow them to configure it in any way they want. Without this, I would have to bake in these types of configurations every time someone requests it. Better to just open it up and let them do it.

Again, as I stated before, this change must absolutely guarantee that it will be backwards compatible. I created a new branch and submitted a PR (yes, to myself) so that other developers can help with code reviewing.

You can see the PR here https://github.com/colynb/serverless-dotenv-plugin/pull/48

In a nutshell, this change allows a developer to include a new file in their repo named `dotenv.config.js` which I check to see if it exists. Again for backwards compatibility, **it's not required**. If it does exist, I import it and pass the dotenv library to it as a param. Now that you have access to it, you're free to configure it however you want.

This is just a first step to resolve some of the requests. Other feature requests have to do with logging to the console. For those, I promise that I will starting thinking about it but, for now, I'm very nervous about making changes to that behavior.

Thank you for your time.
