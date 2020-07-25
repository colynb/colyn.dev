<template>
  <Layout>
    <div class="container mx-auto py-16">
      <h1 class="text-3xl font-bold leading-tight">
        CHANGELOG
      </h1>
      <div class="mb-12">
        <a
          href="https://github.com/colynb/serverless-dotenv-plugin"
          class="text-2xl leading-none"
          >serverless-dotenv-plugin</a
        >
      </div>

      <div class="text-gray-800 text-2xl">
        Version 3.0.0
      </div>
      <div class="text-gray-500 mb-6">July 24, 2020</div>
      <div class="bg-gray-100 p-4 mb-6">
        <div>
          <p>
            With the help of
            <a
              href="https://github.com/danilofuchs"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >@danilofuchs</a
            >
            we released a major version - 3.0! This version includes the
            following:
          </p>
          <ul class="list-disc px-8 my-6">
            <li>
              Updated ENV file resolution to include
              <code class="">.env.*.local</code> files which is a standard that
              is being adopted with other frameworks.
            </li>
          </ul>
          <p>
            The reason for the major version bump is not because we think there
            are breaking changes but that we didn't want to take any chances in
            case there are breaking changes on use-cases that we didn't think
            of. Major version bumps do not automatically get pulled when doing a
            yarn or npm install. Of course this depends on the update convention
            they use in their package.json file but this allows devs to
            explicitly ask for the latest version if they want to test it out.
            (e.g. <code>yarn add serverless-dotenv-plugin@3.0.0</code>)
          </p>
        </div>
      </div>

      <div class="text-gray-800 text-2xl">
        Version 2.4.2
      </div>
      <div class="text-gray-500 mb-6">April 18, 2020</div>
      <div class="bg-gray-100 p-4 mb-6">
        <p>
          I just merged a PR today and created version 2.4.2 of the
          serverless-dotenv-plugin. Thanks to
          <a
            href="https://github.com/thibaultdalban"
            target="_blank"
            rel="nofollow noopener noreferrer"
            >@thibaultdalban</a
          >
          for his contribution.
        </p>
        <p>
          This version now supports the addition of the <code>--stage</code> or
          <code>-s</code> command line flag for determining which env file to
          use.
        </p>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
code {
  background-color: rgba(255, 217, 168, 0.6);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
  font-family: monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo,
    Courier, monospace;
}
p {
  @apply mb-3;
}
a {
  @apply text-primary;
  @apply underline;
  @apply font-semibold;
}
a:hover {
  @apply no-underline;
}
</style>
