// import { nanoid } from 'nanoid';

export const addNumber = obj => ({
  type: 'contact/addNumber',
  payload: obj,
});

export const delNumber = id => ({
  type: 'contact/delNumber',
  payload: id,
});

export const filter = value => ({
  type: 'contact/filter',
  payload: value,
});
