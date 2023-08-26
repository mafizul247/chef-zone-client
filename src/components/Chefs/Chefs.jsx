import React from 'react';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const { id, chef_name, chef_picture, years_of_experience, number_of_recipes, likes } = chef;
    return (
        <div className="col">
            <div className="card h-100">
                <img style={{height: '300px'}} src={chef_picture} className="card-img-top" alt={chef_name} />
                <div className="card-body">
                    <h5 className="card-title">Chef Name: {chef_name}</h5>
                    <p className="card-text">Years of experience: {years_of_experience} Years</p>
                    <p className="card-text">Numbers of Recipe: {number_of_recipes}</p>
                    <p className="card-text">likes: {likes}</p>
                </div>
                <div className='mx-auto mb-2'>
                <Link to={`/recipeDetails/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;