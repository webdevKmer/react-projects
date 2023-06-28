import React from 'react';

const List = ({name, age, image}) => {
  return (
    <>
      <div className="person">
        <img src={image} alt="person photo" />
        <div>
        <h4>{name}</h4>
        <p>{age} years old</p>
        </div>
      </div>
    </>
  );
};

export default List;
