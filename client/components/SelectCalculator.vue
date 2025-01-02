<script setup lang="ts">
const { calculatorOptions } = defineProps<{
    calculatorOptions: String[],
}>()

defineEmits(['calcChange'])



</script>

<template>
    <div>
        <v-autocomplete label="Select Calculator" :items="calculatorOptions"
            @update:model-value="$emit('calcChange', $event)"></v-autocomplete>
    </div>
</template>
