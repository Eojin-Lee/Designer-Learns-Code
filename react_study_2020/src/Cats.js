import React from 'react';
import PropTypes from 'prop-types';

// jsx (html + js)
function HelloCats({name, image, age}) {
    return (
      <div>
        <img src={image} alt={name} width="320px"/>
        <h3>{name} is {age} years old.</h3>
      </div>
    );
  }
  
HelloCats.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

// data array with object{prop}
const catProfileList = [
  {
    id: 1,
    name: "Kong",
    image: "assets/image/cat_01.jpg",
    age: 3
  },
  {
    id: 2,
    name: "Leo",
    image: "assets/image/cat_02.jpg",
    age: 1
  },
  {
    id: 3,
    name: "Jump",
    image: "assets/image/cat_03.jpg",
    age: 6
  },
  {
    id: 4,
    name: "ChoonJang",
    image: "assets/image/cat_04.jpg",
    age: 4
  }
]

// parent component
function Cats() {
  return (
    <div className="Cats">
      <h1>Cuty Cats are So Adorable!</h1>
    {catProfileList.map(profile => (
      <HelloCats key={profile.id} name={profile.name} image={profile.image} age={profile.age} />
    ))}
    {console.log("Nice to meet you, Cyber Cat Owner!")}
    </div>
  );
}

// don't forget to write this code below!
export default Cats;