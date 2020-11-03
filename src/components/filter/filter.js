import React, {useState} from "react";
import './filter.css';
import SearchIcon from '@material-ui/icons/Search';
import DateIcon from '@material-ui/icons/DateRange';
import CategoryIcon from '@material-ui/icons/Category';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function Filter (props){
    const [selectDate, setselectDate] = useState(null) 
    return (
        <div className="filter">
            <div className="conatiner">
                <div className="filterInner">
                    <div className="filterItem">
                        <input className="searchText" type="text" placeholder="Поиск"></input>
                        <SearchIcon className="filterIcon"/>
                    </div>
                    <div className="filterItem">
                        <DatePicker selected={selectDate} onChange={date => setselectDate(date)} minDate={new Date()} />
                        <DateIcon className="filterIcon"/>
                    </div>
                    <div className="filterItem">
                        <input className="categoryText" type="slect" placeholder="Категория"></input>
                        <CategoryIcon className="filterIcon"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Filter;