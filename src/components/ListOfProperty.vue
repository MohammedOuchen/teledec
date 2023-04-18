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
              <v-btn variant="outlined" color="green">
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
import { useAppStore } from '@/store/app';
import { Property } from '@/model/property'
import { ref, computed } from 'vue'


// var, store
const appStore = useAppStore()
const dialog = ref(false)
const currentProperty = ref({
  id: 0,
  name: '',
  street_number: '',
  city: '',
  country: '',
  postal_code: ''
})

appStore.loadProperties()

// computed
const properties = computed<Array<Property>>(() => appStore.properties)

// function
function confirmDelete(property: Property) {
  dialog.value = true
  currentProperty.value = property
  console.log('[item] => ', property);
}
function deleteProperty() {
  console.log('[delete] => ', currentProperty.value);
  dialog.value = false
  appStore.deleteProperty(currentProperty.value.id)
}
</script>