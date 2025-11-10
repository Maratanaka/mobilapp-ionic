<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="page-wrapper">

        <div class="logo-container">
          <img src="\axoradata_white.png" alt="App Logo" class="app-logo" />
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
import supabase from '@/supabase'
import {
  IonPage, IonContent, IonItem, IonInput, IonSelect,
  IonSelectOption, IonButton, IonCard, IonCardContent
} from '@ionic/vue'

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

  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        full_name: fullName.value,
        email: email.value,
        password_hash: password.value, // jelszó hash később
        role: role.value
      }
    ])

  if (error) {
    alert(error.message)
  } else {
    alert('Sikeres regisztráció!')
    router.push('/')
  }
}
</script>

<style scoped>
/* Fehér háttér és fekete szöveg a select mezőnél */
ion-select, ion-select .select-interface {
  --background: #fff !important;
  --color: #000 !important;
}

/* Opciók listája */
ion-select-option {
  --background: #fff !important;
  --color: #000 !important;
}

</style>

