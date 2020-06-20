<template>
  <div class="main">
    <input
      v-model="input"
      class="main__input"
      type="text"
      placeholder="Введите текст"
      @keyup.enter="saveText"
    >
    <dynamic-component
      class="main__dynamic-component"
      title="Кнопка"
      @click="saveText"
    />
    <div class="main__text">
      <span v-if="text">{{ text }}</span>
      <span v-else class="main__text-empty">Текст отсутвует</span>
    </div>
  </div>
</template>

<script>
import DynamicComponent from '@/components/DynamicComponent';

export default {
  components: {
    DynamicComponent
  },
  data() {
    return {
      input: null
    };
  },
  computed: {
    text() {
      return this.$store.state.text;
    }
  },
  methods: {
    saveText() {
      this.$store.commit('changeText', this.input);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  &__input, &__dynamic-component {
    margin-bottom: 10px;
  }

  &__text {
    &-empty {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
