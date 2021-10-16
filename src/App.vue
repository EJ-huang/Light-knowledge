<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Class from './components/Class.vue';
import Agenda from './components/Agenda.vue';
import News from './components/News.vue';
import Advantage from './components/Advantage.vue';
import Question from './components/Question.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Header />
    <Content />
    <Class />
    <Agenda />
    <News />
    <Advantage />
    <Question />
    <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
