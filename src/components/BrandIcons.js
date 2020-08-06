
import stockXLogo from '../images/stockx.png'
import goatLogo from '../images/goat.png'
import flightClubLogo from '../images/flightclub.png'
import stadiumGoodsLogo from '../images/stadiumgoods.png'
import React from 'react';


const BrandIcons = () => {
    return (
        <div class="icon-container">
						<div class="icon-bar" >
							<a class="logo" data-swiper-autoplay="2000">
                                <img class="" src={stockXLogo} ></img>

							</a>
							<a class="logo" data-swiper-autoplay="2000" >
								<img class="" src={goatLogo}></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
								<img class="" src={stadiumGoodsLogo} ></img>
							</a>
							<a  class="logo" data-swiper-autoplay="2000" >
                                <img class="" src={flightClubLogo }></img>
							</a>
						</div> 
					</div>
                    



    );

}
export default BrandIcons;