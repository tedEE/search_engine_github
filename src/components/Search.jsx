// @flow
import React from 'react';
import {connect} from "react-redux";
import {debounce} from "lodash"

type Props = {
    bad_name: boolean,
    addUrl : any,
    addElm : any,
    badName : any,
};

class Search extends React.Component<Props>{


    onChangeInput = debounce((value)=>{
        value = value.replace(/^\s+|\s+$/g, '')
        if (value === '' ) {
            this.props.badName()
        }else{
            this.props.addUrl(value);
            this.props.addElm()
        }
    }, 1000)

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
        addUrl : (subject)=>dispatch({type: "ADD_NAME", payload : subject}),
        addElm : ()=>dispatch({type: "FETCH_REQUESTED"}),
        badName : ()=>dispatch({type: 'BAD_NAME'})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

