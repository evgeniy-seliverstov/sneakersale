<template>
  <div @click="$emit('click')">
    <a
      v-if="link"
      :target="newWindow ? '_blank' : ''"
      :href="href"
      v-text="title"
    />
    <span v-else v-text="title" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    link: Boolean,
    newWindow: Boolean,
    href: {
      type: String,
      default: '/'
    }
  }
};
</script>

<style lang="scss">
span:hover {
  cursor: pointer;
}
</style>
