import React, { Component } from 'react';
import { SuperHeroList, Loading } from '../presentationals';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { getHeroListAction } from '../../redux/actions/marvelAction';

class SuperHeroListContainer extends Component {
  constructor(props) {
    super(props);
    this.imagePath = 'thumbnail';
    this.listRender = ['name', 'description', this.imagePath]
  }

  componentWillMount() {
    this.props.getHeroListAction(0);
  }


  goToDetail = (id) => {
    this.props.history.push(`/super-heroes/${id}`);
  }



  loadMore = async (page) => {
    console.log('page', page)
    this.props.getHeroListAction(page);
  }

  render = () => {
    const {
      isRequestingList,
      heroList,
      classes
    } = this.props;

    return (
      <>
        {
          isRequestingList &&
          <Loading />
        }
        <SuperHeroList
          columns={this.listRender}
          customClass={classes}
          data={heroList}
          goToDetail={this.goToDetail}
          loadData={this.loadMore}
        />
      </>
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

const mapDispatchToProps = {
  getHeroListAction
};

const mapStateToProps = (state) => {
  return {
    ...state.heroListReducer
  }
};

const containerWithStyle = withStyles(styles)(SuperHeroListContainer);

export default connect(mapStateToProps, mapDispatchToProps)(containerWithStyle);
