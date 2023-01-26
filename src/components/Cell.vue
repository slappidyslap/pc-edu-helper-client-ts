<template>
    <input :style="{ width: cellWidth}" type="text">
</template>

<script setup lang="ts">
import CellType from '@/ts/CellType'
import { defineProps, toRaw } from 'vue'

const props = defineProps<{
  type: CellType
}>()

const rawProps = toRaw(props)
const cellWidth: string = rawProps.type.value.width

</script>

<style scoped lang="scss">
$input-border-color: rgb(255, 133, 133);
$input-border-focus-color: rgb(231, 53, 53);
$input-border-focus-shadow-color: $input-border-color;

input {
    transition: border-color 0.30s ease-in-out, box-shadow 0.30s ease-in-out;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background: none;
    border: 1px solid $input-border-color;
}

input:focus {
    outline: 0;
    box-shadow: 0 0 0.5rem $input-border-focus-shadow-color;
    border-color: $input-border-focus-color;
}
</style>
