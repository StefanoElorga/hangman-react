import { Home } from "./components/home/Home";
import { ChooseNames } from "./components/play/ChooseNames";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WriteTheWord } from "./components/play/WriteTheWord";
import { Provider } from "react-redux";
import store from "./store/store";
import { InGame } from "./components/play/InGame";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chooseNames" element={<ChooseNames />} />
          <Route path="/writeTheWord" element={<WriteTheWord />} />
          <Route path="/inGame" element={<InGame />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
