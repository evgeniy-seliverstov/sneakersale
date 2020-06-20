<template>
  <div class="layout">
    <navigation :menu="menu" />
    <transition name="route" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Navigation from '@/components/navigation';

export default {
  components: {
    Navigation
  },
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    getCurrentLink() {
      return this.menu.find(menuItem => menuItem.path === this.$route.path);
    }
  },
  head() {
    return {
      title: this.getCurrentLink?.title,
      meta: this.getCurrentLink?.meta
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
.layout {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 20px;
  max-width: 500px;
}
.route-enter-active, .route-leave-active {
  transition: opacity .5s;
}
.route-enter, .route-leave-active {
  opacity: 0;
}
</style>
