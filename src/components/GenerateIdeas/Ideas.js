import React, { useState } from 'react';

import Navbar from '../Dashboard/Navbar/Navbar';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

import './Ideas.css';

import ingredientIcon from '../../assets/ingredient.png';
import trashIcon from '../../assets/trash.png';
import searchIcon from '../../assets/search.png';
import generateIcon from '../../assets/AI.png';

const Ideas = () => {
    const pageTitle = 'AI Generate Cooking Ideas';

    const [ingredients] = useState([
        'Missing ingredients?', 'Acorn Squash', 'Acorn Squash', 'Acorn Squash',
        'Acorn Squash', 'Acorn Squash', 'Acorn Squash', 'Acorn Squash',
    ]);

    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const handleSelectIngredient = (ingredient) => {
        setSelectedIngredients([...selectedIngredients, ingredient]);
    };

    const handleRemoveIngredient = (index) => {
        const newSelectedIngredients = [...selectedIngredients];
        newSelectedIngredients.splice(index, 1);
        setSelectedIngredients(newSelectedIngredients);
    };

    const handleClearAll = () => {
        setSelectedIngredients([]);
    };

    return (
        <div className="OuterContainer">
            <Navbar title={pageTitle} />
            <div className="BodyContent">
                <Sidebar />
                <div className="MainContent">
                    <div className="ingredients-section">
                        <h2>Ingredients</h2>
                        <div className="searchbar-container">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-bar"
                            />
                            <img src={searchIcon} alt="Search" className="search-icon" />
                        </div>
                        <div className="ingredients-grid">
                            {ingredients.map((ingredient, index) => (
                                <div
                                    key={index}
                                    className="ingredient-card"
                                    onClick={() => handleSelectIngredient(ingredient)}
                                >
                                    <img src={ingredientIcon} alt={ingredient} />
                                    <span>{ingredient}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="selected-ingredients-section">
                        <h2>
                            Selected Ingredients
                            <span className='total-count'>Total: {selectedIngredients.length}</span>
                        </h2>
                        <div className="selected-ingredients-list">
                            {selectedIngredients.map((ingredient, index) => (
                                <div
                                    key={index}
                                    className="selected-ingredient-card"
                                >
                                    <span>{ingredient}</span>
                                    <img
                                        src={trashIcon}
                                        alt="Remove"
                                        onClick={() => handleRemoveIngredient(index)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="action-buttons">
                            <button className="clear-all" onClick={handleClearAll}>Clear All</button>
                            <button className="generate-ideas">
                                <img src={generateIcon} alt="Generate" className="generate-icon" />
                                Generate Cooking Ideas
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ideas;
