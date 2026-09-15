<script setup lang="ts">
import {
  Lightbulb,
  Target,
  Users,
  Layers,
  ArrowRight
} from 'lucide-vue-next'
</script>

<template>
  <div class="about-page">

    <!-- HERO -->
    <section class="about-hero">

      <div class="about-hero-overlay"></div>

      <div class="about-hero-content">

        <span class="about-label">
          SOBRE A HD'ARTE
        </span>

        <h1>
          Transformamos ideias
          em projetos que ganham vida.
        </h1>

        <p>
          Desenvolvemos, produzimos e gerenciamos projetos
          culturais, artísticos e eventos, conectando ideias,
          pessoas e oportunidades.
        </p>

      </div>

    </section>


    <!-- QUEM SOMOS -->
    <section class="about-intro">

      <div class="section-container">

        <div class="about-intro-grid">

          <div class="about-section-label">
            <span>QUEM SOMOS</span>
          </div>

          <div class="about-intro-content">

            <h2>
              Experiência para transformar
              projetos em realidade.
            </h2>

            <p>
              A HD'ARTE atua no desenvolvimento e na gestão
              de projetos culturais, artísticos e eventos,
              acompanhando diferentes etapas de uma iniciativa,
              desde a concepção da ideia até sua realização.
            </p>

            <p>
              Nosso trabalho combina planejamento, estratégia,
              produção e gestão para construir projetos
              consistentes, viáveis e conectados aos seus
              objetivos e públicos.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- PILARES -->
    <section class="about-pillars">

      <div class="section-container">

        <div class="about-heading">

          <span>
            NOSSA ATUAÇÃO
          </span>

          <h2>
            Mais do que executar.
            Construir junto.
          </h2>

        </div>


        <div class="about-pillars-grid">

          <article class="about-pillar">

            <div class="about-pillar-icon">
              <Lightbulb
                :size="34"
                :stroke-width="1.4"
              />
            </div>

            <span>01</span>

            <h3>
              Estratégia
            </h3>

            <p>
              Transformamos ideias em projetos estruturados,
              considerando objetivos, público, planejamento
              e possibilidades de execução.
            </p>

          </article>


          <article class="about-pillar">

            <div class="about-pillar-icon">
              <Target
                :size="34"
                :stroke-width="1.4"
              />
            </div>

            <span>02</span>

            <h3>
              Planejamento
            </h3>

            <p>
              Organizamos cada etapa do projeto para criar
              processos mais claros, eficientes e alinhados
              aos resultados esperados.
            </p>

          </article>


          <article class="about-pillar">

            <div class="about-pillar-icon">
              <Users
                :size="34"
                :stroke-width="1.4"
              />
            </div>

            <span>03</span>

            <h3>
              Conexão
            </h3>

            <p>
              Aproximamos projetos, profissionais, parceiros
              e oportunidades para ampliar seu potencial
              de realização.
            </p>

          </article>


          <article class="about-pillar">

            <div class="about-pillar-icon">
              <Layers
                :size="34"
                :stroke-width="1.4"
              />
            </div>

            <span>04</span>

            <h3>
              Gestão
            </h3>

            <p>
              Acompanhamos a execução e a organização dos
              projetos, buscando consistência em cada etapa.
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- PROCESSO -->
    <section class="about-process">

      <div class="section-container">

        <div class="about-process-grid">

          <div>

            <span class="about-process-label">
              COMO TRABALHAMOS
            </span>

            <h2>
              Da primeira ideia
              ao projeto realizado.
            </h2>

          </div>


          <div class="about-process-list">

            <div class="about-process-item">

              <span>01</span>

              <div>
                <h3>Concepção</h3>

                <p>
                  Entendemos a ideia, os objetivos e o
                  contexto do projeto.
                </p>
              </div>

            </div>


            <div class="about-process-item">

              <span>02</span>

              <div>
                <h3>Estruturação</h3>

                <p>
                  Organizamos a proposta, planejamento,
                  orçamento e estratégia.
                </p>
              </div>

            </div>


            <div class="about-process-item">

              <span>03</span>

              <div>
                <h3>Desenvolvimento</h3>

                <p>
                  Trabalhamos na construção e preparação
                  das diferentes etapas do projeto.
                </p>
              </div>

            </div>


            <div class="about-process-item">

              <span>04</span>

              <div>
                <h3>Execução</h3>

                <p>
                  Acompanhamos a realização e a gestão
                  das atividades planejadas.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- CTA -->
    <section class="about-cta">

      <div class="section-container">

        <div class="about-cta-content">

          <span>
            VAMOS CRIAR JUNTOS?
          </span>

          <h2>
            Tem uma ideia para transformar em projeto?
          </h2>

          <NuxtLink
            to="/contato"
            class="about-cta-button"
          >
            Entre em contato

            <ArrowRight
              :size="18"
              :stroke-width="1.8"
            />
          </NuxtLink>

        </div>

      </div>

    </section>

  </div>
</template>