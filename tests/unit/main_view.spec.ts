import { mount } from '@vue/test-utils'
import MainView from '../../src/views/MainView.vue';
import { describe, expect, test } from 'vitest'

describe('MainView', () => {
  test('rendering', () => {
    const wrapper = mount(MainView);
    expect(wrapper.text()).toMatch('Explore Ionic Docs');
  });
});
