import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';


test('Renders search component correctly', () => {
  const component = renderer.create(
    <Search change={function(){}} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});