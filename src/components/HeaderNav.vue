<template>
  <nav
    class="p-3 sm:p-0 sm:h-20 container mx-auto md:flex items-center justify-between"
  >
    <div class="uppercase font-bold">
      <g-link to="/" class="flex items-center mb-6 sm:mb-0">
        <img
          v-if="logoColor === 'light'"
          src="../../static/logo-on-white.svg"
          alt="COLYN.DEV"
          class="w-8 h-8 mr-3"
        />
        <img
          v-else
          src="../../static/logo-on-dark.svg"
          alt="COLYN.DEV"
          class="w-8 h-8 mr-3"
        />
        <div class="hover:text-black">COLYN.DEV</div>
      </g-link>
    </div>

    <ul class="uppercase font-bold block flex">
      <li class="mr-8 mb-6 lg:mb-0">
        <g-link to="/about" class="hover:text-black">About Me</g-link>
      </li>
      <li class="mr-8 mb-6 lg:mb-0">
        <g-link to="/docs" class="hover:text-black">Open Source</g-link>
      </li>
      <li>
        <g-link to="/blog" class="hover:text-black">Blog</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['logoColor'],
}
</script>
