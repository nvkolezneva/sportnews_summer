<template>
  <div class="events container">
    <h2 class="subtitle is-3">Мероприятия</h2>

    <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                v-model="searchValue"
                @icon-click="searchIconClick">
            </b-input>
        </b-field>
    <div class="columns is-multiline">
      <div v-for="event in searchEvents" :event="event" :key="event.id" class="column is-one-quarter">
        <router-link :to="`/event/${event.id}`">
          <EventCard :event="event" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard";
export default {
  name: "EventsList",
  components: {
    EventCard
  },
  data() {
    return {
      event: {},
      searchValue: '',
      events: [
        {
          id: 1,
          name: "ААААААА",
          category: "Баскетбол",
          description:
            "Что-то про баскетбол",
          featuredImage: "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg",
          images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Russia_vs_Germany_%284032059160%29.jpg/1200px-Russia_vs_Germany_%284032059160%29.jpg",
            "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg"
          ],
          location: "Москва",
          date: "12-25-2019",
          time: "11:30"
        },
        {
          id: 2,
          name: "Новость 2",
          category: "Футбол",
          description:
            "Что-то про футбол",
          featuredImage: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg",
          images: ["https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg"],
          location: "Воронеж",
          date: "11-21-2019",
          time: "12:00"
        }
      ],
    };
  },
  computed: {
    
    searchEvents() {
      let filterEvent = this.events
    // Process search input
    if (this.searchValue != '' && this.searchValue) {
        filterEvent = filterEvent.filter((event) => {
          return event.name
            .toUpperCase()
            .includes(this.searchValue.toUpperCase())
        })
      }
      return filterEvent
    }
  }
};
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}

</style>