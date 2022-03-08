import { store } from "./store/store";
import { Provider } from "react-redux";
import { Header, About } from "./containers/";
import { Skills } from "./containers/Skills/Skills";

export const App = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <Header />
        <About />
        <Skills />
      </div>
    </Provider>
  );
};
