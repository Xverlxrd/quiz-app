import { SET_PAGE } from "@/Components/redux/actions/actionsTypes/actionsTypes";

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page,
    };
};