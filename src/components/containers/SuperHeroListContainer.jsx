import React, { Component } from 'react';
import { getCharList } from'../../api/marvelApi';
import { SuperHeroList } from '../presentationals';
import { withStyles } from "@material-ui/core/styles";

class SuperHeroListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.imagePath = 'thumbnail';
    this.listRender = ['name', 'description', this.imagePath]
  }

  async componentWillMount() {
    const charList = await getCharList();
    this.createData(charList);
  }

  goToDetail = (id) => {
    this.props.history.push(`/super-heroes/${id}`);
  }

  createData = (data) => {
    const { results } = data;
    const filtered = results.map(({id, name, description, thumbnail}) => ({id, name, description, thumbnail}));
    this.setState({
      results: filtered
    });
  }

  render = () => {
    const { results } = this.state;
    const { classes } = this.props;

    return (
      <SuperHeroList
        columns={this.listRender}
        customClass={classes}
        data={results}
        goToDetail={this.goToDetail}
      />
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
});

export default withStyles(styles)(SuperHeroListContainer);
