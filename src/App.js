import { store } from "./store/store";
import { Provider } from "react-redux";
import { Header, About } from "./containers/";
import { Skills } from "./containers/Skills/Skills";
import { Projects } from "./containers/Projects/Projects";
import { Contact } from "./containers/Contact/Contact";

export const App = () => {
  return (
    <Provider store={store}>
      <div id="app">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Provider>
  );
};
