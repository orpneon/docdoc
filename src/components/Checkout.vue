<template>
  <v-stepper :value="step">
    <checkout-header/>

    <v-stepper-items>
      <checkout-step-one/>
      <checkout-step-two/>
    </v-stepper-items>

  </v-stepper>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CheckoutHeader from '@/components/StepperHeader'
  import CheckoutStepOne from '@/components/StepOne'
  import CheckoutStepTwo from '@/components/StepTwo'

  export default {
    name: 'checkout',
    components: { CheckoutStepTwo, CheckoutStepOne, CheckoutHeader },

    computed: {
      ...mapGetters('checkout', ['step'])
    }
  }
</script>

<style lang="stylus">

</style>
