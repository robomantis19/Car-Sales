import React from 'react';
import { connect } from "react-redux"
import { setFeature  } from '../actions/priceActions';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.setFeature(props.feature)}>Add</button>
      {console.log('AdditionalFeature props', props.feature)}
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => { 
  return {
    additionalPrice: state.additionalPrice, 
    car: state.car, 
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {setFeature})(AdditionalFeature);
