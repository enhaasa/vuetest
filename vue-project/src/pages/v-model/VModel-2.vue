<script setup>
import { ref } from 'vue';

const checkedNames = ref([]);
</script>

<template>
    <form>
        <div>Checked names: {{ checkedNames }}</div>
        <div>
            <label for="jack">Jack</label>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        </div>

        <div>
            <label for="john">John</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
        </div>

        <div>
            <label for="mike">Mike</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        </div>
    </form>
</template>

<style scoped>
form {
    display: grid;
    color: black;
    background: white;
    justify-items: start;
    gap: 20px;
    padding: 20px;
    width: 500px;
}

div {
    display: flex;
    justify-content: space-between;
    width: 100%;
}


</style>