<template>
  <div class="flex w-full h-screen items-center justify-center bg-slate-300">
    <div class="items-center justify-center grid grid-row-3">
      <h1
        class="flex items-center justify-center font-bold text-3xl text-black mb-3"
      >
        Cars data
      </h1>
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr class="text-black font-bold">
              <th>Rate</th>
              <th>id</th>
              <th>image</th>
              <th>Month Rate</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in item" :key="data" class="text-black">
              <td class="text-black">test 1</td>
              <td>test 1</td>
              <td>test 1</td>
              <td>test 1</td>
              <td>test 1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button class="btn btn-primary text-white mt-3">See orders</button>
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import CarPage from "./views/Car.vue";
import OrderPage from "./views/Order.vue";
import { RouterLink, RouterView } from "vue-router";
</script>
