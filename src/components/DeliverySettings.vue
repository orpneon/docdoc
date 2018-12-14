<template>
  <v-layout :class="b({}, 'row wrap')">
    <v-flex :class="b('field', 'xs12 sm4 px-2')">
      <p :class="b('field-label')">{{ locale.country.label }}</p>
      <v-autocomplete
        v-model="delivery.country"
        :items="locale.country.items"
        :placeholder="locale.country.placeholder"
        :error-messages="$v.delivery.country.$dirty ? vErrors.delivery.country : []"
        :no-data-text="locale.country.emptyText"
        @blur="$v.delivery.country.$touch()"
        solo
      />
    </v-flex>

    <v-flex
      v-for="(field, fieldName) in locale.fields"
      :key="fieldName"
      :class="b('field', field.classes)"
      px-2
    >
      <p :class="b('field-label')">{{ field.label }}</p>
      <v-text-field
        v-model="delivery[fieldName]"
        :placeholder="field.placeholder"
        :error-messages="$v.delivery[fieldName].$dirty ? vErrors.delivery[fieldName] : []"
        :mask="field.mask"
        @blur="$v.delivery[fieldName].$touch()"
        return-masked-value
        solo
      />
    </v-flex>
  </v-layout>
</template>

<script>
  import { minLength, maxLength, required } from 'vuelidate/lib/validators'
  import countries from '@/store/data/countries'
  import vErrors from '@/mixins/vErrors'
  import { mapGetters } from 'vuex'

  export default {
    name: 'delivery-settings',
    mixins: [vErrors],

    data () {
      return {
        locale: {
          country: {
            label: 'Страна',
            placeholder: 'Россия',
            emptyText: 'Страна не найдена',
            items: countries
          },
          fields: {
            city: {
              label: 'Город',
              placeholder: 'Москва',
              classes: 'xs12 sm4',
              component: 'v-text-field'
            },
            index: {
              label: 'Индекс',
              placeholder: '398000',
              mask: '######',
              classes: 'xs12 sm4',
              component: 'v-text-field'
            },
            address: {
              label: 'Адрес',
              placeholder: 'г. Москва, ул. Космонавтов, 14/5',
              classes: 'xs12',
              component: 'v-text-field'
            },
            date: {
              label: 'Дата доставки',
              placeholder: '24/12/2018',
              mask: '##/##/####',
              classes: 'xs12',
              component: 'v-text-field'
            }
          }
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['delivery'])
    },

    validations () {
      return {
        delivery: {
          country: {
            required
          },
          city: {
            required,
            maxLength: maxLength(255)
          },
          index: {
            required,
            maxLength: maxLength(6),
            minLength: minLength(6)
          },
          address: {
            required,
            maxLength: maxLength(255)
          },
          date: {
            required,
            minLength: minLength(8)
          }
        }
      }
    },

    methods: {
      checkValidity () {
        this.$v.$touch()
      },

      resetValidity () {
        this.$v.$reset()
      },

      isValid () {
        return !this.$v.delivery.$invalid
      }
    }
  }
</script>

<style lang="stylus">
  .delivery-settings
    width 100%

    &__field-label
      font-weight bold
</style>
