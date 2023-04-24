<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.name"
            :rules="textRules"
            :counter="10"
            label="Nom"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.street_number"
            :rules="textRules"
            :counter="10"
            label="Numéro-rue-voie,"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.postal_code"
            :rules="textRules"
            label="Code postale"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.city"
            :rules="textRules"
            :counter="10"
            label="Ville"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-select
            v-model="property.country"
            :items="countries"
            item-title="name"
            item-value="name"
            label="Pays"
            single-line
            required
          ></v-select>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.postal_code"
            :rules="textRules"
            label="Code postale"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="property.rents_collected_in_cent"
            :counter="10"
            label="Loyers encaissés (€)"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
        <v-text-field
            v-model="property.gants_special_work_in_cent"
            :counter="10"
            label="Subventions pour travaux spéciaux (€)"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="property.work_expenses_in_cent"
            :counter="10"
            label="Dépenses de travaux (€)"
            type="number"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
            v-model="property.taxation_in_cent"
            :counter="10"
            label="Imposition (€)"
            type="number"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
        <v-text-field
            v-model="property.insurances_premiums"
            :counter="10"
            label="Primes d’assurances (€)"
            type="number"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-btn
      color="green"
      class="me-4"
      @click="submit"
    >
      Enregistrer
    </v-btn>
    </v-container>
  </v-form>
</template>
<script setup lang="ts">
import { usePropertyStore } from '@/store/property'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

  const valid = ref(false)
  const propertyStore = usePropertyStore()
  const property = ref(propertyStore._property)
  const router = useRouter()


  const textRules = ref([
    (value: string) => {
      if (value) return true

      return 'ce champs est obligatoire'
    },
    (value: string) => {
      if (value?.length > 3) return true

      return 'ce champs doit comporter plus de 3 caractères'
    },
  ])
  const countries = ref([
    { name: 'France' },
    { name: 'Italie' },
    { name: 'Espagne' },
  ])

  function submit() {
    propertyStore.createProperty(property.value)
    router.push({ name: 'Home' })
  }

</script>
