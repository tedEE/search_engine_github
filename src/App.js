import React from 'react';
import {connect} from 'react-redux';
import Search from './components/Search'
import ResultCard from "./components/ResultCard";

class App extends React.Component{

    render() {
        return (
            <div className={'wrapper'}>
                <Search></Search>
                <div className={'result_cards'}> { this.props.elem ? <ResultCard/> : null } </div>

            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        elem : state.elem
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
