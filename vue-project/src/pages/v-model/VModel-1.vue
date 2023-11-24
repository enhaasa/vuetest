<script setup>
import { ref } from 'vue';

const checkbox = ref(false);
const textfield = ref('');
const selected = ref(false);

</script>

<template>
    <form>
        <!-- Checkbox -->
        <div>
            <input type="checkbox" v-model="checkbox"> {{ checkbox }}
        </div>

        <!-- Textfield -->
        <div>
            <input type="text" v-model="textfield"> {{ textfield }}
        </div>

        <!-- Radiobuttons -->
        <div>
            <label for="one">Cats</label>
            <input type="radio" v-model="selected" id="one" value="Cats">
        </div>

        <div>
            <label for="two">Dogs</label>
            <input type="radio" v-model="selected" id="two" value="Dogs">
        </div>
        Favourite animal: {{ selected }}
        
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