import React from "react";
import "./App.css";

import Routes from './routes';

const App = () => <Routes />;

/*
2º forma de fazer
function App(){
  return <Main/>
}; 

1º forma de fazer
class App extends Component {
  render() {
    return <Main />;
  }
}
*/

export default App;
