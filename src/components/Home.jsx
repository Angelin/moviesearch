import React from 'react';
import Slider from 'react-image-slider';

class Home extends React.Component {
  	render() {
  		const style = {
  			textAlign: 'center'
  		}
  		const images = [
  			'./src/assets/img/dangal.jpg',
  			'./src/assets/img/dear_zindagi.jpg',
  			'./src/assets/img/kahaani_2.jpg',
  			'./src/assets/img/befikre.jpg',
  			'./src/assets/img/raees.jpg',
  			'./src/assets/img/sachin.jpg',
  			'./src/assets/img/zorawar.jpg',
  			'./src/assets/img/tum_bin_2.jpg',
  			'./src/assets/img/shivaay.jpg',
  			'./src/assets/img/rustom.jpg',
  			'./src/assets/img/msdhoni.jpeg',
  			'./src/assets/img/airlift.jpg',
  			'./src/assets/img/sultan.jpg'
  		];
        return (
            <div style={style}>
              	<h2>Welcome to MovieSearch</h2>
              	<Slider images={images} isInfinite={true} delay={5000} ></Slider>
            </div>
        );
    }
}

export default Home;