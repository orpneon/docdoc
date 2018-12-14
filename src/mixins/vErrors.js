import { template } from 'underscore'

export default {
  data () {
    return {
      errors: {
        required: 'Это поле обязательное',
        email: 'Неверный формат, введите корректный email-адрес',
        maxLength: 'Максимальная длина поля - <%= max %>'
      }
    }
  },

  computed: {
    vErrors () {
      if (!this.$v) {
        return {}
      }

      const paramsExtractor = params => {
        let newParams = {}

        if (params) {
          Object.keys(params).map(key => {
            if (params[key] instanceof Object) {
              newParams = {
                ...params[key],
                ...newParams
              }
            } else {
              newParams[key] = params[key]
            }
          })
        }

        return newParams
      }
      const result = {}
      const walker = (target, res, parent_key) => {
        const t = target[parent_key]
        const r = res[parent_key]

        Object.keys(t)
          .filter(key => key[0] !== '$' || key === '$each')
          .map(key => {
            if (t[key] instanceof Object) {
              if (key === '$each') {
                r[key] = []
              } else {
                r[key] = {}
              }

              walker(t, r, key)
            } else {
              const params = t.$params

              if (!(res[parent_key] instanceof Array)) {
                res[parent_key] = []
              }

              if (!t[key]) {
                const tmp = template(this.errors[key])
                res[parent_key].push(tmp(paramsExtractor(params[key])))
              }
            }
          })
        }

      walker({ a: this.$v }, { a: result }, 'a')

      return result
    }
  }
}
