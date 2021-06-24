<template>
  <div class="events container">
    <h2 class="subtitle is-1">Новости</h2>
    <div class="select">
  <select v-model="selectedCategory">
    <option value="All">Все</option>
    <option value="Баскетбол">Баскетбол</option>
    <option value="Футбол">Футбол</option>
  </select>
</div><div class="columns is-multiline">
  

      <div v-for="item_news in filteredNews" :item_news="item_news" :key="item_news.id" class="column is-one-quarter">
        <router-link :to="`/item_news/${item_news.id}`">
          <NewsCard :item_news="item_news" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCard from "@/components/NewsCard";
export default {
  name: "NewsList",
  components: {
    NewsCard
  },
  data() {
    return {
      item_news: {},
      news: [
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
      selectedCategory: "All"
    };
  },
  computed: {
		filteredNews: function() {
			var category = this.selectedCategory;
			
			if(category === "All") {
				return this.news;
			} else {
				return this.news.filter(function(item_news) {
					return item_news.category === category;
				});
			}
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