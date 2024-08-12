import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../redux/favoritesSlice';
import "./Favorites.css"
const Favorites = () => {
    const favoriteItems = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const handleRemoveFavorite = (item) => {
        dispatch(removeFavorite(item));
    };

    return (
        <div className="add-container">
           <h2>Favorites</h2>
            {favoriteItems.length > 0 ? (
                <div>
                    {favoriteItems.map((item) => (
                        <li key={item.id}>
                        {item.name} - {item.description}
                        <button onClick={() => handleRemoveFavorite(item)}>Remove</button>
                      </li>
                    ))}
                </div>
            ) : (
                <div>
                    No Favorite Items Found
                </div>
            )}
        </div>
    );
};

export default Favorites;
