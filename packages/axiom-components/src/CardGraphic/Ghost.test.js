import React from 'react';
import renderer from 'react-test-renderer';
import Ghost from './Ghost';

const getComponent = (props = {}) =>
  renderer.create(
    <Ghost src="/image/path" { ...props } />
  );

describe('Avatar', () => {
  it('renders', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
