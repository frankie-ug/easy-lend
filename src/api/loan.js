import axios from 'axios';
import { API_URL } from '../constants';

export const getLoanRate = params =>
  axios.get(API_URL, { params });
