import { setupTest, generateStore } from '@root/tests/utils/setup-test'
import StepperHeader from '@/components/StepperHeader.vue'
import CheckoutModule from '@/store/modules/Checkout'

const { shallow } = setupTest()

const getWrapper = () => shallow(StepperHeader, {
  store: generateStore({
    'checkout': CheckoutModule
  })
})

describe('StepperHeader.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className)).toHaveLength(1)
  })

  it('Check of child components rendering', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(`${className}__step-one`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__divider`)).toHaveLength(1)
    expect(wrapper.findAll(`${className}__step-two`)).toHaveLength(1)
  })

  it('Check of stepping', async () => {
    const wrapper = getWrapper()
    const className = `${wrapper.vm.$options.name}`
    const stepOneClasses = wrapper.find(`.${className}__step-one`).classes()

    expect(stepOneClasses).toContain(`${className}__step-one--active`)

    wrapper.vm.$store.commit('checkout/setStep', 2)
    await wrapper.vm.$nextTick()

    const stepTwoClasses = wrapper.find(`.${className}__step-two`).classes()
    expect(stepTwoClasses).toContain(`${className}__step-two--active`)
  })
})
