import { setupTest, generateStore } from '@root/tests/utils/setup-test'
import Checkout from '@/components/Checkout.vue'
import CheckoutModule from '@/store/modules/Checkout'

const { shallow } = setupTest()

const getWrapper = () => shallow(Checkout, {
  store: generateStore({
    'checkout': CheckoutModule
  })
})

describe('Checkout.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className)).toHaveLength(1)
  })

  it('Check of child components rendering', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(`${className}__header`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__step-one`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__step-two`)).toHaveLength(1)
  })
})
