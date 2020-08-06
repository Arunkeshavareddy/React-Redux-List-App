let listDataId = 0
const listData = {
  lists: [
    {
      id: listDataId,
      listName: 'testData',
      items: [
        { 
          id: listDataId,
          item: 'No data added yet....Just testing is going on' 
        }
      ]
    }
  ]
}
const appListReducer = (state = listData, action) => {
  let oldListData = [];
  let lists = state.lists;
  //Add List Name
  if (action.type === 'addListName' && !!action.listName) {
    listDataId++
    let newList = {
      id: listDataId,
      listName: action.listName,
      items: []
    }
    oldListData = [...state.lists, newList];
    state.lists = oldListData
    return {
      lists: oldListData
    }
  }
  //Delete List
  if (action.type === 'deleteListName' && !!action.id) {
    // let lists = state.lists;
    oldListData = lists.filter( list => list.id !== action.id)
    return {
      lists: oldListData
    }
  }
  //Add List Item's
  if( action.type === 'addListItems' && !!action.listDetails){
    listDataId++
    let itemData = action.listDetails;
    let itemsList = lists.filter( list => list.listName === itemData.listName)
    let newItem = {
      id: listDataId,
      item: itemData.listItems,
    }
    let items = itemsList[0].items
    itemsList[0].items = [ ...items, newItem];
    state.lists = lists
    return {
      lists: lists
    }
  }
  //Delete Item
  if( action.type === 'deleteListItems' && !!action.listDetails){
    let itemData = action.listDetails;
    let itemsList = lists.filter( list => list.listName === itemData.listName)
    let items = itemsList[0].items.filter( item => item.item !== itemData.listItems)
    itemsList[0].items = [ ...items];
    state.lists = lists
    return {
      lists: lists
    }
  }
  console.log('storage State  ' + JSON.stringify(state.lists));
  return state
}

export default appListReducer;