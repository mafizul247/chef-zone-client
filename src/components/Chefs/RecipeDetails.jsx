import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';


const RecipeDetails = () => {
    const [favorite, setFavorite] = useState(false);
    const recipeDetails = useLoaderData();
    const { chef_name, chef_picture, short_bio, likes, years_of_experience, recipe_name, ingredients, cooking_method, rating } = recipeDetails;
    const navigate = useNavigate();

    const handleFavorite = () => {
        setFavorite(!favorite);
        toast.success('Item add Favorite');
    }
    
    return (
        <div className='my-4'>
            <h2 className='text-center'>Details Recipe </h2>
            <div class="card my-3">
                <img src={chef_picture} class="card-img-top" alt={chef_name} />
                <div class="card-body">
                    <p class="card-text">{short_bio}</p>
                    <p class="m-0"><b>Likes: </b>{likes}</p>
                    <p class="card-text"><b>Years of Experience: </b>{years_of_experience} Years</p>
                    <h3>Favorite recipe</h3>
                    <p><b>Recepie Name: </b>{recipe_name}</p>
                    <div className='row row-cols-1 row-cols-md-2 g-3 g-md-5'>
                        <div>
                            <h4>Cooking Method</h4>
                            {
                                cooking_method.map((cook, index) => <div key={index}>
                                    <p className='m-0'>{cook && cook}</p>
                                </div>)
                            }
                        </div>
                        <div>
                            <h4>Ingredients:</h4>
                            {
                                ingredients.map((ingt, index) => <div key={index}>
                                    <p className='m-0'>{index + 1}. {ingt && ingt}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-2'>
                        <div className='d-flex align-items-center'>
                            <Rating style={{ maxWidth: 150 }} value={rating} readOnly /> <span className='ms-2'> {rating}</span>
                        </div>
                        <button onClick={handleFavorite} disabled={favorite} className="btn btn-primary">Favorite</button>
                    </div>
                    <div className='mt-2 text-center'>
                        <button onClick={() => navigate(-1)} className="btn btn-danger"><FaArrowLeft/> Go to Chefs</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;