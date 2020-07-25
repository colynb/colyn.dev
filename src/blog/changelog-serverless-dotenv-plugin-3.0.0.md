---
title: CHANGELOG serverless-dotenv-plugin version 3.0.0
date: 2020-07-24
path: /changelog-serverless-dotenv-plugin-3.0.0
tags:
  - 'Serverless'
  - 'Dotenv'
summary: 'Big update to serverless-dotenv-plugin'
---

With the help of [@danilofuchs](https://github.com/danilofuchs) we released a major version - 3.0! This version includes the following:

- Updated ENV file resolution to include `.env.*.local` files which is a standard that is being adopted with other frameworks.

The reason for the major version bump is not because we think there are breaking changes but that we didn't want to take any chances in case there are breaking changes on use-cases that we didn't think of. Major version bumps do not automatically get pulled when doing a yarn or npm install. Of course this depends on the update convention they use in their package.json file but this allows devs to explicitly ask for the latest version if they want to test it out. (e.g. `yarn add serverless-dotenv-plugin@3.0.0`)
