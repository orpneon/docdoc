<template>
  <section :class="b()">
    <header :class="b('header')">
      <h1 :class="b('header-title')">
        {{ locale.title }}
      </h1>
    </header>
    <checkout :class="b('checkout')"/>
    <checkout-status :class="b('status-modal')"/>
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
    max-width 800px
    width 100%
    margin 0 auto 40px

    &__header
      margin 40px 0
      text-align center

    &__header-title
      font-size 30px

</style>
