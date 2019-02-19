import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonContainer = styled.div`
  padding-top: 7px;
`;

const LoanRate = ({ loanRate, loading }) => (
  <div className="form-row mt-5">
    <div className="form-group col-md-2">
      <label>Monthly Repayments:</label>

      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">&pound;</div>
        </div>
        <input
          id="amount"
          type="text"
          className="form-control"
          value={loanRate.amount}
          disabled
        />
      </div>
    </div>
    <div className="form-group col-md-2">
      <label>No of Payments:</label>
      <input
        type="text"
        className="form-control"
        value={loanRate.numPayments}
        disabled
      />
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputState">Total Repayments:</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">&pound;</div>
        </div>
        <input
          type="text"
          className="form-control"
          value={loanRate.amount * loanRate.numPayments}
          disabled
        />
      </div>
    </div>
    <div className="form-group col-md-2">
      <label>Nominal Interest Rate:</label>
      <input
        type="text"
        className="form-control"
        value={loanRate.nominalInterestRate}
        disabled
      />
    </div>
    <div className="form-group col-md-2">
      <label>APR:</label>
      <input
        type="text"
        className="form-control"
        value={loanRate.apr}
        disabled
      />
    </div>
    <ButtonContainer className="form-group col-md-2">
      <button
        type="button"
        className="btn btn-primary mt-4 w-100"
        onClick={() => alert('You are applying for this loan')}
        disabled={loading}
      >
        Apply for this loan
      </button>
    </ButtonContainer>
  </div>
);

LoanRate.propTypes = {
  loanRate: PropTypes.shape({
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    numPayments: PropTypes.number,
    apr: PropTypes.number,
    nominalInterestRate: PropTypes.number,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoanRate;
