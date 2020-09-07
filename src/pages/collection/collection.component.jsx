import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// import { firestore } from '../../firebase/firebase.utils';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  // useEffect(() => {
  //   console.log('I am subscribing');
  //   const unsubscribeFromCollections = firestore
  //     .collection('collections')
  //     .onSnapshot(snapShot => console.log(snapShot));
    
  //   // clean up function || componentWillUnmount()
  //   return () => {
  //     console.log('I am unsubscribing');
  //     unsubscribeFromCollections();
  //   };
  // }, []);

  return (
    <CollectionPageContainer>
      <CollectionTitle>{ title }</CollectionTitle>
      <CollectionItemsContainer>
        { items.map(item => (
          <CollectionItem
            key={ item.id }
            item={ item } />
        )) }
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);