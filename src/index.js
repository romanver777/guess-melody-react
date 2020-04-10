import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import gameData from './mocks/question';

const init = (props) => {

  const {time, mistakes, quests} = props;

  ReactDom.render(
      <App
        time={time}
        mistakes={mistakes}
        quests={quests}
      />,
      document.getElementById(`root`)
  );
};

init(gameData);
