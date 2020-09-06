import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsSartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsSartAsync } = this.props;
    fetchCollectionsSartAsync();
  }
  
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={ `${ match.path }` }
          component={ CollectionsOverviewContainer } />
        <Route
          path={ `${ match.path }/:collectionId` }
          component={ CollectionPageContainer } />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsSartAsync: () => dispatch(fetchCollectionsSartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);