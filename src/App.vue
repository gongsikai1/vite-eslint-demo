<script setup lang="ts">

import { RouterView, RouterLink, useRoute } from 'vue-router'

const route = useRoute()

import { ref, onMounted, onUnmounted } from 'vue';

import moment from 'moment';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  console.log('onMounted', t)
});

</script>

<template>
  <div>
    <p>HELLO WORLD / from App.vue</p>
    <RouterView />
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
