<script setup>
const handleClick = () => {
  alert("hello");
};
</script>

<template>
  <div>
    <h1>Add Two Plus Two</h1>
    <v-btn @click="handleClick">Click Here</v-btn>
  </div>
</template>
