<template>
  <v-stepper-header :class="b({}, 'px-3')">

    <v-stepper-step
      :class="b('step-one', { active: step === 1 })"
      :complete="isCompleted(1)"
      step="1"
    >
      {{ locale.stepOne }}
    </v-stepper-step>

    <v-divider :class="b('divider')"/>

    <v-stepper-step
      :class="b('step-two', { active: step === 2 })"
      :complete="isCompleted(2)"
      step="2"
    >
      {{ locale.stepTwo }}
    </v-stepper-step>

  </v-stepper-header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'checkout-header',

    data () {
      return {
        locale: {
          stepOne: 'Основные данные',
          stepTwo: 'Адрес доставки'
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['step'])
    },

    methods: {
      isCompleted (step) {
        return this.step > step
      }
    }
  }
</script>
