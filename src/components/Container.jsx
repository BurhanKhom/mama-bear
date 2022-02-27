import React, { useState } from 'react';
import '../styles/container.css';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Item } from './Item';
import axios from 'axios';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import Skeleton from './Skeleton';
import { Spinner } from './Spinner';

const Container = () => {
    const [input, setInput] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState({});
    const [loadingRecipes, setLoadingRecipes] = useState(false);
    const [loadingInstructions, setLoadingInstructions] = useState(false);

    let handleChange = (e) => {
        setInput(e.target.value);
    };

    let searchRecipes = async () => {
        if (input.trim() !== '') {
            setLoadingRecipes(true);
            let response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${input}&key=9cb7dfe9-d2d7-4eef-991f-f8d1c717307f`);
            setRecipes(response.data.data.recipes);
            setTimeout(() => {
                setLoadingRecipes(false);
            }, 1000);
        }
    };

    return (
        <div className="container">
            <nav className="navbar">
                <img src={logo} className="logo" alt="Mama bear Logo" loading='lazy' />
                <input
                    value={input}
                    type="text"
                    placeholder="Search over 1,000,000 recipes..."
                    className="search-box"
                    onChange={handleChange}
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            searchRecipes();
                        }
                    }}
                />
                <button className="search-button" onClick={searchRecipes}>
                    Search
                </button>
                <div className="nav-item">
                    <span>
                        {/* <FontAwesomeIcon icon={faHeart} className="fav-icon" />&nbsp; FAVOURITES */}
                    </span>
                </div>
            </nav>
            <div className="main-content">
                {
                    loadingRecipes ? (
                        <Spinner />
                    ) : (
                        <div className="search-results">
                            {recipes.map((recipe) => {
                                return <Item recipe={recipe} key={recipe.id}
                                    setSelectedRecipe={setSelectedRecipe}
                                    setLoadingInstructions={setLoadingInstructions}
                                    selectedRecipe={selectedRecipe} />;
                            })}
                        </div>
                    )
                }
                {loadingInstructions === true ? (<>
                    <Skeleton />
                </>) : selectedRecipe.id !== undefined ? (
                    <div className="description">
                        <div className="recipe-grid">
                            <div className='recipe-card'>
                                <div className='img-circle' style={{
                                    zIndex: '2',
                                }}>
                                    <img src={selectedRecipe.image_url} alt="" className="card-item-image" loading='lazy' style={{
                                        backgroundColor: 'white'
                                    }} />
                                </div>
                                <div className='card-content'>
                                    <span style={{
                                        backgroundColor: 'white',
                                        top: '30%', left: '10%', fontWeight: '900', opacity: '100em',
                                        wordWrap: 'break-word'
                                    }}>{selectedRecipe.title}</span>
                                    <hr style={{
                                        borderStyle: 'ridge', borderBlockColor: 'rosybrown'
                                    }} />
                                    <div style={{
                                        fontSize: '14px', marginTop: '15%', marginLeft: '15%'
                                    }}>
                                        <span>
                                            <FontAwesomeIcon icon={faClock} /> &nbsp;{selectedRecipe.cooking_time} minutes
                                        </span><br /><br />
                                        <span>
                                            <FontAwesomeIcon icon={faUserGroup} /> &nbsp; Serves {selectedRecipe.servings}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='recipe-ingr'>
                                <span style={{
                                    fontWeight: '900', fontSize: '18px', color: '#5d4037',
                                    wordWrap: 'break-word'
                                }}>Ingredients</span>
                                <ul style={{
                                    color: '#5d4037', fontWeight: 'bold', letterSpacing: '1px', lineHeight: '200%'
                                }}>
                                    {
                                        selectedRecipe.ingredients.map(ingr => {
                                            return <li>{ingr.quantity} {ingr.description}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="how-to">
                            <span style={{
                                padding: '2%', color: '#5d4037', fontSize: '18px', fontWeight: 'bold',
                                letterSpacing: '1px'
                            }}>
                                How To Cook It?
                            </span>
                            <span style={{
                                padding: '2%', color: '#5d4037', fontSize: '14px', fontWeight: 'bold',
                                letterSpacing: '1px'
                            }}>
                                This recipe was carefully designed and tested by All Recipes. Please check out directions at their website.
                            </span>
                            <button onClick={() => window.open(selectedRecipe.source_url)} className='search-button'>Directions</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <h3 style={{
                            marginLeft: '12%',
                            padding: '10%',
                            color: '#5d4037', fontWeight: 'bold', letterSpacing: '1px'
                        }}>Start by searching for a recipe or an ingredient.</h3>
                    </>
                )
                }
            </div>
        </div>
    );
};

export default Container;
