import React from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
//import {createStructuredSelector} from 'reselect';
//import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
//import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';



//const CollectionsOverviewWithSpinner = withSpinner (CollectionsOverview);
//const CollectionPageWithSpinner = withSpinner (CollectionPage);

class ShopPage extends React.Component{
   

    componentDidMount(){
    const {fetchCollectionsStart} = this.props;
    fetchCollectionsStart();
    }
    render(){
        const {match} = this.props;
        
        return (
            <div className = 'shop-page'>
            < Route exact path={`${match.path}`} 
            //render={props=> (<CollectionsOverviewWithSpinner isLoading={isCollectionsFetching}{...props}/>)}
            component={CollectionsOverviewContainer}
            />
            <Route path={`${match.path}/:collectionId`} 
            //render={props=> ( <CollectionPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>)}
            component={CollectionPageContainer}
            />
            </div>  
        );
    }
}

/*const mapStateToProps = createStructuredSelector({
    //isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded:selectIsCollectionsLoaded
});*/

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
    
   

  
export default connect(null, mapDispatchToProps)(ShopPage);