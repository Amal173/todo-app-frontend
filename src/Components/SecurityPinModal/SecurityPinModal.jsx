import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncCreateTasks, showSecurityModal } from '../../Redux/taskSlice'
import './SecurityPinModal.css'
function SecurityPinModal({ data }) {

    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(showSecurityModal(false))
    }
    const HandleCreateTask = () => {
        dispatch(fetchAsyncCreateTasks({ list: data }))
    }

    return (
        <div className='security-pin-modal'>
            <div className="title">
                <h1>Enter pin</h1>
            </div>
            <div className="inputs">
                <input type="text" />
            </div>
            <button onClick={HandleCreateTask}>Save</button>
            <button onClick={handleCloseModal}>cancel</button>
        </div>
    )
}

export default SecurityPinModal