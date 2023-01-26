<template>
  <div class="d-flex">
    <div class="group-inner-table-week main-border">
      {{ rawProps.weekName }}
    </div>
    <div>
      <RowList @change-teacher-input="data => onChangeTeacherInput(data, rawProps.weekName)"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import RowList from './RowList.vue'
import { defineProps, toRaw, defineEmits } from 'vue'

const props = defineProps({
  weekName: {
    type: String,
    required: true
  }
})
const rawProps = toRaw(props)

const emit = defineEmits(['change-teacher-input'])
type ReturningData = {
  target: HTMLInputElement,
  cellListId: 1 | 0,
  rowNumber: number
}
function onChangeTeacherInput (data: ReturningData, weekName: string) {
  emit('change-teacher-input', Object.assign(data, { weekName }))
}
</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";

.group-inner-table-week {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  writing-mode: vertical-rl;
  font-weight: 600;
}
</style>
