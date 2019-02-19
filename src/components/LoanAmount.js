import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import { Input } from '../styles/common';

const LoanAmount = ({ loanAmount, setLoanAmount, isValid }) => (
  <Fragment>
    <div>
      <label htmlFor="loanAmount">How much money do you need?</label>
    </div>
    <div className="row">
      <Slider
        min="500"
        max="5000"
        value={loanAmount}
        onChange={e => setLoanAmount(e.target.value)}
        getLabel={(value) => <i>&pound;{value}</i>}
      />
      <div className="col-md-2 col-sm-6">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <div className="input-group-text">&pound;</div>
          </div>
          <Input
            type="number"
            min="500"
            max="5000"
            className="form-control"
            id="loanAmount"
            value={loanAmount}
            step={1}
            onChange={e => setLoanAmount(e.target.value)}
          />
        </div>
        {!isValid && (
          <small className="text-danger float-right">
            *Loan amount invalid
          </small>
        )}
      </div>
    </div>
  </Fragment>
);

LoanAmount.propTypes = {
  loanAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setLoanAmount: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default LoanAmount;
