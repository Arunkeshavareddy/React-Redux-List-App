import React, {useState, useEffect} from 'react';
import './ListDetails.css';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function ListDetails(props) {
    const [listName, setListName] = useState('')
    const [items, setItems] = useState([])
    const listData = useSelector(state => state.appList);
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteListName = (item) => {
        let listDetails ={
            listName : listName,
            listItems : item
        }
        dispatch({ type: 'deleteListItems', listDetails })
    }

    function extractListItems(){
        let itemsList = listData ? listData.lists.filter(list => list.listName === listName) : '';
        let items = itemsList && !!itemsList[0].items ? itemsList[0].items : [];
        setItems(items)
    }

    function goBack(){
        history.push('/')
    }

    useEffect(() => {
        setListName(props.match.params.listName);
        // function getListItemsData(){
        //     dispatch({ type: 'getListItems', listName });
        // }
        // getListItemsData();
        // setItems(listData.lists)
        if(!!listData && !!listName){
        extractListItems()
        }
    }, [ props.match.params.listName, listName, dispatch, listData] )

    return (<div>
        <h1 className=" listName" ><button className="backBtn" onClick={goBack} type="button">❮-- Back</button>{listName}</h1>
        {items.length ? items.map(item =>
            <div className='tableView' key={item.id} > {item.item}<span onClick={() => { deleteListName(item.item) }} className="glyphicon glyphicon-trash deleteIcon"></span></div>

        ) : (<p>No Items Added yet...</p>)}
    </div>)
}

export default ListDetails