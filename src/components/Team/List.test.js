import React from 'react';
import TeamList from './List';
import renderer from 'react-test-renderer';


test('Renders team list correctly', () => {
  const component = renderer.create(
    <TeamList filteredTeams={[{name: 'Blah', img: 'blah.jpg'},{name: 'Rovers', img: 'rovers.jpg'}]} teamClick={function(){}}></TeamList>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});