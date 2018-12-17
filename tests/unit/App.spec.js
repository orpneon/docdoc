import { setupTest } from '@root/tests/utils/setup-test'
import App from '@/App.vue'

const { shallow } = setupTest()

describe('App.vue', () => {
  it('Component has been rendered', () => {
    const wrapper = shallow(App)
    expect(wrapper.findAll('.main-section')).toHaveLength(1)
  })
})
