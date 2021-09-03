import './App.css';
import Home from './component/Pages/Home';
import store from './component/Redux/Store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Home />
    </div>
    </Provider>
  );
}

export default App;
