<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Добро пожаловать на SportNews        
        </h1>
        <h2 class="subtitle">
          Здесь вы можете найти самые свежие новости про спорт и спортивные мероприятия
        </h2>
        <div class="button-block">
          <button v-if="!$auth.isAuthenticated" @click="login" class="button is-xl is-dark">Войдите</button>
          <h3 v-if="$auth.isAuthenticated" class="is-size-3 has-background-dark welcome">Рады видеть, {{ $auth.user.name }}!</h3>
        </div>
      </div>
    </div>
  </section>
  <NewsList />
</div>
</template>
<script>
import NewsList from '../components/NewsList';
export default {
  name: 'home',
  components: {
    NewsList
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    }
  }
}
</script>
<style lang="scss" scoped>
  .hero {    
    text-align: center;
    background-image: url('https://ru.unesco.org/sites/default/files/styles/extra_large_1600x1600/public/unesco-paragraphs/sport_and_anti-doping.png?itok=OhHVAR-s');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
  }
  .hero-body .title {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.6);
    padding: 40px 0 20px 0;
    font-size: 60px;
  }
  .subtitle {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    font-size: 30px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
</style>