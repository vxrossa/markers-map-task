import { mount } from '@vue/test-utils'
import MapPage from 'src/pages/MapPage.vue'

describe('MapPage', () => {
  it('should render correctly', () => {
    const wrapper = mount(MapPage)

    expect(wrapper.exists()).toBeTrue()
  })
})
