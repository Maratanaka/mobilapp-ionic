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

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useFocus } from '@/composables/useFocus'
import { IonPage, IonContent, IonItem, IonInput, IonSelect, IonSelectOption, IonButton, IonCard, IonCardContent } from '@ionic/vue'

export default {
  name: 'RegisterPage',
  components: { IonPage, IonContent, IonItem, IonInput, IonSelect, IonSelectOption, IonButton, IonCard, IonCardContent },
  setup() {
    useFocus()
    
    const mounted = ref(false)
    onMounted(() => { mounted.value = true }) // IonSelect csak kliens oldalon jelenik meg

    const fullName = ref('')
    const email = ref('')
    const password = ref('')
    const role = ref('')
    const router = useRouter()

    function register() {
      if(fullName.value && email.value && password.value && role.value){
        localStorage.setItem('user', email.value)
        router.push('/home')
      } else {
        alert('Tölts ki minden mezőt!')
      }
    }

    return { fullName, email, password, role, mounted, register }
  }
}
</script>
