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

          <v-flex
            v-for="(field, fieldName) in locale.fields"
            :key="fieldName"
            :class="b('field', field.classes)"
          >
            <p :class="b('field-label')">{{ field.label }}</p>
            <v-text-field
              v-model="common[fieldName]"
              :placeholder="field.placeholder"
              :error-messages="$v.common[fieldName].$dirty ? vErrors.common[fieldName] : []"
              :mask="field.mask"
              @blur="$v.common[fieldName].$touch()"
              return-masked-value
              solo
            />
          </v-flex>

        </v-layout>
      </v-container>
    </v-form>

    <v-btn
      @click="nextStep"
      :disabled="$v.common.$dirty && $v.common.$invalid"
      color="primary"
    >
      {{ locale.nextButton }}
    </v-btn>
  </v-stepper-content>
</template>

<script>
  import { email, maxLength, minLength, required } from 'vuelidate/lib/validators'
  import { mapGetters, mapMutations } from 'vuex'
  import vErrors from '@/mixins/vErrors'

  export default {
    name: 'checkout-step-one',
    mixins: [vErrors],

    data () {
      return {
        stepNumber: 1,
        locale: {
          nextButton: 'Продолжить',
          fields: {
            name: {
              label: 'Имя',
              placeholder: 'Иван',
              classes: 'xs12 sm6'
            },
            surname: {
              label: 'Фамилия',
              placeholder: 'Иванов',
              classes: 'xs12 sm6'
            },
            phone: {
              label: 'Телефон',
              placeholder: '+79991234567',
              mask: '+7##########',
              classes: 'xs12'
            },
            email: {
              label: 'Email',
              placeholder: 'example@example.com',
              classes: 'xs12'
            }
          }
        }
      }
    },

    validations () {
      return {
        common: {
          name: {
            required,
            maxLength: maxLength(255)
          },
          surname: {
            required,
            maxLength: maxLength(255)
          },
          phone: {
            required,
            minLength: minLength(11)
          },
          email: {
            required,
            email
          }
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['step', 'common'])
    },

    methods: {
      ...mapMutations('checkout', ['setStep']),

      nextStep () {
        this.$v.common.$touch()

        if (!this.$v.common.$invalid) {
          this.setStep(this.stepNumber + 1)
        }
      }
    }
  }
</script>

<style lang="stylus">
  .checkout-step-one
    &__field-label
      font-weight bold

    .v-input
      font-size 14px

</style>
