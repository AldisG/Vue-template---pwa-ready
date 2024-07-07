<template>
  <div class="">
    <img class="icons" :src="imageLink" alt="option" :draggable="false" />
  </div>
</template>

<script setup lang="ts">
const {imageLink} = defineProps<{
  imageLink: string
}>();


</script>

<style lang="scss" scoped>
@import "../css/variables";

.icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
}
</style>
