import React from 'react';

import { connect } from "react-redux"
import { setFeature , setRemove } from './actions/priceActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';



const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.setRemove(item.id);
  };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   props.setFeature(item.id);
    
  // };
  

  console.log('props', props)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} setRemove={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures}   />
        <Total car={props.car} additionalPrice={props.additionalPrice}  />
      </div>
    </div>
  );
};
const mapStateToProps = state => { 
  console.log('state', state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps, 
  { setFeature, setRemove}
)(App);
