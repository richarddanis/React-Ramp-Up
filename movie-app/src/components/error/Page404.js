import React from 'react';
import NetflixRouletteName from '../util/NetflixRouletteName';
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom';

const Page404 = () => {
    return(
        <div style={{height: '90vh'}} className=" uk-background-cover uk-container-expand uk-background-muted background-color-grey">
            <div className="uk-container" style={{height: '100%'}}>
            <NetflixRouletteName/>
            <h1 className="color-white uk-text-light">Page Not Found</h1>
            <img data-src="" width="" height="" alt="" uk-img/>
            <Link class="color-salmon-border uk-button uk-button-default color-salmon uk-border-rounded" to='/'>
                Go back to home page
            </Link>
            </div>
            <Footer/>
        </div>
    );
};

 export default Page404;