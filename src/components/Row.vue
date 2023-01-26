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
        :isGray="isFirstCellListGray"/>
      <template v-if="isClickedButton">
        <CellList
          @change-teacher-input="data => onChangeTeacherInput(data, 1)"
          data-cell-list-id="1"
          @click="isSecondCellListGray = !isSecondCellListGray"
          :isGray="isSecondCellListGray"/>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import CellList from './CellList.vue'
import { defineProps, toRaw, ref, defineEmits } from 'vue'

const props = defineProps({
  number: {
    type: Number,
    required: true
  }
})

const rawProps = toRaw(props)

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

  & button {
    font-weight: 600;
  }
}

button {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
}
</style>
