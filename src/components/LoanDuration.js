import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider'
import { Input } from '../styles/common';

const LoanDuration = ({ loanDuration, setLoanDuration, isValid }) => (
  <Fragment>
    <div className="mt-5">
      <label htmlFor="loanDuration">How long do you need it for?</label>
    </div>
    <div className="row">
      <Slider
        min="6"
        max="24"
        value={loanDuration}
        onChange={e => setLoanDuration(e.target.value)}
        getLabel={(value) => <i>{value} months</i>}
      />
      <div className="col-md-2 col-sm-6">
        <Input
          type="number"
          min="6"
          max="24"
          className="form-control"
          id="loanDuration"
          step={1}
          value={loanDuration}
          onChange={e => setLoanDuration(e.target.value)}
        />
        {!isValid && (
          <small className="text-danger float-right">
            *Loan duration invalid
          </small>
        )}
      </div>
    </div>
  </Fragment>
);

LoanDuration.propTypes = {
  loanDuration: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setLoanDuration: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
};

export default LoanDuration;
