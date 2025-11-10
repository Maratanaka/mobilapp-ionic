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
          <ion-label position="floating">Email</ion-label>
          <ion-input v-model="email" type="email"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Jelszó</ion-label>
          <ion-input v-model="password" type="password"></ion-input>
        </ion-item>

        <ion-button expand="block" class="ion-margin-top" @click="login">
          Bejelentkezés
        </ion-button>

        <p class="ion-text-center ion-margin-top">
          Még nincs fiókod?
          <router-link to="/register">Regisztráció</router-link>
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
import { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/vue'

export default {
  name: 'LoginPage',
  components: { IonPage, IonContent, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardContent },
  setup() {
    useFocus()

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function login() {
      if (email.value && password.value) {
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

<style scoped>
.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px; /* így tolódik le a tartalom */
}


.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* távolság a form felett */
}

.app-logo {
  height: 350px; /* a logó magassága */
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
  --background: #387eff; /* Ionic kék */
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

router-link {
  color: #3880ff;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
