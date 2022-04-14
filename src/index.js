import React from 'react';
import ReactDOM from 'react-dom';
import BMI from './BMI';
import Bank from './Bank';
import Harga from './harga';
import Biner from './convert/biner';
import Decimal from './convert/decimal';
import Hexadecimal from './convert/HexaDecimal';
import Octal from './convert/Octal';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BMI />
      <hr />
      <Bank />
      <hr />
      <Harga />
      <hr />
      <Biner />
      <hr />
      <Decimal />
      <hr />
      <Hexadecimal />
      <hr />
      <Octal />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);