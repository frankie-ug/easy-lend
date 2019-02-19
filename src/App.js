import React, { useState, useEffect } from 'react';
import { getLoanRate } from './api/loan';
import { useDebounce } from './utils/hooks';
import TopSection from './components/TopSection';
import LoanAmount from './components/LoanAmount';
import LoanDuration from './components/LoanDuration';
import LoanRate from './components/LoanRate';

const App = () => {
  const [loanAmount, setLoanAmount] = useState(500);
  const [loanDuration, setLoanDuration] = useState(6);
  const [loanRate, setLoanRate] = useState({
    amount: 0,
    nominalInterestRate: 0,
    apr: 0,
    numPayments: 0,
    loanAmount: 0,
  });
  const [loading, setLoading] = useState(false);

  const params = useDebounce(loanAmount, loanDuration);

  const amountValid = amount => {
    const re = /^[0-9\b]+$/;

    return re.test(amount) && amount >= 500 && amount <= 5000;
  };

  const durationValid = numMonths => {
    const re = /^[0-9\b]+$/;

    return re.test(numMonths) && numMonths >= 6 && numMonths <= 24;
  };

  const checkRate = () => {
    setLoading(true);

    getLoanRate(params)
      .then(({ data }) => {
        const {
          monthlyPayment: { amount },
          nominalInterestRate,
          apr,
          numPayments,
        } = data;

        const rate = {
          amount,
          nominalInterestRate,
          apr,
          numPayments,
          loanAmount,
        };

        setLoanRate(rate);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(
    () => {
      if (durationValid(params.numMonths) && amountValid(params.amount)) {
        checkRate();
      } else {
        setLoanRate({
          amount: loanAmount || 0,
          nominalInterestRate: 0,
          apr: 0,
          numPayments: 0,
          loanAmount: 0,
        });
        setLoading(true);
      }
    },

    [params]
  );

  return (
    <div>
      <TopSection />
      <div className="container pt-5 pb-5">
        <LoanAmount
          loanAmount={loanAmount}
          setLoanAmount={setLoanAmount}
          isValid={amountValid(loanAmount)}
        />
        <LoanDuration
          loanDuration={loanDuration}
          setLoanDuration={setLoanDuration}
          isValid={durationValid(loanDuration)}
        />
        <LoanRate loanRate={loanRate} loading={loading} />
      </div>
    </div>
  );
};

export default App;
