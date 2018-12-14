<template>
  <v-stepper-content
    :class="b()"
    :step="stepNumber"
  >
    <v-form>
      <v-container>
        <v-layout
          row
          wrap
        >

          <v-flex :class="b('field', 'xs12')">
            <v-radio-group v-model="delivery.type">
              <v-radio
                v-for="type in delivery.types"
                :key="type"
                :label="locale.fields.types[type]"
                :value="type"
              />
            </v-radio-group>
          </v-flex>

          <delivery-settings
            v-if="showDeliverySettings"
            ref="deliverySettings"
          />

          <v-flex xs12>
            <p :class="b('field-label')">{{ locale.fields.description.label }}</p>
            <v-textarea
              v-model="delivery.description"
              no-resize
              solo
            />
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>

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
  import DeliverySettings from '@/components/DeliverySettings'

  export default {
    name: 'checkout-step-two',
    components: { DeliverySettings },

    data () {
      return {
        stepNumber: 2,
        locale: {
          returnButton: 'Вернуться',
          completeButton: 'Оформить заказ',
          fields: {
            types: {
              courier: 'Доставка',
              pickup: 'Самовывоз'
            },
            description: {
              label: 'Комментарий к заказу'
            }
          }
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['step', 'delivery', 'loading']),

      showDeliverySettings () {
        return this.delivery.type === 'courier'
      }
    },

    methods: {
      ...mapMutations('checkout', ['setStep', 'clearAddress']),
      ...mapActions('checkout', ['complete']),

      returnToPrev () {
        this.clearAddress()
        this.setStep(this.stepNumber - 1)
      },

      completeTheOrder () {
        const deliverySettings = this.$refs.deliverySettings

        if (deliverySettings) {
          deliverySettings.checkValidity()
        }

        if (!deliverySettings || deliverySettings.isValid()) {
          this.complete()
        }
      }
    }
  }
</script>

<style lang="stylus">
  .checkout-step-two
    &__field-label
      font-weight bold

</style>
