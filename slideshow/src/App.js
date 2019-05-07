import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const images = [
  {
    imageName: "Slide 1",
    location: "./images/slides/slide1.jpg",
    category: "Category",
    id: 1
  },
  {
    imageName: "Slide 2",
    location: "images/slides/slide2.jpg",
    category: "Category",
    id: 2
  },
  {
    imageName: "Slide 3",
    location: "images/slides/slide3.jpg",
    category: "Category",
    id: 3
  },
  {
    imageName: "Slide 4",
    location: "images/slides/slide4.jpg",
    category: "Category",
    id: 4
  },
  {
    imageName: "Slide 5",
    location: "images/slides/slide5.jpg",
    category: "Category",
    id: 5
  }
]

function Slide(props) {
  return(
    <div className="imageSlide">
      <img src={props.slides.location} atl={props.slides.imageName}></img>
    </div>
  )
}

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      images,
    }
  }

  render() {
  
    return (
      <div className="wrapper">
        <section className="showContainer">
          {this.state.images.map(image => 
            <Slide slides={image} />
          )}
        </section>
      </div>
    )
  }

}

export default App;
