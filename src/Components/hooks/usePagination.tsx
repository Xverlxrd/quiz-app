import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/paginationActions';

const usePagination = (totalItems, itemsPerPage = 1) => {
    const currentPage = useSelector((state: { pagination: { currentPage: number } }) => state.pagination.currentPage);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const dispatch = useDispatch();

    const handlePageChange = (page) => {
        dispatch(setPage(page));
    };

    return { currentPage, pageSize: itemsPerPage, totalPages, handlePageChange };
};

export default usePagination;