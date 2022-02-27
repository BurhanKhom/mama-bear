import axios from 'axios'
import React from 'react'
import '../styles/item.css'

export const Item = ({ recipe, setSelectedRecipe, setLoadingInstructions, selectedRecipe }) => {

    let handleClick = async () => {
        if (selectedRecipe.id !== recipe.id) {
            selectedRecipe.id = recipe.id;
            setLoadingInstructions(true);
            let response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe.id}?key=9cb7dfe9-d2d7-4eef-991f-f8d1c717307f`);
            setSelectedRecipe(response.data.data.recipe);
            setTimeout(() => {
                setLoadingInstructions(false);
            }, 1000);
        }
    }

    return (
        <>
            {recipe && (
                <div className='item-container' onClick={handleClick}
                    style={{
                        backgroundColor: selectedRecipe.id === recipe.id ? '#efdcd5' : ''
                    }}>
                    <img src={recipe.image_url} alt="" className="item-image" />
                    <div className="item-content">
                        <div style={{ color: '#5d4037', letterSpacing: '1%', fontSize: '14px' }}>
                            <b>
                                {((recipe.title).toUpperCase()).substring(0, Math.min(20, (recipe.title).length)).trim()}
                                {recipe.title.length > 20 ? '...' : ''}
                            </b>
                        </div>
                        <span style={{ opacity: '0.8', fontSize: '12px' }}>
                            {recipe.publisher}
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}
