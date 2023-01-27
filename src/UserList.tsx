import { useState } from 'react';
import User from './type';

type Props = {
    users: User[];
    currentUsers: User[];
}

const UserList = (props: Props) => {
    // why {} needs here
    const { users, currentUsers } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>body</th>
                    <th>id</th>
                    <th>title</th>
                    <th>userId</th>
                </tr>
            </thead>
            <tbody>
                {currentUsers.map((user) => {
                    return (<tr key={user.id}>
                            <td>{user.body}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                             <td>{user.userId}</td>
                        </tr>
                        );
                })}
            </tbody>
        </table>
    );
};

export default UserList;