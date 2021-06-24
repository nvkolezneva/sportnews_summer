<template>
<div>
    <date-picker v-model="time2" type="datetime"></date-picker>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
export default {
    name: "DatePick",
    components: { DatePicker },
    data() {
      return {
        time2: null
      };
    },
 
};
</script>
<style lang="scss" scoped>

</style>