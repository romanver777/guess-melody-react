import React from 'react';
import renderer from 'react-test-renderer';
import WellcomeScreen from './wellcome-screen';

it(`Wellcome renders`, () => {
  const tree = renderer.create(<WellcomeScreen
    time={0}
    mistakes={0}
    onClick={() => {}}
  />)
                .toJSON();

  expect(tree).toMatchSnapshot();
});
