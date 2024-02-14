import React, { useState } from 'react'
import './AddTasks.css'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { showSecurityModal, showtaskmodal } from '../../Redux/taskSlice'
import AddTaskModal from '../AddTaskModal/AddTaskModal'
import SecurityPinModal from '../SecurityPinModal/SecurityPinModal'

function AddTasks() {
    const dispatch = useDispatch()
    const [data, setData] = useState({ list: { title: "", task: "" } })

    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = async () => {
        dispatch(showSecurityModal(true))

    }
    const { showAddTaskModal, showSecurityPinModal, taskType } = useSelector((state) => state.task)

    console.log("++", taskType ? taskType : null);
    const handleAddTask = () => {
        dispatch(showtaskmodal(true))
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Task Manager</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='add-tasks'>
                    {
                        taskType?.map((task) => (
                            <div className="tasks">
                                <input type="text" value={task.title}  {...register("title")} />
                                <textarea name="" id="" cols="30" rows="10"  {...register("task")}></textarea>
                            </div>
                        ))
                    }
                </div>
                <div className="buttons">
                    <button type='button' onClick={handleAddTask}>add task</button>
                    <button type='submit'>save</button>
                </div>
            </form>
            {showAddTaskModal && <AddTaskModal />}
            {showSecurityPinModal && <SecurityPinModal data={data} />}
        </div>
    )
}

export default AddTasks