import React from 'react';
import './List.css';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function List(props) {
    const history = useHistory();
    const listData = useSelector(state => state.appList);
    const dispatch = useDispatch();

    const deleteListName = (id) => {
        dispatch({ type: 'deleteListName', id })
    }
    const listDetailsPage = (listName) => {
        history.push('/'+listName)
    }

    return (<div>
        {listData.lists.length ? listData.lists.map(list =>
            <div className='tableView' key={list.id} onClick={() => { listDetailsPage(list.listName) }}> {list.listName}<span onClick={() => { deleteListName(list.id) }} className="glyphicon glyphicon-trash deleteIcon"></span></div>

        ) : (<p>No List Added yet...</p>)}
    </div>)
}

export default List