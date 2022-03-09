import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map ((person)=>{
        const {id, name, age, image,} = person;
        return <article key={id} className="person">
         <img src = {image} alt="person's image"></img>
         <div>
         <h3>{name}</h3>
         <p>{age} years</p>
         </div>

       </article>
     
    })}
    </>
  );
};

export default List;
