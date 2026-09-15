<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  projects: {
    title: string
    category: string
    status: string
    image: string
    link: string
  }[]
}>()

const row = ref<HTMLElement | null>(null)

const scrollRow = (direction: 'left' | 'right') => {
  if (!row.value) return

  const amount = row.value.clientWidth * 0.75

  row.value.scrollBy({
    left: direction === 'right' ? amount : -amount,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section class="project-row-section">
    <div class="section-container">

      <div class="project-row-header">
        <h2>{{ title }}</h2>

        <NuxtLink
          to="/projetos"
          class="project-row-link"
        >
          Ver todos
        </NuxtLink>
      </div>

    </div>

    <div class="project-row-wrapper">

      <button
        class="project-row-arrow project-row-arrow-left"
        type="button"
        aria-label="Projetos anteriores"
        @click="scrollRow('left')"
      >
        ‹
      </button>

      <div
        ref="row"
        class="project-row"
      >
        <ProjectsProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>

      <button
        class="project-row-arrow project-row-arrow-right"
        type="button"
        aria-label="Próximos projetos"
        @click="scrollRow('right')"
      >
        ›
      </button>

    </div>
  </section>
</template>