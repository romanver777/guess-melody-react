import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WellcomeScreen from './wellcome-screen';

Enzyme.configure({adapter: new Adapter()});

it(`Wellcome - button clicked`, () => {

  const clickHandler = jest.fn();
  const wellcome = shallow(<WellcomeScreen
    time={0}
    mistakes={0}
    onClick={clickHandler}
  />);

  const startButton = wellcome.find(`button`);
  startButton.simulate(`click`, {
    preventDefault: () => {},
  });

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
