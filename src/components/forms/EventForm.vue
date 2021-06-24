<template>
  <div class="event-form">
  <h2 class="subtitle is-3">Запись на мероприятия</h2>
 <label class="label">Дата</label>
  <div class="">
 <date-pick></date-pick>
</div>
<label class="label">Мероприятие</label>
<div class="select is-medium">
  <select >
    <option>111</option>
    <option>1111</option>
  </select>
</div>
<div class="control">
  <button class="is-centered button is-warning is-light is-medium">Записаться</button>
</div>
  </div>
</template>
<script>
import DatePick from '../DatePick.vue';
export default {
  components: { DatePick },
    name: "NewsCard",
};
</script>
<style lang="scss" scoped>
.event-form{
     text-align: center;
}
.control{
    text-align: center !important;
}
</style>