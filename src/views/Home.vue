<template>
  <section :class="b()">
    <header>
      <h1>
        {{ locale.title }}
      </h1>
    </header>
    <checkout/>
    <checkout-status/>
  </section>
</template>

<script>
  import Checkout from '@/components/Checkout'
  import CheckoutStatus from '@/components/CheckoutStatus'

  export default {
    name: 'main-content',
    components: { CheckoutStatus, Checkout },

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
