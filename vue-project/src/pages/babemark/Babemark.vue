<script setup>
// Hooks
import { ref } from 'vue';

// Components
import Logo from './components/Logo.vue';
import Categories from './components/Categories.vue';
import ProductView from './components/ProductView.vue';

// Resources
import getCategories from './resources/categories';

const categories = getCategories();
const selectedCategory = ref(categories[0]);

function setCategory(name) {
  const index = categories.findIndex(c => c.name === name);
  selectedCategory.value = categories[index];
}

</script>

<template>
  <main>
    
    <Logo />
    
    <Categories 
      :selectedCategory="selectedCategory" 
      :categories="categories" 
      :setCategory="setCategory"
    />

    <ProductView :selectedCategory="selectedCategory" />

  </main>
</template>