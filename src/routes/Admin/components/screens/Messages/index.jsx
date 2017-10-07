import React from 'react'
import {connect} from 'react-redux'
import Message from './Message/'
import './styles.scss'
import giveOrders from 'store/actions/giveOrders'

class Messages extends React.Component {
    constructor(props){
        super(props)
        this.state = {messages:this.props.messages}
    }

    componentWillReceiveProps(nextProps){
        this.setState({messages:nextProps.messages})
    }

    render(){

        if(!this.state.messages){
            return null
        }

       let keys = Object.keys(this.props.messages), 
           messagesArr = [], tamplate = [];

       messagesArr =  keys.map((item) => this.state.messages[item]);
        
       tamplate = messagesArr.map((item,i) => {
                     return(                    
                        <Message key={i} message={item} onGiveOrders={this.props.onGiveOrders}/>
                    )
                })
        return(
            <section className='messages'>
                  {tamplate}
            </section>
        )
    }
}

export default connect(
    state => ({messages:state.messages.messages}),
    dispatch => ({
        onGiveOrders : (userkey) => dispatch(giveOrders(userkey))
    })
)(Messages)