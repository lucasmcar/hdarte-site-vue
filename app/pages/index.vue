<template>
  <div class="home">

    <HeroProject
      category="Projeto cultural"
      status="Em andamento"
      title="DJ Ize apresenta: Nostalgia Hip Hop 90’s & 2000’s + Baile Charme"
      description="Um projeto cultural dedicado à música, à cultura urbana e à valorização da memória do Hip Hop e do Baile Charme."
      image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2400&q=85"
      link="/projetos"
    />

    <ProjectsProjectRow
  title="Projetos em destaque"
  :projects="featuredProjects"
/>

  </div>
</template>
<script setup lang="ts">
const featuredProjects = [
  {
    title: "DJ Ize apresenta: Nostalgia Hip Hop 90’s & 2000’s + Baile Charme",
    category: "Música",
    status: "Em andamento",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    link: "/projetos"
  },
  {
    title: "Projeto Cultural HD'ARTE",
    category: "Cultura",
    status: "Em captação",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    link: "/projetos"
  },
  {
    title: "Arte, Música e Cultura",
    category: "Cultura",
    status: "Em andamento",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80",
    link: "/projetos"
  },
  {
    title: "Experiências Culturais",
    category: "Eventos",
    status: "Em captação",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1200&q=80",
    link: "/projetos"
  },
  {
    title: "Cultura em Movimento",
    category: "Cultura",
    status: "Em andamento",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
    link: "/projetos"
  }
]
</script>