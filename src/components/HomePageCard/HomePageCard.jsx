import React from 'react'
import "../HomePageCard/HomePageCard.css";
import { Link } from 'react-router-dom';


 export const HomePageCard = ({userItem}) => {
  return (   
              <div className="card-for-ecommerce pd-1">
                <div className="card-image-holder">
                  <img src={userItem.image} className="card-image" />
                </div>

                <div className="card-body">
                  <Link to="">
                    <span className="card-title card-title-pink">
                      {userItem.subtitle}
                    </span>
                  </Link>
                </div>
              </div>            
  )
}


