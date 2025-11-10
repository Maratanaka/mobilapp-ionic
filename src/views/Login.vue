<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="page-wrapper">

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

            <ion-button expand="block" @click="login">Bejelentkezés</ion-button>

            <p>
              Még nincs fiókod?
              <router-link to="/register" class="no-underline">Regisztráció</router-link>
            </p>
          </ion-card-content>
        </ion-card>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFocus } from '@/composables/useFocus'
import { IonPage, IonContent, IonItem, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/vue'

export default {
  name: 'LoginPage',
  components: { IonPage, IonContent, IonItem, IonInput, IonButton, IonCard, IonCardContent },
  setup() {
    useFocus()
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function login() {
      if(email.value && password.value){
        localStorage.setItem('user', email.value)
        router.push('/home')
      } else {
        alert('Tölts ki minden mezőt!')
      }
    }

    return { email, password, login }
  }
}
</script>
