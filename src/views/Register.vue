<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Regisztráció</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
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

          <ion-button expand="block" class="ion-margin-top" @click="register">
            Regisztráció
          </ion-button>

          <p class="ion-text-center ion-margin-top">
            Van már fiókod?
            <router-link to="/">Bejelentkezés</router-link>
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFocus } from '@/composables/useFocus'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardContent } from '@ionic/vue'

export default {
  name: 'RegisterPage',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton, IonCard, IonCardContent },
  setup() {
    useFocus()

    const email = ref('')
    const password = ref('')
    const router = useRouter()

    function register() {
      localStorage.setItem('user', email.value)
      router.push('/home')
    }

    return { email, password, register }
  }
}
</script>

<style scoped>
ion-card {
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
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
  --background: #10dc60; /* zöld */
  --color: #fff;
  font-weight: bold;
  padding: 12px 0;
}

ion-button:hover {
  --background: #28e08f;
}

p {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

router-link {
  color: #10dc60;
  text-decoration: none;
}

router-link:hover {
  text-decoration: underline;
}
</style>
