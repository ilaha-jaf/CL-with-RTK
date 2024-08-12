import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery, useUpdateCategoryMutation } from '../redux/apislice';
import "./EditCategory.css"
const EditCategory = () => {
    const { id } = useParams();
    const { data: categories } = useGetCategoriesQuery();
    const [updateCategory] = useUpdateCategoryMutation();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const category = categories?.find((cat) => cat.id === id);
        if (category) {
            setName(category.name);
            setDescription(category.name);
        }
    }, [categories,id, name,description]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateCategory({ id,name, description });
        navigate('/');
    };

    return (
        <div>
            <h1>Edit Category{id}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditCategory;
