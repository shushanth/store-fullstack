import { Provider } from 'react-redux';
import rootStore from './store/rootStore';
import './App.css';
import Pages from './pages/Page';

const App = () => {
  return (
    <Provider store={rootStore}>
      <Pages />
    </Provider>
  );
};

export default App;
