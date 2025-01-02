<script setup lang="ts">
const selectCalculator = (selectedCalculator: string) => {
    console.log(selectedCalculator)
}

const calculatorOptions = ['BRO', 'WHAT']
</script>

<template>
    <div class="calculator-container d-flex flex-column justify-space-between">
        <SelectCalculator :calculator-options="calculatorOptions" @calc-change="selectCalculator" />
        <ResultDisplay />
        <ExecuteCalculation />
    </div>
</template>

<style scoped>
.calculator-container {
    border: 1px solid black;
    height: 100%;
}
</style>
