import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import {TiDelete} from 'react-icons/ti';

const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext);

    const handleDeleteExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div className='d-flex justify-content-between ml-3'>
                <span style={{color: 'black', backgroundColor: ''}} className='mr-2'>GHC {props.cost}</span>
                <TiDelete onClick={handleDeleteExpense} style={{marginLeft: '20px'}} size='1.5em'/>
            </div>
        </li>
    );
}

export default ExpenseItem;
