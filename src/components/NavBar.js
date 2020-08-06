import React, { Component } from 'react';
import './NavBar.css';
import { connect } from 'react-redux'

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listName: ''
        }
    }

    handleListName = (event) => {
        event.preventDefault()
        this.setState({
            listName: event.target.value
        })
    }

    saveListName = (event) => {
        event.preventDefault();
        // console.log('props: ' + JSON.stringify(this.props))
        if ( window.location.pathname !== '/') {
            let listDetails ={
                listName : window.location.pathname.split("/")[1],
                listItems : this.state.listName
            }
            this.props.addListItems(listDetails)
        } else {
            this.props.addList(this.state.listName);
        }
        this.setState({
            listName: ''
        })
    }


    render() {
        console.log('props: ' + JSON.stringify(this.props))
        console.log('listData: ' + JSON.stringify(this.props.listData.lists))
        return (
            <div>
                <div className="tableList">
                    <nav className="navbar">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href='/'>ListApp</a>
                            </div>
                            <form className="navbar-form" onSubmit={this.saveListName}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter List Name ..." value={this.state.listName} onChange={this.handleListName} />
                                </div>
                                <button className="btn" type="submit">Save <i className="fa fa-save"></i></button>
                            </form>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listData: state.appList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (listName) => { dispatch({ type: 'addListName', listName }) },
        addListItems: (listDetails) => { dispatch({ type: 'addListItems', listDetails }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);