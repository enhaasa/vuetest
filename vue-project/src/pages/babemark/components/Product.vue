<script setup lang="ts">
import { defineProps } from 'vue';

type TProduct = {
    image: string;
    brand: string;
    name: string;
    price: number;
}

defineProps<{
  product: TProduct;
}>();

</script>

<template>
    <div class="product">
        <div>
            <img :src="product.image" />
        </div>
        <div>
            <span>{{ product.brand }}</span>
            <span>★★★★★</span>
        </div>
        <div>
            <span><strong>{{ product.name }}</strong></span>
            <span class="price">{{ product.price }} €</span>
        </div>
    </div>
</template>

<style scoped>

img {
    width: 100%;
}

.product div {
    display: flex;
    justify-content: space-between;
}
.price {
    color: rgb(0, 183, 255);
    font-weight: bold;
}

</style>