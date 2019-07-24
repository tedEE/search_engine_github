import React from 'react';
import {connect} from 'react-redux';
import Search from './components/Search'
import ResultCard from "./components/ResultCard";

class App extends React.Component{

    render() {
        return (
            <div>
                <h1>Поиск по github</h1>
                <Search></Search>
                { this.props.elem ? <ResultCard/> : null }
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
