<template>
    <input
        @change="$emit('change-teacher-input', $event.target)"
        :style="{ width: cellWidth}"
        :class="isInvalid() ? 'invalid' : ''"
        type="text">
</template>

<script setup lang="ts">
import CellType from '@/ts/CellType'
import { ChangedTeacherInputData } from '@/ts/ChangedTeacherInputData'
import { defineProps, toRaw, defineEmits, toRef, computed, ComputedRef } from 'vue'

const props = defineProps<{
  type: CellType,
  changedTeacherInputData?: ChangedTeacherInputData
}>()

const rawProps = toRaw(props)

const cellWidth: string = rawProps.type.value.width
const changedTeacherInputData = toRef(rawProps, 'changedTeacherInputData')

function isInvalid (): boolean {
  const data = changedTeacherInputData.value
  return data?.rowNumber === 3
}

defineEmits(['change-teacher-input'])

</script>

<style scoped lang="scss">
$input-border-color: rgb(255, 133, 133);
$input-border-focus-color: rgb(231, 53, 53);
$input-border-focus-shadow-color: $input-border-color;

.invalid {
    text-decoration: hotpink wavy underline;
}

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
