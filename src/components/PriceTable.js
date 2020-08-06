import React from 'react';
import Table from 'react-bootstrap/Table'
import stockXLogo from '../images/stockx.png'
import goatLogo from '../images/goat.png'
import flightClubLogo from '../images/flightclub.png'
import stadiumGoodsLogo from '../images/stadiumgoods.png'

const PriceTable = (props) =>{
    const sizes = new Set([ '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5']);
    var shoeSizes;
    let sneaker = props.sneaker;
    var resellPrices = props.sneaker.resellPrices;

    for (var size in resellPrices?.stockX) {
        sizes.add(size);
    }
    for (var size in resellPrices?.flightClub) {
        sizes.add(size);
    }
    for (var size in resellPrices?.goat) {
        sizes.add(size);
    }
    for (var size in resellPrices?.stadiumGoods) {
        sizes.add(size);
    }
    shoeSizes = Array.from(sizes).sort(function (a, b) {
        return a - b;
    });
    console.log(sneaker)
    var isMinPrice = (price, size) => {
        var prices = [resellPrices?.stockX&&resellPrices?.stockX[size], resellPrices?.flightClub&&resellPrices?.flightClub[size], resellPrices?.goat&&resellPrices?.goat[size], resellPrices?.stadiumGoods&&resellPrices?.stadiumGoods[size]]
        prices = prices.filter(item => item);
        if (price == Math.min.apply(Math, prices)) {
            console.log('fsdklajf')
            return 'min-price';
        }
    }

    return(
<div class='table-card scroll-bar'>
    <Table responsive>
        <thead>
            <tr>
                <th>US Size</th>
                {Array.from(shoeSizes).map((size, index) => (
                <th key={index}> {size} </th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                <td onClick={()=> {window.open(sneaker.resellLinks?.stockX)}}><img src={stockXLogo}></img></td>
                {Array.from(shoeSizes).map((size, index) => (

                <td key={index}> {resellPrices?.stockX&&resellPrices?.stockX[size] ? <a
                        class={resellPrices?.stockX&&isMinPrice(resellPrices?.stockX[size], size)}
                        href={sneaker.resellLinks?.stockX} target="_blank">${resellPrices.stockX[size]} </a>: '--'}</td>
                ))}
            </tr>
            <tr>
                <td onClick={()=> {sneaker.resellLinks?.flightClub &&
                    window.open(sneaker.resellLinks?.flightClub)}}><img src={flightClubLogo}></img></td>
                {Array.from(shoeSizes).map((size, index) => (
                <td key={index}>{resellPrices?.flightClub && resellPrices?.flightClub[size] ? <a
                        class={resellPrices?.flightClub&&isMinPrice(resellPrices?.flightClub[size],
                        size)}href={sneaker.resellLinks?.flightClub}
                        target="_blank">${resellPrices.flightClub[size]}</a>: '--'}</td>
                ))}
            </tr>
            <tr>
                <td class='goat-row' onClick={()=> {sneaker.resellLinks?.goat &&
                    window.open(sneaker.resellLinks?.goat)}}><img src={goatLogo}></img></td>
                {Array.from(shoeSizes).map((size, index) => (
                <td key={index}> {resellPrices?.goat &&resellPrices?.goat[size] ? <a
                        class={resellPrices?.goat&&isMinPrice(resellPrices?.goat[size],
                        size)}href={sneaker.resellLinks?.goat} target="_blank">${resellPrices.goat[size]} </a>: '--'}
                </td>
                ))}
            </tr>
            <tr>
                <td onClick={()=> {sneaker.resellLinks?.stadiumGoods &&
                    window.open(sneaker.resellLinks?.stadiumGoods)}}><img src={stadiumGoodsLogo}></img></td>
                {Array.from(shoeSizes).map((size, index) => (
                <td key={index}> {resellPrices?.stadiumGoods &&resellPrices?.stadiumGoods[size] ? <a
                        class={resellPrices?.stadiumGoods&&isMinPrice(resellPrices?.stadiumGoods[size],
                        size)}href={sneaker.resellLinks?.stadiumGoods}
                        target="_blank">${resellPrices.stadiumGoods[size]} </a>: '--'}</td>
                ))}
            </tr>
        </tbody>
    </Table>
</div>
    )
}

export default PriceTable