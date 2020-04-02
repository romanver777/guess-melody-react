import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`App renders`, () => {
  const tree = renderer
        .create(<App
          time={0}
          mistakes={0}
          onClick={jest.fn()}
        />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
