import React from 'react';
import { data } from "../restApi.json";
import { Link } from "react-scroll";
//import { useLocation } from "react-router-dom";

const Adv = () => {
    //const reservationLink = data[0].navbarLinks.find(element => element.id === 5);

    

  return (
    <div className='adv'>
        {data[0].navbarLinks
  .filter((element) => element.id === 5)
  .map((element) => (
    <Link
      to={element.link}
      spy={true}
      smooth={true}
      duration={500}
      key={element.id}
    >
      <h4>Hurry!! Up,Click here, to do the Reservation</h4>
    </Link>
))}

    </div>
  )
}

export default Adv