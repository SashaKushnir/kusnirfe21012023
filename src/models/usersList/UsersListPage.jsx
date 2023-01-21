import {clearUserItemState, userItemSelector} from "./userItemSlice";
import {useDispatch, useSelector} from "react-redux";
import './userItemStyles.css'
import {useEffect} from "react";

export const UserItemPage = () => {
    const userItem = useSelector(userItemSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(clearUserItemState())
        }
    }, [])
    return <div>

    </div>
}