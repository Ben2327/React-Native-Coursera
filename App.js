import React from 'react';
// import Main from './nav';
import Main from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

//import Division from './screen';

export default class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
}

