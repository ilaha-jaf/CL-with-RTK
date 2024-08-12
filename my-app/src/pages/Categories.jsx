import React from 'react';
import {useState} from 'react'
import { useGetCategoriesQuery, useDeleteCategoryMutation, useAddToFavoritesMutation} from '../redux/apislice';
import { Link } from 'react-router-dom';
import { addFavorite } from '../redux/favoritesSlice';
import { addToBasket} from '../redux/basketSlice';

import { FaInfoCircle, FaEdit, FaRegHeart } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';

import { MdDelete } from 'react-icons/md';
import "./Categories.css"
const Categories = () => {
    const { data: categories, error, isLoading,favorites,refetch } = useGetCategoriesQuery();
    const [deleteCategory] = useDeleteCategoryMutation();

    const dispatch = useDispatch();
    const handleDelete = async (id) => {
        try {
            await deleteCategory(id).unwrap();
            refetch();
        } catch (err) {
            console.error('Failed to delete category: ', err);
        }
    };



    const handleAddBasket = (item) => {
        dispatch(addToBasket(item));
    };


    const handleAddFavorite = (item) => {
        dispatch(addFavorite(item));
    };



    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Categories</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Details</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Basket</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                            <td><Link to='/info' state={{ name: category.name, description: category.description }}><FaInfoCircle /></Link></td>
                            <td onClick={() => handleDelete(category.id)}><MdDelete /></td>
                            <td><Link to={`/edit/${category.id}`}><FaEdit /></Link></td>
                            <td onClick={() => handleAddBasket(category)}><SlBasket /> </td>
                            <td onClick={() => handleAddFavorite(category)}><FaHeart /></td>                       
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Categories;
