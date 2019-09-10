import React from 'react'
import './calender.css'
import {connect} from 'react-redux'
import { createSlot, updateSlot } from '../../store/actions/slotActions'


class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      status:'AÇIK',
      sdate:'',
      stime:'',
      stype:'1v1',
    };
    this.state.sdate = this.props.sdate;
    this.state.stime = this.props.stime;
    this.handleClick = this.handleClick.bind(this);
    
  } 

	handleClick(e) {

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    this.state.isToggleOn ? this.setState({status:"KAPALI"}) :  this.setState({status:'AÇIK'}) // this.state.status='KAPALI': this.state.status='AÇIK';
    //this.state.uid = this.state.sdate + this.state.stime
    this.state.isToggleOn ? this.props.updateSlot(this.state) : this.props.createSlot(this.state) 
    console.log(this.state);
	}

  render() {

    return (
      
      <button 
      style={{background: this.state.isToggleOn ? '#4dff4d' : '#ffff80', width: '100%', height: '20px', 
      justifyContent:'center', verticalalign:'middle', fontsize:'8px', padding:'0 0 0 0', margin: '0 0 0 0', 
      border:'none', color:'black', 
      fontface:'verdana' }}  
      onClick={this.handleClick}
      src={this.props.sdate}>
        {this.state.isToggleOn ? 'AÇIK' : 'KAPALI'}
      </button>
    );
  }
}


const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    createSlot:(slot)=>dispatch(createSlot(slot)),
    updateSlot:(slot)=>dispatch(updateSlot(slot))

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Toggle)
