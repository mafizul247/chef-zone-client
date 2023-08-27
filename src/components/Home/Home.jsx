import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../Chefs/Chefs';
import LatestRecipe from './LatestRecipe';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);
    useTitle('Home')

    return (
        <div>
            <Banner />
            <div className='container'>
                <div className='mt-4 text-center'>
                    <h2>Bangladeshi Chef</h2>
                    <h4>The Numbers of Chef {chefs.length}</h4>
                </div>
                <div className='row row-cols-1 row-cols-md-2 g-4 mb-4 mt-2'>
                    {
                        chefs.map(chef => <Chefs key={chef.id} chef={chef} />)
                    }
                </div>
            </div>
            <LatestRecipe />
        </div>
    );
};

export default Home;