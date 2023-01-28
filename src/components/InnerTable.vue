<template>
  <div class="d-flex">
    <div class="group-inner-table-week main-border">
      {{ rawProps.weekName }}
    </div>
    <div>
      <RowList
        @change-teacher-input="data => onChangeTeacherInput(data, rawProps.weekName)"
        :changed-teacher-input-data="changedTeacherInputData"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import RowList from './RowList.vue'
import { defineProps, toRaw, defineEmits, ref, toRef } from 'vue'
import { ChangedTeacherInputData } from '@/ts/ChangedTeacherInputData'

const props = defineProps<{
  weekName: string,
  changedTeacherInputData?: ChangedTeacherInputData
}>()
const rawProps = toRaw(props)

const changedTeacherInputData = toRef(rawProps, 'changedTeacherInputData')

const emit = defineEmits(['change-teacher-input'])
function onChangeTeacherInput (
  data: {
    target: HTMLInputElement,
    cellListId: 1 | 0,
    rowNumber: number
  },
  weekName: string
) {
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
