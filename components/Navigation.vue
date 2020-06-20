<template>
  <nav>
    <ul>
      <li v-for="(link, index) in menu" :key="index">
        <nuxt-link :to="link" v-text="link.title" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
nav ul {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 1.05rem;

  a {
    color: #000;
    text-decoration: none;
    padding-bottom: 1px;
    position: relative;

    &:not(.nuxt-link-exact-active)::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      width: 100%;
      background: #000;
      transition: .3s;
    }

    &:hover::after {
      width: 0;
    }
  }
}
</style>
