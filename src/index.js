import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import tracks from './mocks/tracks';
import getQuests from './helpers/helpers';

const init = (props) => {

  const time = 5;
  const mistakes = 3;
  const numberQuests = 4;
  const quests = getQuests(props, numberQuests);

  ReactDom.render(
      <App
        time={time}
        mistakes={mistakes}
        quests={quests}
      />,
      document.getElementById(`root`)
  );
};

init(tracks);
