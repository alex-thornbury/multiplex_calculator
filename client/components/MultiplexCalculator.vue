<template>
    <div class="calculator-container d-flex flex-column justify-space-between">
        <SelectCalculator />
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
