import { mount } from '@vue/test-utils';
import SvgSprite from '@/components/SvgSprite.vue';

describe('SvgSprite.vue', () => {
  it('should renders correctly', () => {
    const wrapper = mount(SvgSprite);
    expect(wrapper.element).toMatchSnapshot();
  });
});
