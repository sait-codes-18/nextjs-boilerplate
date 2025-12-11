import axios from 'axios';

const BASE_URL = "/api";

export const fetchTransactions = async () => {
  const res = await axios.get(`${BASE_URL}/transactions`);
  return res.data;
};

export const fetchShadowBudget = async (transactions) => {
  const res = await axios.post(`${BASE_URL}/budget`, { transactions });
  return res.data;
};

export const fetchMood = async (transactions) => {
  const res = await axios.post(`${BASE_URL}/mood`, { transactions });
  return res.data.mood;
};