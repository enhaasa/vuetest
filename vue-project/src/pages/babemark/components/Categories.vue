<script setup>
import { defineProps } from 'vue';

const {
    selectedCategory,
    categories,
    setCategory,
} = defineProps({
    selectedCategory: Object,
    categories: Object,
    setCategory: Function
});

</script>

<template>
    <div class="categories">
        <button v-for="category in categories" @click="() => setCategory(category.name)">
            {{ category.name }}
        </button>
    </div>
</template>

<style scoped>
    .categories {
        display: flex;
        justify-content: center;
        gap: 50px;
        padding-bottom: 25px;
        margin-bottom: 25px;
        font-weight: bold;
        border-bottom: 1px solid black;
    }
    .categories button {
        border: none;
        outline: none;
        background: none;
        font-size: 18px;
    }
    .categories button:hover {
        color: rgb(0, 183, 255);
        cursor: pointer;
    }
</style>