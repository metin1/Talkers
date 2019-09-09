import React from 'react'
import Toggle from './Toggle'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Moment from 'moment'

const divStyle = {
  paddind:"1px:1px:1px:1px",
  margin:"0"
};
const timeLine = [
'00:00-00:25','00:30-00:55','01:00-01:25','01:30-01:55','02:00-02:25','02:30-02:55','03:00-03:25','03:30-03:55','04:00-04:25','04:30-04:55',
'05:00-05:25','05:30-05:55','06:00-06:25','06:30-06:55','07:00-07:25','07:30-07:55','08:00-08:25','08:30-08:55','09:00-09:25','09:30-09:55',
'10:00-10:25','10:30-10:55','11:00-11:25','11:30-11:55','12:00-12:25','12:30-12:55','13:00-13:25','13:30-13:55','14:00-14:25','14:30-14:55',
'15:00-15:25','15:30-15:55','16:00-16:25','16:30-16:55','17:00-17:25','17:30-17:55','18:00-18:25','18:30-18:55','19:00-19:25','19:30-19:55',
'20:00-20:25','20:30-20:55','21:00-21:25','21:30-21:55','22:00-22:25','22:30-22:55','23:00-23:25','23:30-23:55'];
const Calender=(props)=> {
  const date = new Date();

  const {auth}=props;
  if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="container">
          <div className="row" style={divStyle}>
            <div className="col s2 offset-s1"> <span class="flow-text"></span></div>
            <div className="col s1" id={Date()}><span>{Moment().subtract(10, 'days').calendar()}</span></div> 
            {/* <div className="col s1" id={<Moment add={{ days: 1 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 1 }}>{date}</Moment>}</span></div> */}
            {/* <div className="col s1" id={<Moment add={{ days: 2 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 2 }}>{date}</Moment>}</span></div>
            <div className="col s1" id={<Moment add={{ days: 3 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 3 }}>{date}</Moment>}</span></div>
            <div className="col s1" id={<Moment add={{ days: 4 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 4 }}>{date}</Moment>}</span></div>
            <div className="col s1" id={<Moment add={{ days: 5 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 5 }}>{date}</Moment>}</span></div>
            <div className="col s1" id={<Moment add={{ days: 6 }}>{date}</Moment>}><span class="flow-text">{<Moment add={{ days: 6 }}>{date}</Moment>}</span></div>*/}
          </div> 
        {timeLine.map(tl=>{
        return(
          <div>
          <div className="row" style={divStyle}>
            <div className="col s2 offset-s1"> <span class="flow-text" id={tl}>{tl}</span></div>
            <div className="col s1 " id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {Date()}/></div> 
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 1 }}>{date}</Moment>} /></div>
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 2 }}>{date}</Moment>} /></div>
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 3 }}>{date}</Moment>} /></div>
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 4 }}>{date}</Moment>} /></div>
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 5 }}>{date}</Moment>} /></div>
            <div className="col s1" id={tl.substring(0,4)}><Toggle time = {tl.substring(0,4)} date = {<Moment add={{ days: 6 }}>{date}</Moment>} /></div>
          </div>
          <div class="divider" style={divStyle}></div>
          </div>
        )})}   
      </div>
    )
  }
const mapStateToProps=(state)=>{
  //console.log(state);
    return{
      auth:state.firebase.auth,
    }
  }
  
export default connect(mapStateToProps) (Calender)