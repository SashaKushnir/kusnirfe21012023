import {userItemSelector} from "./userItemSlice";
import {useDispatch, useSelector} from "react-redux";
import './userItemStyles.css'

export const UserItemPage = ({setCurrentlyOpenedPage}) => {
    const userItem = useSelector(userItemSelector)

    const openUsersListPage = () => {
        setCurrentlyOpenedPage('list')
    }

    return <div className={'userDetailsWrap'}>
        <span className={'tagRemove'} onClick={openUsersListPage}/>
        <div className={"userPhotoWrapper"}>
            <img className={'userPhoto'} src={'/foto/' + userItem.photo} alt={'user photo'}/>
            <span className={'userDetailsName'}>{userItem.name}</span>
            <span className={'userDetailsPosition'}>{userItem.position}</span>
        </div>
        <div className={'detailsWrap'}>
            <div>
                <div className={'label'}>Phone</div>
                <div>{userItem.phone}</div>
            </div>
            <div>
                <div className={'label'}>URL</div>
                <a href={'https://www.google.com/intl/ua/chrome/'}>{userItem.nickname}</a>
            </div>
            <div>
                <div className={'label'}>Email</div>
                <a>{userItem.email}</a>
            </div>

        </div>
    </div>
}