import { useState } from 'react';
import UserList from './UserList';
import User from './type';
import ReactPaginate from 'react-paginate';

type Props = {
    users: User[];
}

const Pagination = (props: Props) => {
    const { users } = props;

    const itemsPerPage = 6;

    const [itemsOffset, setItemsOffset] = useState(0);

    const endOffset = itemsOffset + itemsPerPage;

    const currentUsers = users.slice(itemsOffset, endOffset); 

    const pageCount = Math.ceil(users.length / itemsPerPage);

    const handlePageClick = (e: { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % users.length;
        setItemsOffset(newOffset);
    }

    return (
        <div>
            <UserList users={users} currentUsers={currentUsers} />
            <ReactPaginate pageCount={pageCount} onPageChange={handlePageClick} />
        </div>);
};

export default Pagination;