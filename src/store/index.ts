/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDataHotel, getOne } from "@/services/HotelDataSerrvice";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      dataAllHotel: [],
      dataFilter: [],
      dataHotelById: []
    };
  },

  getters: {
    getFilterHotelByStar:
      (state: any) =>
      ({ star }: any) => {
        if (star) {
          const data = state.dataAllHotel.filter(
            (item: any) => item.attributes.rarity === star
          );
          return state.dataFilter = data;
        }else if (star === undefined) return state.dataFilter = state.dataAllHotel
        
      },
  },

  mutations: {
    setDataHotels(state: any, value: any) {
      state.dataAllHotel = value;
      state.dataFilter = value
    },
    setDataHotelById(state: any, value: any) {
      state.dataHotelById = value;
    },
   
  },

  actions: {
    async getHotels({ commit }) {
      try {
        const response = await getDataHotel();
        commit("setDataHotels", response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async getHotelById({ commit }, { id: id }) {
      try {
        const response = await getOne(id);
        // console.log(response);
        commit("setDataHotelById", response.data)
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default store;
