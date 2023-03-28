<template>
  <div class="container">
    <el-card 
    class="card"
    v-for="(o, index) in beers"
    :key="o" 
    :body-style="{ padding: '0px' }">
    <img
      :src="o.image_url"
      class="image"
    />
    <div style="padding: 14px">
      <h1>{{o.name}}</h1>
      <div class="bottom">
        <div class="description">{{ o.description }}</div>
        <div class="first-brewed">First brewed : {{ o.first_brewed }}</div>
        <el-button type="primary" text class="button">Ingredients</el-button>
      </div>
    </div>
  </el-card>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const beers = await fetch('https://api.punkapi.com/v2/beers').then(res => res.json())
const currentDate = ref(new Date())
</script>

<style>
@import "~/styles/app-alert.scss";
</style>