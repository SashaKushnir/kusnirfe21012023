import './widget.css'
import {UsersListPage} from "../../models/usersList/UsersListPage";
import {UserItemPage} from "../../models/userItem/UserItemPage";
import {useState} from "react";

export const Widget = () => {
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
    return <div className={"widgetWrap"}>
        {getCurrentPage()}
    </div>
}