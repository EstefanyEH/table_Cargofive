<template>
  <v-container>
    <v-row>
      <v-col cols="12"><h2 class="text-center">Puertos Marítimos</h2></v-col>

      <v-col>
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="puertos.data"
            :search="search"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "table-comp",
  // props: {},
  data: function () {
    return {
      search: "",
      sortBy: "name",
      keys: ["Id", "Name", "Country", "Continent", "Coordinates"],
      headers: [
        {
          text: "Id",
          align: "start",
          filterable: true,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Country", value: "country" },
        { text: "Continent", value: "continent" },
        { text: "Coordinates", value: "coordinates" },
      ],
    };
  },
  computed: {
    ...mapState(["puertos"]),
  },
  methods: {
    ...mapActions(["fetchPuertos"]),
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchPuertos();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>