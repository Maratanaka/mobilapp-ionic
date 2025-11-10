<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="login-wrapper">
        <div class="logo-container">
          <img src="\axoradata_white.png" alt="App Logo" class="app-logo" />
        </div>

        <ion-card>
          <ion-card-content>
            <ion-item>
              <ion-input v-model="email" type="email" placeholder="Email"></ion-input>
            </ion-item>

            <ion-item>
              <ion-input v-model="password" type="password" placeholder="Jelszó"></ion-input>
            </ion-item>

            <ion-button expand="block" class="ion-margin-top" @click="login">
              Bejelentkezés
            </ion-button>

            <p class="ion-text-center ion-margin-top">
              Még nincs fiókod?
              <router-link to="/register" class="no-underline">Regisztráció</router-link>
            </p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import supabase from '@/supabase'
import {
  IonPage, IonContent, IonItem, IonInput, IonButton, IonCard, IonCardContent
} from '@ionic/vue'

const email = ref('')
const password = ref('')
const router = useRouter()

async function login() {
  if (!email.value || !password.value) {
    alert('Kérlek, töltsd ki mindkét mezőt!')
    return
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email.value)
    .single()

  if (error) {
    alert('Nincs ilyen felhasználó!')
    return
  }

  if (data.password_hash === password.value) {
    localStorage.setItem('fullName', data.full_name)
    localStorage.setItem('role', data.role)
    router.push('/home')
  } else {
    alert('Hibás jelszó.')
  }
}
</script>
