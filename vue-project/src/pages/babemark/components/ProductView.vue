<script setup lang="ts">
import Product from './Product.vue';

const { selectedCategory } = defineProps({
  selectedCategory: Object
});
</script>

<template>
    <div class="product-view">
        <Product 
            v-for="product in selectedCategory?.products" 
            :product="product" 
            :key="product.id"
        />
    </div>
</template>

<style scoped>
 .product-view {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, 1fr);
    gap: 100px;
 }

</style>