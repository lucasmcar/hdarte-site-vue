<script setup lang="ts">
defineProps<{
  category: string
  status: string
  title: string
  description: string
  image: string
  link: string
}>()
</script>

<template>
  <section
    class="hero-project"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="hero-project-overlay"></div>

    <div class="hero-project-content">
      <div class="hero-project-meta">
        <span>{{ category }}</span>
        <span>{{ status }}</span>
      </div>

      <h1>{{ title }}</h1>

      <p>
        {{ description }}
      </p>

      <NuxtLink
        :to="link"
        class="hero-project-button"
      >
        Saiba mais
      </NuxtLink>
    </div>
  </section>
</template>