<template>
  <section :class="b()">
    <header>{{ locale.title }}</header>
  </section>
</template>

<script>
  export default {
    name: 'main-content',

    data () {
      return {
        locale: {
          title: 'Оформить заказ'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-content
    width 100%
</style>
