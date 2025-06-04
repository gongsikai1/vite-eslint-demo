<script setup lang="ts">

import { RouterLink, useRoute, useRouter } from 'vue-router'

import { ref, onMounted, onUnmounted } from 'vue';

// import moment, { locale } from 'moment';
import moment from 'moment';
import { useI18n } from 'vue-i18n'
import TheWelcome from '../components/TheWelcome.vue'

const { t, locale } = useI18n()

onMounted(() => {
  console.log('onMounted', t)
});

</script>

<template>
  <!-- <div class="about"> -->
  <div>
    <p>HELLO WORLD / from HomeView.vue</p>
    <TheWelcome />
  </div>
</template>

<style scoped>
</style>

