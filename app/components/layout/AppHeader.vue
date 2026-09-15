<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="header"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <div class="header-container">

      <NuxtLink
  to="/"
  class="logo"
  @click="closeMenu"
>
  <img
    src="~/assets/images/logo.png"
    alt="HD'ARTE"
  >
</NuxtLink>

      <nav class="navigation">
        <NuxtLink to="/">Início</NuxtLink>
        <NuxtLink to="/servicos">Serviços</NuxtLink>
        <NuxtLink to="/projetos">Projetos</NuxtLink>
        <NuxtLink to="/eventos">Eventos</NuxtLink>
        <NuxtLink to="/sobre">Sobre</NuxtLink>
        <NuxtLink to="/contato">Contato</NuxtLink>
      </nav>

      <div class="header-actions">

        <button
          class="search-button"
          type="button"
          aria-label="Pesquisar"
        >
          ⌕
        </button>

        <button
          class="menu-button"
          type="button"
          aria-label="Abrir menu"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </div>

    <Transition name="mobile-menu">
      <nav
        v-if="isMenuOpen"
        class="mobile-navigation"
      >
        <NuxtLink to="/" @click="closeMenu">
          Início
        </NuxtLink>

        <NuxtLink to="/servicos" @click="closeMenu">
          Serviços
        </NuxtLink>

        <NuxtLink to="/projetos" @click="closeMenu">
          Projetos
        </NuxtLink>

        <NuxtLink to="/eventos" @click="closeMenu">
          Eventos
        </NuxtLink>

        <NuxtLink to="/sobre" @click="closeMenu">
          Sobre
        </NuxtLink>

        <NuxtLink to="/contato" @click="closeMenu">
          Contato
        </NuxtLink>
      </nav>
    </Transition>

  </header>
</template>