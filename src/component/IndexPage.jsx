import React from 'react';
import '../styles/card.css'
import Card from '../component/Card/Card';

const IndexPage =()=> (
  <div>
    <head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    </head>
    <div className="flex">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
)

export default IndexPage; 
