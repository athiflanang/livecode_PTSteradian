<template>
  <div class="flex items-center justify-items-center bg-slate-300">
    <div class="grid grid-rows-3">
      <h1 class="font-bold text-3xl text-black">Order Data</h1>
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
    </div>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script></script>
