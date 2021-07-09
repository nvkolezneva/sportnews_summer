<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ item_news.header }}</h1>
          <h2 class="subtitle">
            <strong>Дата:</strong>
            {{ item_news.dateAdd }}
            <br />
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ item_news.body }}</p>
        <p>
          <b>Категория:</b>
          <small class="is-size-5">
            {{ item_news.category }}
          </small>
        </p>
        <!-- <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in item_news.images" :key="image.id" class="column is-one-third">
            <img :src="`${image}`" :alt="`${item_news.name}`" />
          </div>
        </div> -->
      </div>
      <div class="form">
        <textarea
          class="form-control mb-4"
          v-model="message"
          cols="30"
          rows="10"
        ></textarea>
        <button class="btn btn-primary" @click="addComment()">Отправить</button>
      </div>
      <div class="list my-5">
        <div class="card mb-3" v-for="comment in comments" :key="comment.id">
          <div class="card-body">
            <h5 class="card-title">{{ comment.name }}</h5>
            <p class="card-text">{{ comment.message }}</p>
            <button
              v-if="comment.name == $auth.user.name"
              @click="deleteComment(comment.id)"
            >
              Удалить
            </button>
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
      comment: { message: "", name: "Пользователь" },

      news: [
        {
          id: 1,
          header: "Новость 1",
          body: "Что-то про баскетбол",
          category: "первая",
          featuredImage:
            "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg",
          images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Russia_vs_Germany_%284032059160%29.jpg/1200px-Russia_vs_Germany_%284032059160%29.jpg",
            "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg"
          ],
          dateAdd: "12-25-2019"
        },
        {
          id: 1,
          header: "Новость 2",
          body: "Что-то про футбол",
          category: "первая",
          featuredImage:
            "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg",
          images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Russia_vs_Germany_%284032059160%29.jpg/1200px-Russia_vs_Germany_%284032059160%29.jpg",
            "https://aif-s3.aif.ru/images/018/748/e504a4cffbe41b7667d6dcbb3fad14d4.jpg"
          ],
          dateAdd: "12-25-2019"
        }
      ],
      item_news: {},
      comments: [
        {
          id: "0",
          name: "user",
          message: "Мой длинный текст",
          unswers: []
        },
        {
          id: "1",
          name: "admin@gmail.com",
          message: "Мой длинный текст",
          unswers: []
        }
      ]
    };
  },
  methods: {
    addComment() {
      var rez = {
        id: this.comments[this.comments.length - 1].id + 1,
        name: this.$auth.user.name,
        message: this.message
      };
      this.comments.push(rez);
      this.name = "Пользователь";
      this.message = "";
    },
    deleteComment(id) {
      this.comments.splice(id,1);
    }
  },
  created() {
    const ID = Number(this.$route.params.id);
    let item_news = this.news.find(item_news => item_news.id === ID);
    this.item_news = item_news;
  }
};
</script>
