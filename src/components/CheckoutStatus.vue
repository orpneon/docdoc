<template>
  <v-dialog
    :class="b()"
    persistent
    :value="show"
    width="500"
  >
    <v-card>

      <v-card-title>
        <v-icon>
          {{ icon }}
        </v-icon>
      </v-card-title>

      <v-card-text>
        {{ message }}
      </v-card-text>

      <v-divider/>

      <v-card-actions>
        <v-spacer/>
        <v-btn
          @click="clearStatus(false)"
          color="primary"
        >
          {{ locale.btn }}
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-dialog>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'checkout-status',

    data () {
      return {
        locale: {
          success: 'Заказ успешно отправлен.',
          failure: 'Произошла ошибка при отправке заказа. Пожалуйста, повторите позже.',
          btn: 'OK'
        },

        icons: {
          success: 'sentiment_satisfied',
          failure: 'sentiment_very_dissatisfied'
        }
      }
    },

    computed: {
      ...mapGetters('checkout', ['status']),

      show () {
        return !!this.status
      },

      message () {
        const msg = this.locale[this.status]
        return msg || ''
      },

      icon () {
        const icon = this.icons[this.status]
        return icon || ''
      }
    },

    methods: {
      ...mapMutations('checkout', ['clearStatus'])
    }
  }
</script>

<style lang="stylus">

</style>
