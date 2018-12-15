import { setupTest, generateStore, timeout } from '@root/tests/utils/setup-test'
import CheckoutStatus from '@/components/CheckoutStatus.vue'
import CheckoutModule from '@/store/modules/Checkout'

const { shallow } = setupTest()

const getWrapper = () => shallow(CheckoutStatus, {
  store: generateStore({
    'checkout': CheckoutModule
  }),
  mocks: {
    watch: {}
  }
})

describe('CheckoutStatus.vue', () => {
  it('Check if component is hidden after rendered', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className)).toHaveLength(1)
    expect(wrapper.vm.show).toBeFalsy()
    expect(wrapper.vm.success).toBeFalsy()
    expect(wrapper.vm.message).toBe('')
    expect(wrapper.vm.icon).toBe('')
  })

  it('Check of child components rendering', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(`${className}__card`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__result-icon`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__message`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__actions`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__action-btn`)).toHaveLength(1)
  })

  it('Open success window', async () => {
    const wrapper = getWrapper()

    wrapper.vm.$store.commit('checkout/setStatus', true)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.show).toBeTruthy()
    expect(wrapper.vm.success).toBeTruthy()
    expect(wrapper.vm.message).toBe(wrapper.vm.locale.success)
    expect(wrapper.vm.icon).toBe(wrapper.vm.icons.success)
  })

  it('Open failure window', async () => {
    const wrapper = getWrapper()

    wrapper.vm.$store.commit('checkout/setStatus', false)
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.show).toBeTruthy()
    expect(wrapper.vm.success).toBeFalsy()
    expect(wrapper.vm.message).toBe(wrapper.vm.locale.failure)
    expect(wrapper.vm.icon).toBe(wrapper.vm.icons.failure)
  })
})
