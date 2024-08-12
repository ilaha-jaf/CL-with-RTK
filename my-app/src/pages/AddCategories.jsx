import React, { useState } from 'react';
import { useAddCategoryMutation } from '../redux/apislice';
import { useNavigate } from 'react-router-dom';

const AddCategories = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [addCategory] = useAddCategoryMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCategory({ name,description });
        navigate('/');
    };

    

    return (
        <div>
            <h1>Add Category</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCategories;
