<script setup lang="ts">
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-vue-next'

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  assunto: '',
  mensagem: '',
  consentimento: false
})

const assuntos = [
  'Consultoria e Impulsionamento',
  'Assessoria de Imprensa',
  'Comercial e Consultoria',
  'Direção Artística e Produção Executiva',
  'Produção Cultural e Captação de Recursos',
  'Assessoria para o 3º Setor',
  'Gestão de Mídias',
  'Outro'
]

const enviando = ref(false)
const enviado = ref(false)

const handleSubmit = async () => {
  enviando.value = true

  // Por enquanto apenas simulamos o envio.
  // Depois conectaremos ao backend / Netlify Function.

  await new Promise(resolve => setTimeout(resolve, 800))

  enviado.value = true
  enviando.value = false
}
</script>

<template>
  <div class="contact-page">

    <!-- HERO -->

    <section class="contact-hero">
      <div class="contact-hero-overlay"></div>

      <div class="contact-hero-content">
        <span class="contact-label">
          ENTRE EM CONTATO
        </span>

        <h1>
          Vamos conversar sobre
          seu próximo projeto.
        </h1>

        <p>
          Conte para a HD'ARTE sobre sua ideia, projeto
          ou necessidade. Nossa equipe está pronta para
          entender como podemos ajudar.
        </p>
      </div>
    </section>


    <!-- CONTATO -->

    <section class="contact-section">
      <div class="section-container">

        <div class="contact-grid">

          <!-- INFORMAÇÕES -->

          <div class="contact-info">

            <span class="contact-section-label">
              FALE COM A HD'ARTE
            </span>

            <h2>
              Transforme sua ideia
              em projeto.
            </h2>

            <p>
              Preencha o formulário e conte um pouco
              sobre o que você precisa. Retornaremos
              para conversar sobre as possibilidades.
            </p>

            <div class="contact-details">

              <div class="contact-detail">
                <div class="contact-detail-icon">
                  <Mail :size="21" :stroke-width="1.5" />
                </div>

                <div>
                  <span>E-mail</span>
                  <strong>contato@hdarte.com.br</strong>
                </div>
              </div>

              <div class="contact-detail">
                <div class="contact-detail-icon">
                  <Phone :size="21" :stroke-width="1.5" />
                </div>

                <div>
                  <span>Telefone</span>
                  <strong>Entre em contato</strong>
                </div>
              </div>

              <div class="contact-detail">
                <div class="contact-detail-icon">
                  <MapPin :size="21" :stroke-width="1.5" />
                </div>

                <div>
                  <span>Atuação</span>
                  <strong>Brasil</strong>
                </div>
              </div>

            </div>

          </div>


          <!-- FORMULÁRIO -->

          <div class="contact-form-wrapper">

            <form
              v-if="!enviado"
              class="contact-form"
              @submit.prevent="handleSubmit"
            >

              <div class="form-row">

                <div class="form-group">
                  <label for="nome">
                    Nome
                  </label>

                  <input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    required
                  >
                </div>

                <div class="form-group">
                  <label for="email">
                    E-mail
                  </label>

                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                  >
                </div>

              </div>


              <div class="form-row">

                <div class="form-group">
                  <label for="telefone">
                    Telefone / WhatsApp
                  </label>

                  <input
                    id="telefone"
                    v-model="form.telefone"
                    type="tel"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                  >
                </div>

                <div class="form-group">
                  <label for="assunto">
                    Serviço
                  </label>

                  <select
                    id="assunto"
                    v-model="form.assunto"
                    name="assunto"
                    required
                  >
                    <option value="">
                      Selecione um serviço
                    </option>

                    <option
                      v-for="assunto in assuntos"
                      :key="assunto"
                      :value="assunto"
                    >
                      {{ assunto }}
                    </option>
                  </select>
                </div>

              </div>


              <div class="form-group">
                <label for="mensagem">
                  Mensagem
                </label>

                <textarea
                  id="mensagem"
                  v-model="form.mensagem"
                  name="mensagem"
                  rows="7"
                  placeholder="Conte um pouco sobre seu projeto ou necessidade..."
                  required
                ></textarea>
              </div>


              <label class="form-checkbox">

                <input
                  v-model="form.consentimento"
                  type="checkbox"
                  required
                >

                <span>
                  Autorizo o uso dos dados enviados para
                  que a HD'ARTE possa entrar em contato.
                </span>

              </label>


              <button
                type="submit"
                class="contact-submit"
                :disabled="enviando"
              >
                <span>
                  {{ enviando ? 'Enviando...' : 'Enviar mensagem' }}
                </span>

                <ArrowRight
                  v-if="!enviando"
                  :size="18"
                  :stroke-width="1.8"
                />
              </button>

            </form>


            <!-- SUCESSO -->

            <div
              v-else
              class="contact-success"
            >
              <div class="contact-success-icon">
                ✓
              </div>

              <h3>
                Mensagem enviada.
              </h3>

              <p>
                Obrigado pelo contato. A equipe da HD'ARTE
                receberá sua mensagem e retornará em breve.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

  </div>
</template>