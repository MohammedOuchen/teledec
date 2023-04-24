import axios from 'axios'
import { defineStore } from 'pinia'
import { IProperty } from '@/model/IProperty'
import { Property } from '@/model/Property'

export const usePropertyStore = defineStore('app', {
  state: () => ({
    _properties : [] as IProperty[],
    _property: new Property()
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

    async deleteProperty(id: number | null) {
      try {
        await axios.delete('properties/'+id)
        this._properties  = this._properties.filter(property => property.id !== id)

       } catch (error) {
         console.log(error);
       }
    },

    async  createProperty(property: IProperty) {
      try {
        await axios.post('properties/', property)
        this._properties.push(property)

       } catch (error) {
         console.log(error);
       }
    }
  }
})
