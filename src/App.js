import './App.css';
import React from 'react'
import {CardList} from './Components/CardList'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      frameworks :[
        {
          id:1,
          name: 'Laravel',
          category: 'Backend',
          language: 'PHP',
          imgTag:'laravel'
        },
        {
          id:2,
          name: 'Node JS',
          category: 'Backend',
          language: 'JavaScript',
          imgTag:'node'
        },
        {
          id:3,
          name: 'Django',
          category: 'Backend',
          language: 'Python',
          imgTag:'django'
        },
        {
          id:4,
          name: 'Spring Boot',
          category: 'Backend',
          language: 'Java',
          imgTag:'spring'
        },
        {
          id:5,
          name: 'React Js',
          category: 'Frontend',
          language: 'Javascript',
          imgTag:'react'
        },
        {
          id:6,
          name: 'Angular',
          category: 'Frontend',
          language: 'Javascript',
          imgTag:'angular'
        },
        {
          id:7,
          name: 'Jquery',
          category: 'Frontend',
          language: 'Javascript',
          imgTag:'jquery'
        },
        {
          id:8,
          name: 'Bootstrap',
          category: 'Frontend',
          language: 'CSS',
          imgTag:'bootstrap'
        },
        {
          id:9,
          name: 'Flutter',
          category: 'UI',
          language: 'Dart',
          imgTag:'flutter'
        },
        
        
        
      ],
      recherche: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }


  handleChange = function(e){
    console.log(e.target.value)
 }



   render(){
    const {recherche, frameworks} = this.state;
    const myRecherche = frameworks.filter(framework=>
      framework.name.toLowerCase().includes(recherche.toLowerCase())
    )

     return(
      <div className="container">
        <h1>Les frameworks que j'ai eu à utiliser</h1>
        <input type="search" onChange={e=>this.setState({recherche: e.target.value})} placeholder="Rechercher"/>
         <div className="card-list">
         {myRecherche.length > 0 ? <CardList frameworks={myRecherche} /> : <h2>Oooop!!! Désolé, Aucun résultat trouvé</h2>}
         </div>
      </div>
     )
   }
}

export default App;
