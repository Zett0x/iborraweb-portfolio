import { store } from "./store/store";
import { Provider } from "react-redux";
import { Header, About } from "./containers/";

export const App = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <Header />
        <About />
      </div>
    </Provider>
  );
};
