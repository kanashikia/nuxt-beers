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
          <el-scrollbar height="10vh">
            <div class="description">{{ o.description }}</div>
          </el-scrollbar>
          
          <div class="first-brewed">First brewed : {{ o.first_brewed }}</div>
          <el-button type="primary" text class="button" @click=" openDialog(o)">Ingredients</el-button>
        </div>
      </div>
    </el-card>

    <el-dialog
        v-model="centerDialogVisible"
        title="Ingredients"
        width="50vw"
        align-center
        draggable

      >
          <div class="dialog-footer">
            <h2 v-if="clickedBeer.ingredients.malt">Malt</h2>
            <div v-for="ingredient in clickedBeer.ingredients.malt" class="malt">
              {{ ingredient.name }}
              {{ ingredient.amount.value }}
              {{ ingredient.amount.unit }}
            </div>
            <h2 v-if="clickedBeer.ingredients.hop">Hop</h2>
            <div v-for="ingredient in clickedBeer.ingredients.hop" class="hop">
              {{ ingredient.name }}
              {{ ingredient.amount.value }}
              {{ ingredient.amount.unit }}
            </div>
            <h2 v-if="clickedBeer.ingredients.yeast">Yeast</h2>
            <div>{{ clickedBeer.ingredients.yeast }}</div>
            
          </div>
      </el-dialog>
  </div>
  
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const beers = await fetch('https://api.punkapi.com/v2/beers').then(res => res.json())
const centerDialogVisible = ref(false)
let clickedBeer: any;

const openDialog = (beer: any) => {
  clickedBeer = beer
  centerDialogVisible.value = true
}

</script>

<style>
@import "~/styles/app-alert.scss";
</style>