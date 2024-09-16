import React from 'react';

const CardContentSection = ({ title, description, date }) => (
  <div className='StyledCardContent'>
    <h2 className="CardText">{title}</h2>
    <p className='CardText'> {description}</p>
    <p className='DateContainer'>{date}</p>
    </div>
);

export default CardContentSection;
