import React from 'react';
import {connect} from 'react-redux';
import Search from './components/Search'
import ResultCard from "./components/ResultCard";

class App extends React.Component{

    render() {
        return (
            <div className={'wrapper'}>
                <Search></Search>
                <div className={'result_cards'}> { this.props.flag ? <ResultCard/> : null } </div>

            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        flag : state.flag
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
