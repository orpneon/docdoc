import { setupTest } from '@root/tests/utils/setup-test'
import Home from '@/views/Home.vue'

const { shallow } = setupTest()
const getWrapper = () => shallow(Home)

describe('Home.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(className).length).toBe(1)
  })

  it('Check of child components rendering', () => {
    const wrapper = getWrapper()
    const className = `.${wrapper.vm.$options.name}`

    expect(wrapper.findAll(`${className}__header`).length).toBe(1)
    expect(wrapper.findAll(`${className}__checkout`).length).toBe(1)
    expect(wrapper.findAll(`${className}__status-model`).length).toBe(0)
  })
})
