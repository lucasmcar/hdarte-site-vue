<script setup lang="ts">
import {
  Compass,
  Presentation,
  FileText,
  Briefcase,
  ClipboardCheck,
  Landmark,
  Clapperboard,
  Workflow,
  Share2
} from 'lucide-vue-next'

const services = [
  {
    title: 'Consultoria e Assessoria de Projetos',
    description:
      'Planejamento e desenvolvimento de projetos culturais, artísticos e esportivos, com orientação estratégica em todas as etapas.',
    category: 'Consultoria',
    icon: Compass
  },
  {
    title: 'Palestras e Workshops',
    description:
      'Palestras e workshops voltados à cultura, gestão de eventos e desenvolvimento de projetos.',
    category: 'Formação',
    icon: Presentation
  },
  {
    title: 'Elaboração de Projetos Culturais e Artísticos',
    description:
      'Desenvolvimento de projetos para editais e leis de incentivo, transformando ideias em propostas estruturadas.',
    category: 'Projetos',
    icon: FileText
  },
  {
    title: 'Eventos Corporativos',
    description:
      'Planejamento e execução de eventos corporativos personalizados, conectando objetivos, experiências e público.',
    category: 'Eventos',
    icon: Briefcase
  },
  {
    title: 'Avaliação e Submissão de Propostas',
    description:
      'Análise, adequação e submissão de projetos para editais, buscando maior consistência e competitividade das propostas.',
    category: 'Projetos',
    icon: ClipboardCheck
  },
  {
    title: 'Captação de Recursos',
    description:
      'Estratégias para identificação e articulação de oportunidades de recursos para viabilização de projetos.',
    category: 'Captação',
    icon: Landmark
  },
  {
    title: 'Produção Artística e Executiva',
    description:
      'Planejamento, coordenação e execução da produção artística e executiva de eventos e projetos.',
    category: 'Produção',
    icon: Clapperboard
  },
  {
    title: 'Gestão Completa de Projetos',
    description:
      'Acompanhamento integrado das etapas do projeto, do planejamento à execução, com organização e controle.',
    category: 'Gestão',
    icon: Workflow
  },
  {
    title: 'Gestão de Mídias',
    description:
      'Gestão estratégica de redes sociais para ampliar a presença digital, fortalecer projetos e aproximar marcas e públicos.',
    category: 'Comunicação',
    icon: Share2
  }
]
</script>

<template>
  <div class="services-page">

    <!-- HERO -->
    <section class="services-hero">
      <div class="services-hero-overlay"></div>

      <div class="services-hero-content">
        <span class="services-label">HD'ARTE</span>

        <h1>
          Serviços que transformam ideias em projetos.
        </h1>

        <p>
          Da concepção à execução, atuamos no desenvolvimento,
          produção e gestão de projetos culturais, artísticos,
          esportivos e corporativos.
        </p>
      </div>
    </section>

    <!-- SERVIÇOS -->
    <section class="services-section">
      <div class="section-container">

        <div class="services-heading">
          <span>NOSSAS SOLUÇÕES</span>

          <h2>
            Experiência para cada etapa do seu projeto.
          </h2>
        </div>

        <div class="services-grid">

          <article
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card"
          >

            <!-- Número -->
            <span class="service-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <!-- Ícone -->
            <div class="service-icon">
              <component
                :is="service.icon"
                :size="34"
                :stroke-width="1.4"
              />
            </div>

            <!-- Conteúdo -->
            <div class="service-content">

              <span class="service-category">
                {{ service.category }}
              </span>

              <h3>
                {{ service.title }}
              </h3>

              <p>
                {{ service.description }}
              </p>

              <NuxtLink
                to="/contato"
                class="service-link"
              >
                Saiba mais
                <span>→</span>
              </NuxtLink>

            </div>

          </article>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="services-cta">
      <div class="section-container">

        <div class="services-cta-content">

          <span>VAMOS CONVERSAR?</span>

          <h2>
            Tem um projeto em mente?
          </h2>

          <p>
            Converse com a HD'ARTE e descubra como podemos
            ajudar a transformar sua ideia em realidade.
          </p>

          <NuxtLink
            to="/contato"
            class="services-cta-button"
          >
            Entre em contato
          </NuxtLink>

        </div>

      </div>
    </section>

  </div>
</template>