import React from 'react'

const FavoriteCard = (props) => {
      var price = parseFloat(props.productPrice);
      price = price.toFixed(2)
      return (
        <tr>
          <td className="shoping__cart__item">
            <img src={props.imgPath} alt="" />
            <h5>{props.productName}</h5>
          </td>
          <td className="shoping__cart__price">${price}</td>
          <td style={{textAlign: "center"}}>   
                <button className='btnn third'> ADD TO CART</button>
          </td>

          <td className="shoping__cart__item__close">
            <span className="icon_close" />
          </td>
        </tr>
      );
 
    
    
}

export default FavoriteCard