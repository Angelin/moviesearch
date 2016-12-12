import React from 'react';

import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class HomeGrid extends React.Component {
	render() {
		return(
			<GridTile
		          key={this.props.upcoming.img_url}
		          title={this.props.upcoming.title}
		          subtitle={<span> <b>{this.props.upcoming.title}</b></span>}
		          titleBackground ='rgba(65,167,197,.8)'
		          actionIcon={<IconButton><StarBorder color="red"/></IconButton>}
		        >
		       	<img src={this.props.upcoming.img_url} />
		    </GridTile>
		)
	}
}