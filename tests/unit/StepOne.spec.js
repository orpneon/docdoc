import { setupTest, generateStore } from '@root/tests/utils/setup-test'
import { toArray } from 'underscore'
import StepOne from '@/components/StepOne.vue'
import CheckoutModule from '@/store/modules/Checkout'

const { shallow } = setupTest()

const getWrapper = () => shallow(StepOne, {
  store: generateStore({
    'checkout': CheckoutModule
  })
})

describe('StepOne.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className)).toHaveLength(1)
  })

  it('Check of child components rendering', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`
    const fields = Object.keys(wrapper.vm.locale.fields).length

    expect(wrapper.findAll(`${className}__field`)).toHaveLength(fields)
    expect(wrapper.findAll(`${className}__field-label`)).toHaveLength(fields)
    expect(wrapper.findAll(`${className}__next-step-btn`)).toHaveLength(1)
  })

  describe('Check of name field validation', () => {
    it('Empty field', async () => {
      const wrapper = getWrapper()

      wrapper.vm.$v.common.$touch()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.name.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.name.required).toBeFalsy()
    })

    it('Too long value', async () => {
      const wrapper = getWrapper()
      const longString = toArray(JSON.stringify(new Date()))
        .map(() => JSON.stringify(new Date()))
        .join('')

      wrapper.vm.$store.state.checkout.common.name = longString
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.name.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.name.required).toBeTruthy()
      expect(wrapper.vm.$v.common.name.maxLength).toBeFalsy()
    })

    it('Valid value', async () => {
      const wrapper = getWrapper()
      const value = 'Ivan'

      wrapper.vm.$store.state.checkout.common.name = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.name.$invalid).toBeFalsy()
      expect(wrapper.vm.$v.common.name.required).toBeTruthy()
      expect(wrapper.vm.$v.common.name.maxLength).toBeTruthy()
    })
  })

  describe('Check of surname field validation', () => {
    it('Empty field', async () => {
      const wrapper = getWrapper()

      wrapper.vm.$v.common.$touch()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.surname.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.surname.required).toBeFalsy()
    })

    it('Too long value', async () => {
      const wrapper = getWrapper()
      const longString = toArray(JSON.stringify(new Date()))
        .map(() => JSON.stringify(new Date()))
        .join('')

      wrapper.vm.$store.state.checkout.common.surname = longString
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.surname.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.surname.required).toBeTruthy()
      expect(wrapper.vm.$v.common.surname.maxLength).toBeFalsy()
    })

    it('Valid value', async () => {
      const wrapper = getWrapper()
      const value = 'Ivan'

      wrapper.vm.$store.state.checkout.common.surname = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.surname.$invalid).toBeFalsy()
      expect(wrapper.vm.$v.common.surname.required).toBeTruthy()
      expect(wrapper.vm.$v.common.surname.maxLength).toBeTruthy()
    })
  })

  describe('Check of phone field validation', () => {
    it('Empty field', async () => {
      const wrapper = getWrapper()

      wrapper.vm.$v.common.$touch()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.phone.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.phone.required).toBeFalsy()
    })

    it('Too short value', async () => {
      const wrapper = getWrapper()
      const value = '7999999999'

      wrapper.vm.$store.state.checkout.common.phone = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.phone.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.phone.required).toBeTruthy()
      expect(wrapper.vm.$v.common.phone.minLength).toBeFalsy()
    })

    it('Valid value', async () => {
      const wrapper = getWrapper()
      const value = '79999999999'

      wrapper.vm.$store.state.checkout.common.phone = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.phone.$invalid).toBeFalsy()
      expect(wrapper.vm.$v.common.phone.required).toBeTruthy()
      expect(wrapper.vm.$v.common.phone.minLength).toBeTruthy()
    })
  })

  describe('Check of email field validation', () => {
    it('Empty field', async () => {
      const wrapper = getWrapper()

      wrapper.vm.$v.common.$touch()
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.email.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.email.required).toBeFalsy()
    })

    it('Invalid value', async () => {
      const wrapper = getWrapper()
      const value = '2@2.'

      wrapper.vm.$store.state.checkout.common.email = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.email.$invalid).toBeTruthy()
      expect(wrapper.vm.$v.common.email.required).toBeTruthy()
      expect(wrapper.vm.$v.common.email.email).toBeFalsy()
    })

    it('Valid value', async () => {
      const wrapper = getWrapper()
      const value = '2@2.com'

      wrapper.vm.$store.state.checkout.common.email = value
      wrapper.vm.$v.common.$touch()

      await wrapper.vm.$nextTick()
      expect(wrapper.vm.$v.common.email.$invalid).toBeFalsy()
      expect(wrapper.vm.$v.common.email.required).toBeTruthy()
      expect(wrapper.vm.$v.common.email.email).toBeTruthy()
    })
  })
})
