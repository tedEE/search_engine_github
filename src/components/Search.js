import React from 'react'
import {connect} from "react-redux";
import ResultCard from './ResultCard'


class Search extends React.Component {

    onChangeInput =(e)=>{
        this.props.addUrl(e.target.value);
        this.props.addElm()
    }

    render(){
        return (
            <div>
                <input type="text" onBlur={(e)=>this.onChangeInput(e)}/>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addUrl : (subject)=>dispatch({type: "ADD_NAME", payload : subject}),
        addElm : ()=>dispatch({type: "FETCH_REQUESTED"})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);




// chengisUrl = async (subject) => {
//    // const data = `https://api.github.com/search/repositories?q=${subject}`;
//     const api_url = await fetch(`https://api.github.com/search/repositories?q=${subject}`);
//     const data = await api_url.json();
//     console.log(data);
//     // this.setState({})
// // .items[0].stargazers_count
// }

