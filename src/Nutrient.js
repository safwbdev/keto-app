import React from 'react';

const Nutrient = props => (
    <div className="row nutrient-row">
        <div className="col-md-6 label">{props.getData.label}</div>
        <div className="col-md-6 amount">{props.getData.quantity.toFixed(2) + " " + props.getData.unit}</div>
    </div>
)

export default Nutrient