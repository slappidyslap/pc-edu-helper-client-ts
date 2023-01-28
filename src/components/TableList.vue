<template>
    <div class="d-flex flex-wrap gap-3 justify-content-center">
        <template v-for="groupName in groupNames" :key="groupName">
            <Table
              :group-name="groupName" @change-teacher-input="onChangeTeacherInput"
              :changed-teacher-input-data="changedTeacherInputData"/>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ChangedTeacherInputData } from '@/ts/ChangedTeacherInputData'
import GroupProcesser from '@/ts/GroupProcesser'
import { onBeforeMount, ref } from 'vue'
import Table from './Table.vue'

const changedTeacherInputData = ref<ChangedTeacherInputData | undefined>(undefined)
function onChangeTeacherInput (data: ChangedTeacherInputData) {
  changedTeacherInputData.value = data
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
