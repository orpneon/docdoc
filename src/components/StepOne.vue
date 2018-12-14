<template>
  <v-stepper-content
    :class="b()"
    :step="stepNumber"
  >
    <v-card/>

    <v-btn
      @click="nextStep"
      color="primary"
    >
      {{ locale.nextButton }}
    </v-btn>
  </v-stepper-content>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'checkout-step-one',

    data () {
      return {
        stepNumber: 1,
        locale: {
          nextButton: 'Продолжить'
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['step'])
    },

    methods: {
      ...mapMutations('checkout', ['setStep']),

      nextStep () {
        this.setStep(this.stepNumber + 1)
      }
    }
  }
</script>

<style lang="stylus">

</style>
