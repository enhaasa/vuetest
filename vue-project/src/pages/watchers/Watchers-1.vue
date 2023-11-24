<script setup>
import { ref, watch } from 'vue';

const burger = ref(false);
const drink = ref(false);
const fries = ref(false);

const burgerStatus = ref('');
const drinkStatus = ref('');
const friesStatus = ref('');

watch([ burger, drink, fries ], () => {
    burgerStatus.value = burger.value ? "Ich bin hungrig." : '';
    drinkStatus.value = drink.value ? "Ich bin durstig." : '';
    friesStatus.value = fries.value ? "Ich bin immer noch hungrig." : '';
});

</script>

<template>
    <h1>Language Tool: Ordering food in Germany</h1>

    <h2>Select what you want:</h2>
    <form>
        <li>
            <label for="burger">Burger</label>
            <input type="checkbox" id="burger" v-model="burger">
        </li>

        <li>
            <label for="drink">Drink</label>
            <input type="checkbox" id="drink" v-model="drink">
        </li>

        <li>
            <label for="fries">Fries</label>
            <input type="checkbox" id="fries" v-model="fries">
        </li>
    </form>

    <h2>This is what you tell the cashier:</h2>
    <p>
        Guten Tag! <br />
        <p>{{ burgerStatus }}</p>
        <p>{{ drinkStatus }}</p>
        <p>{{ friesStatus }}</p>
        Auf Wiedersehen. <br />
    </p>
</template>