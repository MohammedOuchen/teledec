<template>
  <v-container class="mb-5">
    <v-row>
      <v-col
        cols="12"
        md="4"
        >
        {{  `Revenu net  (€): ${netRevenue}` }}
      </v-col>
      <v-col
        cols="12"
        md="4"
        >
        <v-btn variant="outlined" color="green" @click="creatteProperty">
          Ajouter
        </v-btn>
      </v-col>
      <v-col
        cols="12"
        md="4"
        >
        <v-btn variant="outlined" color="blue" @click="creatteProperty">
          Envoyer
        </v-btn>
      </v-col>
  </v-row>
  </v-container>
</template>
<script setup>
import { Property } from "@/model/Property";
import { computed } from 'vue'
import { usePropertyStore } from "@/store/property";
import { useRouter } from 'vue-router'


// var, store
const propertyStore = usePropertyStore()
const router = useRouter()

const netRevenue = computed(() => {
  let sum = 0
  propertyStore._properties.map(property => {
    sum += property.totalNet
  })
  return sum
})

// function
function creatteProperty() {
  router.push({ name: 'Create' })
}
</script>