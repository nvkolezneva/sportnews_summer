<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ event.name }}</h1>
          <h2 class="subtitle">
            <strong>Дата:</strong>
            {{ event.date }}
            <br />
            <strong>Время:</strong>
            {{ event.time }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ event.description }}</p>
        <p class="is-size-5">
          <strong>Место:</strong>
          {{ event.location }}
        </p>
        <p class="is-size-5">
          <strong>Категория:</strong>
          {{ event.category }}
        </p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in event.images" :key="image.id" class="column is-one-third">
            <img :src="`${image}`" :alt="`${event.name}`" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "EventSingle",
  data() {
    return {
       events: [
        {
          id: 1,
          name: "Новость 1",
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
      event: {}
    };
  },
  created() {
    const ID = Number(this.$route.params.id);
    let event = this.events.find(event => event.id === ID);
    this.event = event;
  }
};
</script>