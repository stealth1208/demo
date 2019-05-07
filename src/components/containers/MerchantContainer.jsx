import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as merchantAction from '../../redux/actions';
import { Category, Stores, Loading, Header } from '../presentationals';
import { cookiesHelper } from '../../helper';

class MerchantContainer extends Component {
  componentWillMount() {
    const favoriteId = cookiesHelper.getCookie('favorite');
    this.props.getMerchantList(favoriteId * 1);
  }

  selectCategory = (categoryId) => {    
    this.props.getMerchantList(categoryId);
  }
  
  render() {
    const { categories, stores, selectedCategory, isRequesting } = this.props;   

    return (
      <>
        {
          isRequesting &&
          <Loading />
        }
        {
          !isRequesting &&
          <>
            <Header>
              <Category
                categories={categories}
                selectCategory={this.selectCategory}
                selectedCategory={selectedCategory}
              />
            </Header>
            <Stores
              stores={stores}
            />          
          </>
        }
      </>
    );
  }
}

MerchantContainer.propTypes = {
  getMerchantList: PropTypes.func,
  isRequesting: PropTypes.bool,
  categories: PropTypes.array,
  stores: PropTypes.array,
  selectedCategory: PropTypes.number
};

const mapDispatchToProps = {
  getMerchantList: merchantAction.getHeroListAction
};

function mapStateToProps(state) {
  return {
    isRequesting: state.merchantReducer.isRequestingList,
    stores: state.merchantReducer.stores,
    categories: state.merchantReducer.categories,
    selectedCategory: state.merchantReducer.selectedCategory
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantContainer);
