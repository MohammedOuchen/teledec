<template>
  <div>
     <v-table v-if="properties">
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Calories
            </th>
            <th class="text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in properties"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ `${item.street_number}, ${item.city}, ${item.postal_code} ${item.country}` }}</td>
            <td>
              <v-btn variant="outlined" color="green" @click="update(item)">
                Modifier
              </v-btn>
              <v-btn variant="outlined" color="warning" @click="confirmDelete(item)">
                Supprimer
              </v-btn>
            </td>
          </tr>
        </tbody>
  </v-table>

  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card>
      <v-card-title class="text-h5">
          Supprimer
      </v-card-title>
        <v-card-text>
          Vous souhaitez supprimer cette propriété ?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="warning"
            variant="text"
            @click="deleteProperty"
          >
            Supprimer
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>

  </div>
</template>

<script lang="ts" setup>
import { usePropertyStore } from '@/store/property';
import { IProperty } from '@/model/IProperty'
import { Property } from '@/model/Property'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


// var, store
const propertyStore = usePropertyStore()
const dialog = ref(false)
let currentProperty = ref(new Property())
const router = useRouter()

propertyStore.loadProperties()

// computed
const properties = computed<Array<IProperty>>(() => propertyStore.properties)

// function
function confirmDelete(property: IProperty) {
  dialog.value = true
  currentProperty.value = property
  console.log('[item] => ', property);
}
function deleteProperty() {
  console.log('[delete] => ', currentProperty);
  dialog.value = false
  propertyStore.deleteProperty(currentProperty.value.id)
}
function update (property: IProperty) {
  propertyStore._property = property;
  router.push({ name: 'Create' })
}
</script>