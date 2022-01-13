/* eslint-disable @typescript-eslint/no-explicit-any */
import api from '../configs/common';

export const getDataHotel = (): any =>{
  return api.get("/yickson/serverjson/hotels")
}
export const  getOne = (id: number): any =>{
  return api.get(`/yickson/serverjson/hotels/${id}`);
}