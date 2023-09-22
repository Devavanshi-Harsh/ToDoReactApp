import ToDos from './components/ToDos';
import style from './App.css'
import ShowToDos from './components/ShowToDos';
import { Provider } from 'react-redux';
import store from './components/store/Store';
import Headers from './components/Headers';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Headers />
        <ShowToDos />
      </div>
    </Provider>
  );
}

export default App;