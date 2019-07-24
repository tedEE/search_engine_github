import React from 'react'
import {connect} from "react-redux";

class ResultCard extends React.Component {
    // name-ссылка,  stargazers_count , watchers_count , html_url

    render(){
        return(
            this.props.elem.map((el, i)=>{
                return( <div className={'card'} key={i}>
                            <h3><a target={'_blank'} href={el.html_url}>{el.full_name}</a></h3>
                            <p>Количество звезд : {el.stargazers_count}</p>
                            <p>количество подписчиков : {el.watchers_count}</p>
                        </div>)}

                )
         )
    }
}

function mapStateToProps(state) {
    return {
        name : state.name,
        elem : state.elem
    }
}

export default connect(
    mapStateToProps
)(ResultCard);
