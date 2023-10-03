import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Bujet = () => {
    const {budget} = useContext(AppContext);
    return (
        <div  className='alert alert-secondary d-flex justify-content-between align-items-center'>
            <span>Budget: GHC {budget}</span>
            <button className='btn btn-primary'>Edit</button>
        </div>
    );
}

export default Bujet;
