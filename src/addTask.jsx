import react, { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title ||!time) {
            alert('Please enter all the fields');
            return;
        }
        onAdd({ id: Date.now(), title, time });
        setTitle('');
        setTime('');
    };
    return (
        <form onSubmit={handleSubmit}>
        <input type = "text" placeholder = "Title" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
        <input type = "time" placeholder = "Time" value = {time} onChange = {(e) => setTime(e.target.value)}/>
        <button type = "submit">AddTask</button>
        </form>
    )

};

export default AddTask;

