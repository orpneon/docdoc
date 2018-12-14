<template>
  <v-stepper-content
    :class="b()"
    :step="stepNumber"
  >
    <v-card/>

    <v-btn
      @click="returnToPrev"
      color="primary"
      :disabled="loading"
    >
      {{ locale.returnButton }}
    </v-btn>

    <v-btn
      @click="completeTheOrder"
      color="primary"
      :loading="loading"
    >
      {{ locale.completeButton }}
    </v-btn>


  </v-stepper-content>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

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
      ...mapGetters('checkout', ['step', 'loading'])
    },

    methods: {
      ...mapMutations('checkout', ['setStep']),
      ...mapActions('checkout', ['complete']),

      returnToPrev () {
        this.setStep(this.stepNumber - 1)
      },

      completeTheOrder () {
        this.complete()
      }
    }
  }
</script>

<style lang="stylus">

</style>
