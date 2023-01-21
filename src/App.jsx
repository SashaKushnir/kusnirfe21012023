import './App.css';
import {Widget} from "./components/widget/Widget";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = () => {

    return (
        <Provider store={store}>
            <div className="App">
                <Widget/>
            </div>
        </Provider>

    );
}
