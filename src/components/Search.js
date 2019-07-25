// @flow
import React from 'react';
import {connect} from "react-redux";
import {debounce} from "lodash"

type Props = {
    bad_name: boolean,
    addUrl : Function,
    addElm : Function,
    badName : Function,
};

type addUrlAction = { type: "ADD_NAME",subject : number };
type addElmlAction = { type: "FETCH_REQUESTED"};
type badNameAction = { type: "BAD_NAME", value : boolean};

type Action =
    | addUrlAction
    | addElmlAction
    | badNameAction;

class Search extends React.Component<Props>{


    onChangeInput = debounce((value)=>{
        value = value.replace(/^\s+|\s+$/g, '')
        if (value === '' ) {
            this.props.badName(true)
        }else{
            this.props.addUrl(value);
            this.props.addElm()
        }
    }, 700)

    render(){
        return (
            <div className={'search'}>
                <h1 className={'search__title'}>Поиск по github</h1>
                <input className={'search__input'} type="text" onChange={(e)=>this.onChangeInput(e.target.value)}/>
                {/*<input className={'search__input'} type="text" onBlur={(e)=>this.onChangeInput(e)}/>*/}
                { this.props.bad_name ? <p>Введите имя репозитория</p> : null }
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        bad_name : state.bad_name,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUrl : (subject:number):addUrlAction => dispatch({type: "ADD_NAME", payload : subject}),
        addElm : ():addElmlAction=>dispatch({type: "FETCH_REQUESTED"}),
        badName : (value):badNameAction=>dispatch({type: 'BAD_NAME', payload : value })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

