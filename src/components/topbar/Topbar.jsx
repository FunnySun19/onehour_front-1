import React from 'react'
import "./topbar.css"
import Logo from "../../assets/img/logo.png"
import { DatePicker, Select } from 'antd';
import Menu from "../../assets/img/menu.png"
import { Link } from "react-router-dom";
import moment from 'moment/moment';

export default function (props) {
  const { RangePicker } = DatePicker;
  
  const onChangeRange = (dates, dateStrings) => {
    if (dates) {
        console.log(encodeURIComponent(moment(dateStrings[0], 'DD/MM/YYYY HH').format()));
        console.log(encodeURIComponent(moment(dateStrings[1], 'DD/MM/YYYY HH').format()))
    } else {
        console.log(null);
        console.log(null);
    }
};

  const handleSelect = (value,name) =>{
    props.setData([]);
    props.setParams(prev =>{
      const copy = {...prev};
      copy[name] = value;
      return copy;
    })
  }



  return (
    <div className="topbar-container">
        <div className="logo-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={Logo} alt="" className='logo-img'/>
        </Link>
        </div>
        {props.status === "show" &&  <div className="button-container">
              <RangePicker
                size="large"
                className='date-selector'
                format="DD/MM/YYYY HH:00" 
                disabledDate={current => current < moment().add(-1, 'days')}
                showTime={{ format: "HH"}}
                onChange={onChangeRange} />
            
              <Select  placeholder="Select City" name="city" onChange={(value)=>handleSelect(value,"city")} 
              className='city-selector'size='large' showSearch
             options={[
                {
                  value: 'Krusevac',
                  label: 'Krusevac',
                },
                {
                  value: 'Ivanovo',
                  label: 'Ivanovo',
                }
              ]}/>
            <Select    placeholder="Select Type" className='type-selector'size='large'options={[
                {
                  value: 'Type 1',
                  label: 'Type 1',
                },
                {
                  value: 'Type 2',
                  label: 'Type 2',
                }
              ]}/>
        </div>}
       
    </div>
  )
}
