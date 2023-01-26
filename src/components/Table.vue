<template>
    <div>
        <div class="group-name main-border"> {{ rawProps.groupName }} </div>
        <div>
          <template v-for="weekName in weekNames" :key="weekName">
            <InnerTable :week-name="weekName" @change-teacher-input="data => $emit('change-teacher-input', data)"/>
          </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import InnerTable from './InnerTable.vue'
import { defineProps, toRaw, defineEmits } from 'vue'

defineEmits(['change-teacher-input'])

const props = defineProps({
  groupName: {
    type: String,
    required: true
  }
})
const rawProps = toRaw(props)

const weekNames = [
  'Понедельник', 'Вторник', 'Среда',
  'Четверг', 'Пятница', 'Суббота']

</script>

<style scoped lang="scss">
@import '@/scss/custom.scss';

.group-name {
    text-align: center;
    font-weight: 600;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px 0;
}
</style>
