import React, {useContext, useState} from 'react';
import {AppContext} from '../Context/AppContext';
import {v4 as uuidv4} from 'uuid';


const AddExpense = () => {
    const {dispatch} = useContext(AppContext);

    const [name, setName] = useState ('');
    const [cost, setCost] = useState ('');

    const onSubmit = (e) => {
        e.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    return (
        <form onSubmit={onSubmit} >
            <div className='row mt-3'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input onChange={(e)=> setName(e.target.value)} className='form-control' required='required' type='text' id='name' value={name}></input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input onChange={(e)=> setCost(e.target.value)} className='form-control' required='required' type='text' id='cost' value={cost}></input>
                </div>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-4'>Save</button>
                </div>
            </div>
        </form>
    );
}

export default AddExpense;
