<template>
  <div class="container">
    <div>
      <ul>
        <li
          v-for="color of ['system', 'light', 'dark', 'sepia']"
          :key="color"
          @click="$colorMode.preference = color"
        >
          {{ color }}
        </li>
      </ul>
      <Logo />
      <h1 class="title">david-rodriguez</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
