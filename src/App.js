import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h3>I Love Potato({name})</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'http://img.choroc.com/newshop/goods/024444/024444_1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image:'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
    rating: 4.9,
  },
];  //food_i_like(FIL)

//93page
function App() { 
  return ( 
    <div>
      <h1>Hello!!!!</h1> 
      {foodILike.map( dish => (<Food key={dish.id} 
      name={dish.name} picture={dish.image} rating={dish.rating} />))} 
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;

