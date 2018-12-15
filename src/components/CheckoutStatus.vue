<template>
  <v-dialog
    :class="b()"
    :value="show"
    persistent
    width="500"
  >
    <v-card :class="b('card')">

      <v-card-title :class="b('result-icon', 'pa-0 pt-4')">
        <v-icon x-large>
          {{ icon }}
        </v-icon>
      </v-card-title>

      <v-card-text :class="b('message')">
        {{ message }}
      </v-card-text>

      <v-divider/>

      <v-card-actions
        v-if="!success"
        :class="b('actions')"
      >
        <v-spacer/>
        <v-btn
          :class="b('action-btn')"
          @click="clearStatus()"
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
        },

        allowedStatuses: ['success', 'failure']
      }
    },

    computed: {
      ...mapGetters('checkout', ['status']),

      show () {
        return !!this.status && this.allowedStatuses.includes(this.status)
      },

      message () {
        const msg = this.locale[this.status]
        return msg || ''
      },

      icon () {
        const icon = this.icons[this.status]
        return icon || ''
      },

      success () {
        return this.status === 'success'
      }
    },

    watch: {
      show () {
        if (this.success) {
          setTimeout(() => window.location.reload(), 2000)
        }
      }
    },

    methods: {
      ...mapMutations('checkout', ['clearStatus'])
    }
  }
</script>

<style lang="stylus">
  .checkout-status
    &__card
      text-align center
      font-size 16px

    &__result-icon
      justify-content center
</style>
