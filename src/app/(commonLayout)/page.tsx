"use client"

import React from 'react';
import Banner from '@/components/Common/Home/Banner';
import { ServiceHighlights } from '@/components/Common/Home/service-highlights';
import { PromotionalBanners } from '@/components/Common/Home/promotional-banners';
import { ShopByCategory } from '@/components/Common/Home/shop-by-category';
import { LimitedOfferProducts } from '@/components/Common/Home/limited-offer-products';
import Popularproducts from '@/components/Common/Home/popular-products';
import FeaturedProduct from '@/components/Common/Home/FeaturedProduct';
import { CustomerReviews } from '@/components/Common/Home/customer-reviews';
import SignupPopup from '@/components/Common/Home/SignupPopup';
import { FloatingCartButton } from '@/components/Common/Home/floating-cart-button';

const Home = () => {
    
    return (
        <div >
         <Banner/>
         <div className='w-[90%] mx-auto'>
         <ServiceHighlights/>
         <PromotionalBanners/>
         <ShopByCategory/>
         <LimitedOfferProducts/>
         <Popularproducts/>
         <FeaturedProduct/>
         <CustomerReviews/>
         <SignupPopup/>
         </div>
            {/* <FloatingCartButton/> */}
            <FloatingCartButton/>

        </div>
    );
};

export default Home;