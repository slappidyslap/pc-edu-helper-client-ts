<template>
    <div class="d-flex flex-wrap gap-3 justify-content-center">
        <template v-for="groupName in groupNames" :key="groupName">
            <Table :group-name="groupName" @change-teacher-input="func"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import GroupProcesser from '@/ts/GroupProcesser'
import { onBeforeMount } from 'vue'
import Table from './Table.vue'

function func (data: {
  target: HTMLInputElement,
  cellListId: 1 | 0,
  isCellListGray: boolean,
  weekName: string
  rowNumber: number
}) {
  console.log(data)
}

const groupNames: Array<string> = []
onBeforeMount(() => {
  const groupProcesser = new GroupProcesser()
  const computedGroupNames: Array<string> = groupProcesser.computeGroupNames()
  groupNames.push(...computedGroupNames)
})

</script>

<style scoped>

</style>
