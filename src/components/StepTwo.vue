<template>
  <v-stepper-content :step="stepNumber">
    <v-card/>

    <v-btn @click="returnToPrev">
      {{ locale.returnButton }}
    </v-btn>

    <v-btn @click="complete">
      {{ locale.completeButton }}
    </v-btn>
  </v-stepper-content>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'checkout-step-two',

    data () {
      return {
        stepNumber: 2,
        locale: {
          returnButton: 'Вернуться',
          completeButton: 'Оформить заказ'
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['step'])
    },

    methods: {
      ...mapMutations('checkout', ['setStep']),

      returnToPrev () {
        this.setStep(this.stepNumber - 1)
      },

      complete () {
        console.log('complete the order')
      }
    }
  }
</script>

<style lang="stylus">

</style>
