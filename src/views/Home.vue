<template>
  <section :class="b()">
    <header>{{ locale.title }}</header>
    <checkout/>
  </section>
</template>

<script>
  import Checkout from '@/components/Checkout'

  export default {
    name: 'main-content',
    components: { Checkout },

    data () {
      return {
        locale: {
          title: 'Оформление заказа'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-content
    width 100%
</style>
