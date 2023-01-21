import './App.css';
import {Widget} from "./components/widget/Widget";
import {UsersListPage} from "./models/usersList/UsersListPage";
import {useState} from "react";
import {UserItemPage} from "./models/userItem/UserItemPage";

function App() {

    const [currentlyOpenedPage, setCurrentlyOpenedPage] = useState('list')

    const getCurrentPage = () => {
        switch (currentlyOpenedPage) {
            case 'list':
                return <UsersListPage setCurrentlyOpenedPage={setCurrentlyOpenedPage}/>
            case 'item':
                return <UserItemPage setCurrentlyOpenedPage={setCurrentlyOpenedPage}/>
            default:
                return <div>Unknown Page</div>
        }
    }

    return (
        <div className="App">
            <Widget>
                {getCurrentPage()}
            </Widget>
        </div>
    );
}

export default App;
