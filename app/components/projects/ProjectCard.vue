<script setup lang="ts">
defineProps<{
  title: string
  category: string
  status: string
  image: string
  link: string
}>()
</script>

<template>
  <NuxtLink
    :to="link"
    class="project-card"
  >
    <div class="project-card-image">

      <img
        :src="image"
        :alt="title"
        loading="lazy"
      >

      <div class="project-card-overlay"></div>

      <div class="project-card-info">

        <span class="project-card-category">
          {{ category }}
        </span>

        <h3>
          {{ title }}
        </h3>

        <div class="project-card-details">
          <span class="project-card-status">
            {{ status }}
          </span>

          <span class="project-card-more">
            Saiba mais →
          </span>
        </div>

      </div>
    </div>
  </NuxtLink>
</template>