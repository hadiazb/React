// const element = document.createElement('h1');
// element.innerHTML = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);
// const jsx = <h1>Hello, Platzi Badges from React!</h1>
// const element = React.createElement(
//   'a', 
//   {href: 'https://google.com'}, 
//   'Ir a google'
//   )
// const element = React.createElement(
//   'h1',
//   {},
//   `Hola, soy ${name} ${lastname}`
// )
// const jsx = <h1>Hola, soy {name} {lastname}</h1>

// const name = 'Hugo Andrés';
// const lastname = 'Diáz Bernal';

// const element = (
//   <div>
//     <h1>Hola, soy {name} {lastname}</h1>
//     <p>Soy ingeniero Mecánico con pasión por la programación</p>
//   </div>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';



const container = document.getElementById('app');
// ReactDOM.render(__que__, __donde__);
ReactDOM.render(
<BadgeNew
  
  />, 
  container
  );