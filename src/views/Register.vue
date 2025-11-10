<template>
  <ion-page>
    <ion-content fullscreen class="ion-padding-top">
      <div class="register-wrapper">

        <!-- Logó -->
        <div class="logo-container">
          <img src="\axoradata_white.png" alt="App Logo" class="app-logo" />
        </div>

        <!-- Regisztráció card -->
        <ion-card>
          <ion-card-content>

            <!-- Email input -->
            <ion-item>
              <ion-input 
                v-model="email" 
                type="email" 
                placeholder="Email">
              </ion-input>
            </ion-item>

            <!-- Password input -->
            <ion-item>
              <ion-input 
                v-model="password" 
                type="password" 
                placeholder="Jelszó">
              </ion-input>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFocus } from '@/composables/useFocus'
import { IonPage, IonContent, IonItem, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/vue'

export default {
  name: 'RegisterPage',
  components: { IonPage, IonContent, IonItem, IonInput, IonButton, IonCard, IonCardContent },
  setup() {
    useFocus()

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function register() {
      if (email.value && password.value) {
        localStorage.setItem('user', email.value)
        router.push('/home')
      } else {
        alert('Tölts ki minden mezőt!')
      }
    }

    return { email, password, register }
  }
}
</script>

<style scoped>
.no-underline {
  color: #3880ff;
  text-decoration: none !important;
  font-weight: bold;
}

.register-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px; /* lentebb tolja a tartalmat a full-screen miatt */
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.app-logo {
  height: 350px;
  width: auto;
}

ion-card {
  width: 90%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

ion-card-content {
  display: flex;
  flex-direction: column;
}

ion-item {
  margin-bottom: 15px;
}

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

p {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}
</style>
