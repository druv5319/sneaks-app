
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'
import ImgCarousel from './ImgCarousel';
import PriceTable from './PriceTable';
import Spinner from 'react-bootstrap/Spinner'

const ProductCard = (props) => {
    const [loading, setLoading] = useState(true);
    const [sneaker, setSneaker] = useState({});

    useEffect(() => {
        setSneaker(props.sneaker)
        if(Object.keys(sneaker).length != 0){
            setLoading(false);
        }
    }, );

    return(
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <div class="procard">
            <nav class='header'>
              <svg class="arrow" version="1.1" viewBox="0 0 512 512" width="512px"
                onClick={props.onHide}xmlns="http://www.w3.org/2000/svg">
                <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " stroke="#727272" /></svg>
              <div style={{cursor:"pointer"}} onClick={props.onHide}> BACK TO ALL SHOES </div>
              <svg class="heart" version="1.1" viewBox="0 0 512 512" width="512px" stroke="#727272"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
                  stroke="#727272" />
              </svg>
            </nav>
            <div class="photo">
              {loading ? <div class="spinner">
                <Spinner animation="border" variant="secondary" role="status"></Spinner>
              </div>
              :<ImgCarousel sneaker={sneaker} imageClass={props.imageClass} image={props.image}></ImgCarousel>}
            </div>
            <div class="description">
              <h2>{props.name}</h2>
              {props.minPrice?<div>
                <div class='from-text'>From</div>
                <div class='card-price'>${props.minPrice} <span class='on-text'> on</span> <img class='logo'
                    src={props.logo}></img>
                  <Button onClick={()=> {window.open(props.minPriceLink, '_blank')}} class='buy-button'
                    variant="secondary" size="lg">
                    Visit site
                  </Button></div>
              </div>:
              <div>Not Available</div>}

              <Tabs defaultActiveKey="description">
                <Tab class="about" eventKey="description" title="About">
                  <div class='about'>
                    {props.description}
                  </div>

                </Tab>
                <Tab class="pull-right" eventKey="details" title="Details">
                  <div class='left-col'>
                    <ul class='details'>
                      <li><span class='tag'>Make:</span> {sneaker.make}</li>
                      <li><span class='tag'>Colorway:</span> {sneaker.colorway}</li>
                      <li><span class='tag'>Style ID:</span> {sneaker.styleID}</li>
                      <li><span class='tag'>Release Date:</span> {sneaker.releaseDate}</li>
                      <li><span class='tag'>Retail Price:</span> ${sneaker.retailPrice}.00</li>
                    </ul>

                  </div>
                  <div class='right-col'>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div class='price-table'>
              {loading ? <div class="spinner">
                <Spinner animation="border" variant="secondary" role="status"></Spinner>
              </div>
              :<PriceTable sneaker={sneaker}></PriceTable>}
            </div>
          </div>
        </Modal>

    )
}

export default ProductCard;