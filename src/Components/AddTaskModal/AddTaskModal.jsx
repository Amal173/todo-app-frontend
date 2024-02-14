import React from 'react'
import './AddTaskModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { showtaskmodal, taskType } from '../../Redux/taskSlice'
function AddTaskModal() {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(showtaskmodal(false))
    }


    // const { } = useSelector((state) => state.task)
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit =async (data) => {
        console.log(data);
       await dispatch(taskType(data))
        handleCloseModal()
    }

    return (
        <div className='add-task-modal'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title">
                    <h1>Add new block</h1>
                </div>
                <div className="inputs">
                    <input type="text" {...register("title")} />
                    <select name="" id="" {...register("taskType")}>
                        <option value="task">Task</option>
                        <option value="group task">Group Tasks</option>
                    </select>
                </div>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCloseModal}>cancel</button>
            </form>
        </div>
    )
}

export default AddTaskModal