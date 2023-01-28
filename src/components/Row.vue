<template>
  <div class="d-flex">
    <div class="group-row-number main-border">
      <button @click="onClickButton"> <span> {{ rawProps.number }} </span></button>
    </div>
    <div>
      <CellList
        @change-teacher-input="data => onChangeTeacherInput(data, 0)"
        data-cell-list-id="0"
        @click.alt="isFirstCellListGray = !isFirstCellListGray"
        :isGray="isFirstCellListGray"
        :changed-teacher-input-data="changedTeacherInputData"/>
      <template v-if="isClickedButton">
        <CellList
          @change-teacher-input="data => onChangeTeacherInput(data, 1)"
          data-cell-list-id="1"
          @click="isSecondCellListGray = !isSecondCellListGray"
          :isGray="isSecondCellListGray"
          :changed-teacher-input-data="changedTeacherInputData"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import CellList from './CellList.vue'
import { defineProps, toRaw, ref, defineEmits, toRef } from 'vue'
import { ChangedTeacherInputData } from '@/ts/ChangedTeacherInputData'

const props = defineProps<{
  number: number,
  changedTeacherInputData?: ChangedTeacherInputData
}>()

const rawProps = toRaw(props)

const changedTeacherInputData = toRef(rawProps, 'changedTeacherInputData')

const emit = defineEmits(['change-teacher-input'])
function onChangeTeacherInput (data: {target: HTMLInputElement, isCellListGray: boolean}, cellListId: 0 | 1) {
  emit('change-teacher-input', Object.assign(data, { cellListId }))
}

const isClickedButton = ref(false)
function onClickButton () {
  isClickedButton.value = !isClickedButton.value
}

const isFirstCellListGray = ref(false)
const isSecondCellListGray = ref(false)

</script>

<style scoped lang="scss">
@import "@/scss/custom.scss";

.group-row-number {
  display: flex;
  width: 25px;
  text-align: center;
  align-items: center;
  justify-content: center;
}

button {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
