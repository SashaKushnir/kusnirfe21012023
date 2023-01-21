import {useDispatch, useSelector} from "react-redux";
import './usersListStyles.css'
import {useEffect, useState} from "react";
import {clearUsersListState, expandUsersList, setDefaultUsersList, usersListSelector} from "./usersListSlice";
import {User} from "./User";
import {initialData} from '../../initData.js'

export const UsersListPage = ({setCurrentlyOpenedPage}) => {
    const usersListData = useSelector(usersListSelector)

    const dispatch = useDispatch()
    const users = usersListData.map((u, index) => <User key={index} user={u} setCurrentlyOpenedPage={setCurrentlyOpenedPage}/>)
    const [isExpanded, setIsExpanded] = useState(false)
    useEffect(() => {
        dispatch(setDefaultUsersList(initialData.slice(0,3)))
        return () => {
            dispatch(clearUsersListState())
        }
    }, [])

    const viewAllUsers = () => {
        dispatch(expandUsersList(initialData.slice(3)))
        setIsExpanded(true)
    }

    return <div>
        <div className={"usersListWrapper"} style={{height: isExpanded ? '100%' : '75%'}}>
            {users}
        </div>
        {!isExpanded && <div className={"viewAllButtonWrap"}>
            <button className={'viewAllButton'} onClick={viewAllUsers}>
                View All
            </button>
        </div>}
    </div>
}