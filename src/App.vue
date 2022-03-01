<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark>
      <div class="d-flex align-center">
        <h1 class="ml-5">Cargofive</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
