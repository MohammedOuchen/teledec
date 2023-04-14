<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in properties"
        :key="item.libeller"
      >
        <td>{{ item.libeller }}</td>
        <td>{{ item.adresse }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

console.log('[component] => ');


const properties = ref([
  {
    libeller: 'maison',
    adresse: '2 carrefour du general de gaulle'
  },
  {
    libeller: 'maison',
    adresse: '2 carrefour du general de gaulle'
  },
  {
    libeller: 'maison',
    adresse: '2 carrefour du general de gaulle'
  },
])
</script>