import { setupTest } from '@/../tests/utils/setup-test'
import App from '@/App.vue'

const { shallow } = setupTest()

describe('App.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = shallow(App)
    expect(wrapper.findAll('.main-section').length).toBe(1)
  })
})
