<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="page-wrapper">

        <div class="logo-container">
          <img src="/axoradata_white.png" alt="App Logo" class="app-logo" />
        </div>

        <ion-card>
          <ion-card-content>

            <!-- Teljes név -->
            <ion-item>
              <ion-input v-model="fullName" type="text" placeholder="Teljes név"></ion-input>
            </ion-item>

            <!-- Email -->
            <ion-item>
              <ion-input v-model="email" type="email" placeholder="Email"></ion-input>
            </ion-item>

            <!-- Jelszó -->
            <ion-item>
              <ion-input v-model="password" type="password" placeholder="Jelszó"></ion-input>
            </ion-item>

            <!-- Beosztás select -->
            <ion-item>
              <ion-select v-if="mounted" v-model="role" placeholder="Válassz beosztást">
                <ion-select-option value="developer">Fejlesztő</ion-select-option>
                <ion-select-option value="designer">Designer</ion-select-option>
                <ion-select-option value="manager">Manager</ion-select-option>
                <ion-select-option value="other">Egyéb</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-button expand="block" class="ion-margin-top" @click="register">
              Regisztráció
            </ion-button>

            <p class="ion-text-center ion-margin-top">
              Van már fiókod?
              <router-link to="/" class="no-underline">Bejelentkezés</router-link>
            </p>

          </ion-card-content>
        </ion-card>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonContent, IonItem, IonInput, IonSelect, IonSelectOption, IonButton, IonCard, IonCardContent } from '@ionic/vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const mounted = ref(false)
const router = useRouter()

onMounted(() => { mounted.value = true })

async function register() {
  if (!fullName.value || !email.value || !password.value || !role.value) {
    alert('Tölts ki minden mezőt!')
    return
  }

  // Itt jön a regisztráció logikád, pl. supabase hívás
  alert('Sikeres regisztráció!')
  router.push('/')
}
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

/* Logo */
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.app-logo {
  height: 150px;
  width: auto;
}

/* Card */
ion-card {
  width: 90%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin: 0 auto;
}

/* Input és Select világos színek */
ion-item, ion-input, ion-select {
  --background: #ffffff !important;
  --color: #000000 !important;
  --placeholder-color: #999999 !important;
}

/* Select felugró lista világos színek */
body .sc-ion-select-md-h {
  --background: #ffffff !important;
  --color: #000000 !important;
}

/* Button */
ion-button {
  --border-radius: 12px;
  --background: #387eff;
  --color: #fff;
  font-weight: bold;
  padding: 12px 0;
}
ion-button:hover {
  --background: #4c8dff;
}

/* Link */
.no-underline {
  color: #3880ff !important;
  text-decoration: none !important;
  font-weight: bold;
}
</style>
