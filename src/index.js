import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';
import tracks from './mocks/tracks';
import getQuests from './helpers/helpers';
import {reducer} from './reducer';

const gameSettings = {
  gameTime: 5,
  maxMistakes: 3,
  numberQuests: 10,
};

const init = (props) => {

  const {gameTime, maxMistakes, numberQuests} = gameSettings;
  const quests = getQuests(props, numberQuests);
  const store = createStore(reducer);

  ReactDom.render(
    <Provider store={store}>
      <App
        time={gameTime}
        maxMistakes={maxMistakes}
        quests={quests}
      />
    </Provider>,
    document.getElementById(`root`)
  );
};

init(tracks);
