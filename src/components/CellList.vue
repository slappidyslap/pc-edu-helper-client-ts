<template>
    <div :class="isGray ? 'gray-cell-list' : ''">
        <Cell :type="CellType.SUBJECT"/>
        <Cell :type="CellType.TARGET"/>
        <TeacherCell :type="CellType.TEACHER" @change-teacher-input="onChangeTeacherInput" />
        <Cell :type="CellType.AUDIENCE"/>
    </div>
</template>

<script setup lang="ts">
import CellType from '@/ts/CellType'
import Cell from './Cell.vue'
import TeacherCell from './TeacherCell.vue'
import { defineEmits, defineProps, toRefs } from 'vue'

const emit = defineEmits(['change-teacher-input'])

const props = defineProps<{
    isGray: boolean
}>()

const isGray = toRefs(props).isGray

function onChangeTeacherInput (target: HTMLInputElement) {
  emit('change-teacher-input', { target, isCellListGray: isGray.value })
}
</script>

<style scoped>

.gray-cell-list {
    background-color: rgba(189, 189, 189, 0.5);
}

</style>
