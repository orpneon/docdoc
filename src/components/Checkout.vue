<template>
  <v-stepper
    :class="b()"
    :value="step"
  >
    <checkout-header :class="b('header')"/>

    <v-stepper-items>
      <checkout-step-one :class="b('step-one')"/>
      <checkout-step-two :class="b('step-two')"/>
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
