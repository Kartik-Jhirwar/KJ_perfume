import React from 'react'
import "../HomePageCard/HomePageCard.css";
import { Link } from 'react-router-dom';


 export const HomePageCard = ({Item}) => {
  return (   
              <div className="card-for-ecommerce pd-1">
                <div className="card-image-holder">
                  <img src={Item.image} className="card-image" />
                </div>

                <div className="card-body">
                  <Link to="">
                    <span className="card-title card-title-pink">
                      {Item.subtitle}
                    </span>
                  </Link>
                </div>
              </div>            
  )
}


