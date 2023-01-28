/* eslint-disable import/no-anonymous-default-export */
import './checkout.css';
import Topbar from '../../components/topbar/Topbar';
import { IoIosArrowBack } from 'react-icons/io';
import { DatePicker } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import { useState } from 'react';
import { addRent } from '../../features/backendRoutes/rentSlice';
import Input from '../../components/Input/Input';
import { toast } from 'react-toastify';

export default function () {
  const [hours, setHours] = useState(0);
  const [dateRange, setDateRange] = useState([]);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [state, setState] = useState({});
  const [values, setValues] = useState({
    last_name: '',
    first_name: '',
    phone: '',
    email: '',
  });
  let isFormValid = true;

  const space = useSelector((state) => state.space.singleSpace);

  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  const { RangePicker } = DatePicker;

  const onChangeRange = (dates, dateStrings) => {
    if (dates) {
      setDateFrom(
        encodeURIComponent(moment(dateStrings[0], 'DD/MM/YYYY HH').format())
      );
      setDateTo(
        encodeURIComponent(moment(dateStrings[1], 'DD/MM/YYYY HH').format())
      );
      let date_from = new Date(
        moment(dateStrings[0], 'DD.MM.YYYY HH').format('YYYY, MM, DD, HH:00')
      );
      let date_to = new Date(
        moment(dateStrings[1], 'DD.MM.YYYY HH').format('YYYY, MM, DD, HH:00')
      );
      function diffDates(date_to, date_from) {
        return (date_from - date_to) / 1000 / 3600;
      }
      setHours(diffDates(date_from, date_to));
    } else {
      setHours(0);
    }
  };

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  const totalCost = space.price * hours;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const { value, name } = e.target;
    setState((prev) => {
      const copy = { ...prev };
      copy[name] = value;
      return copy;
    });
  };
  const validateForm = () => {
    isFormValid = true;
    Object.values(values).forEach((value) => {
      if (value === '') {
        isFormValid = false;
        return;
      }
    });
  };

  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm();
    if (!isFormValid || dateRange.length === 0) {
      toast.warn('Please fill all fields!');
    } else {
      const resp = await dispatch(
        addRent({
          ...state,
          space_id: id,
          datetime_from: dateFrom,
          datetime_to: dateTo,
        })
      );
      if (resp.meta.requestStatus === 'fulfilled') {
        toast.success('Successfully booked the space');
        navigate('/');
      }
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'last_name',
      type: 'text',
      errorMessage:
        "Surname should be 3-16 characters and shouldn't include any special character!",
      label: 'Surname',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'first_name',
      type: 'text',
      errorMessage:
        "Surname should be 3-16 characters and shouldn't include any special character!",
      label: 'Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'phone',
      type: 'text',
      errorMessage: 'Please enter phone number!',
      label: 'Phone',
      pattern: '^[0-9]{6,16}$',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true,
    },
  ];

  return (
    <div className='checkout-div'>
      <Topbar />
      <div className='checkout-top'>
        <IoIosArrowBack className='back-icon' onClick={handleClick} />
        <span className='back-span' onClick={handleClick}>
          Back
        </span>
        <h2 className='checkout-h2'>Confirmation and payment</h2>
      </div>
      <div className='checkout-wrapper'>
        <div className='checkout-left'>
          <span className='booking-period-span'>Booking period</span>

          <div className='booking-period-div'>
            <RangePicker
              size='large'
              className='chechkout-date'
              renderExtraFooter={() => 'Press OK to confirm'}
              format='DD/MM/YYYY HH'
              showTime={{ format: 'HH' }}
              disabledDate={(current) => {
                let customDate = moment().format('YYYY-MM-DD');
                return current < moment(customDate, 'YYYY-MM-DD');
              }}
              onChange={onChangeRange}
              required
            />
          </div>

          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}

          <span className='cost-span'>
            Total Cost: <span className='price-span'>{totalCost}$</span>
          </span>
          <span className='price-per-day-span'>
            {space.price}$ x {hours} hours
          </span>
          <button className='confirm-btn' type='submit' onClick={handleSubmit}>
            Book Now
          </button>
        </div>

        <div className='checkout-right'>
          <h4 className='description-h4'>Description</h4>
          <p>{space.detailed_description}</p>
          <h4 className='address-h4'>Address</h4>
          <p className='address-p'>{space.address}</p>
          <MapContainer
            className='checkout-map'
            center={[44.804, 20.4651]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker
              key={space.id}
              position={[space.lat, space.lng]}
              icon={DefaultIcon}
            >
              <Popup>{space.name}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
