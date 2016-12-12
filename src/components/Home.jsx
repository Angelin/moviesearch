import React from 'react';
import Slider from 'react-image-slider';
import SwipeableViews from 'react-swipeable-views';
import Request from 'superagent';

import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import HomeGrid from './HomeGrid.jsx';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        slideIndex: 0,
        homeGrid: []
      }
      this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
      let mainTh = this;
      Request.get('src/assets/home.json')
        .end(function (err, res) {
          mainTh.setState({homeGrid: res.body});
        });
    }

    handleChange(value) {
      this.setState({slideIndex: value});
    }

  	render() {
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
      const styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          },
          main: {
           textAlign: 'center'
          },
          tabstyle: {
            margin: '2%',
            marginBottom: 0
          },
          swipeViews: {
            margin: '0% 2% 2%',
            border: '1px solid rgba(0,0,0,.18)',
            borderRadius: '5px'
          },
          gridList: {
            width: 1300,
            paddingTop: '30px',
            paddingBottom: '30px',
            overflowY: 'auto',
          },
          cardStyle: {
            margin: '2%',
            paddingBottom: '20px'
          },
          gridHeader: {
            marginTop: '10px'
          },
          slide: {
            margin: '1%'
          }
        };
        if(this.state.homeGrid.length!=0) {
          var homeGrid = this.state.homeGrid.new_upcoming.map((upcoming, i) => (
                        <HomeGrid upcoming={upcoming} key={i}/>
          ))
          var india_top = this.state.homeGrid.india_top
        }
        return (
            <div style={styles.main}>
              	<h2 className="resultheader">Welcome to MovieSearch</h2>
              	<Slider images={images} isInfinite={true} delay={5000} ></Slider>
                <Card style={styles.cardStyle}>
                  <h2 style={styles.gridHeader}>Latest News</h2>
                  <Tabs onChange={this.handleChange} style={styles.tabstyle} value={this.state.slideIndex}>
                    <Tab label="India Top" value={0} />
                    <Tab label="Hollywood" value={1} />
                    <Tab label="Movies" value={2} />
                    <Tab label="Celebs" value={3} />
                  </Tabs>
                  <SwipeableViews style={styles.swipeViews} index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                    <div style={styles.slide}>
                        India Top movie news
                    </div>
                    <div style={styles.slide}>
                      Hollywood news
                    </div>
                    <div style={styles.slide}>
                      Bollywood news
                    </div>
                    <div style={styles.slide}>
                      Celebs
                    </div>
                  </SwipeableViews>
                </Card>

                <Card style={styles.cardStyle}>
                  <h2 style={styles.gridHeader}>Upcoming Movies</h2>
                  <div style={styles.root}>
                      <GridList
                        cellHeight={300}
                        cols={4}
                        padding={20}
                        style={styles.gridList}
                      >
                      {homeGrid}
                      </GridList>
                  </div>
                </Card>
            </div>
        )
      }
}