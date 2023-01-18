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

  return (
    <div className="topbar-container">
        <div className="logo-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
        <img src={Logo} alt="" className='logo-img'/>
        </Link>
        </div>
        {props.status === "show" &&  <div className="button-container">
<<<<<<< HEAD
              <RangePicker
                size="large"
                className='date-selector'
                renderExtraFooter={() => 'Press OK to confirm'}
                format="DD/MM/YYYY HH:00" 
                showTime={{ format: "HH"}}
                onChange={onChangeRange} />
            
=======
             <RangePicker 
                className='date-selector' 
                size='large' 
                format="DD/MM/YYYY HH:00" 
                showTime={{ format: "HH"}} 
                onChange={onChangeRange} />

>>>>>>> be25515b18c25a0cce8cee581258d20ddc6f97aa
              <Select  placeholder="Select City"  className='city-selector'size='large' showSearch
             options={[
                {
                  value: 'Beograd',
                  label: 'Beograd',
                },
                {
                  value: 'Ivanovo',
                  label: 'Ivanovo',
                }
              ]}/>
            <Select    placeholder="Select Type"className='type-selector'size='large'options={[
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
