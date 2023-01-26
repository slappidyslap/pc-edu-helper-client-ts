<template>
    <div>
        <template v-for="num in rowNumberArray" :key="num">
            <Row :number="num" @change-teacher-input="data => onChangeTeacherInput(data, num) " />
        </template>
    </div>
</template>

<script setup lang="ts">
import Row from './Row.vue'
import { defineEmits } from 'vue'

const rowNumberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8]

const emit = defineEmits(['change-teacher-input'])
function onChangeTeacherInput (data: {target: HTMLInputElement, cellListId: 1 | 0}, rowNumber: number) {
  emit('change-teacher-input', Object.assign(data, { rowNumber }))
}

</script>

<style scoped>

</style>
