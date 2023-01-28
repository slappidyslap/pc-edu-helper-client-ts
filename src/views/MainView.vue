<template>
    <TableList/>
</template>

<script setup lang="ts">
import TableList from '@/components/TableList.vue'
import GroupSchema from '@/ts/GroupSchema'
import GroupProcesser from '@/ts/GroupProcesser'

const groupProcesser = new GroupProcesser()

const arr = groupProcesser.computeGroupNames()

arr.forEach(g => {
  const groupSchema = new GroupSchema(g)
  console.log(groupSchema)
})
</script>

<style scoped>

</style>
