import React from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';


const CollectionsOverviewWithSpinner = withSpinner (CollectionsOverview);
const CollectionPageWithSpinner = withSpinner (CollectionPage);

class ShopPage extends React.Component{
   

    componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
    }
    render(){
        const {match, isCollectionsFetching} = this.props;
        
        return (
            <div className = 'shop-page'>
            < Route exact path={`${match.path}`} 
            render={props=> (<CollectionsOverviewWithSpinner isLoading={isCollectionsFetching}{...props}/>)}/>
            <Route path={`${match.path}/:collectionId`} 
            render={props=> ( <CollectionPageWithSpinner isLoading={isCollectionsFetching}{...props}/>)}/>
            </div>  
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
    
   

  
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);