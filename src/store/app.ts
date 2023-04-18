import axios from 'axios'
import { defineStore } from 'pinia'
import { Property } from '@/model/property'

export const useAppStore = defineStore('app', {
  state: () => ({
    _properties : [] as Property[]
  }),
  getters: {
    properties  (state) { return state._properties  },
  },
  actions: {
    async loadProperties  () {
     try {
      const { data} =await axios.get('properties')
      this._properties = data;
     } catch (error) {
       console.log(error);
     }
    },

    async deleteProperty(id: number) {
      try {
        await axios.delete('properties/'+id)
        this._properties  = this._properties.filter(property => property.id !== id)

       } catch (error) {
         console.log(error);
       }
    }
  }
})
