import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionsSartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component{
  componentDidMount() {
    const { fetchCollectionsSartAsync } = this.props;
    fetchCollectionsSartAsync();
  }
  
  render() {
    const { match, isCollectionfetching } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={ `${ match.path }` }
          render={ (props) => (
            <CollectionsOverviewWithSpinner
              isLoading={ isCollectionfetching }
              { ...props } />
          ) } />
        <Route
          path={ `${ match.path }/:collectionId` }
          render={ (props) => (
            <CollectionPageWithSpinner
              isLoading={ isCollectionfetching }
              { ...props } />
          ) } />
      </div>
    );
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionfetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsSartAsync: () => dispatch(fetchCollectionsSartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);