import {setUserItem} from "../userItem/userItemSlice";
import {useDispatch} from "react-redux";
import './usersListStyles.css'

export const User = ({user, setCurrentlyOpenedPage}) => {
    const dispatch = useDispatch()

    const openUserPage = () => {
        dispatch(setUserItem(user))
        setCurrentlyOpenedPage('item')
    }
    return <div className={'userItemWrapper'} onClick={openUserPage}>
        <div className={'userInfoWrap'}>
            <img src={'/foto/' + user.photo} className={'usersPhoto'} alt={'user photo'}/>
            <div className={'namesWrap'}>
                <span className={"userListName"}>{user.name}</span>
                <span className={"userListNickname"}>{user.nickname}</span>
            </div>
            </div>
        <div className={'viewUserButtonWrapper'}>
            <button className={"viewUserButton"}>
                View
            </button>
        </div>
    </div>
}