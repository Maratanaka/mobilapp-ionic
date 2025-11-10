<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>AxoraData</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Üdv újra, {{ user }}!</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p>Itt jelenhetnek meg az információk, például hírek vagy statisztikák.</p>
          <ion-button expand="block" @click="logout">Kijelentkezés</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFocus } from '@/composables/useFocus'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue'

export default {
  name: 'HomePage',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent },
  setup() {
    useFocus()

    const router = useRouter()
    const user = ref(localStorage.getItem('user'))

    function logout() {
      localStorage.removeItem('user')
      router.push('/')
    }

    return { user, logout }
  }
}
</script>

<style scoped>
ion-card {
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

ion-card-title {
  font-size: 20px;
  font-weight: bold;
  color: #222;
}

ion-card-content p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}

ion-button {
  --border-radius: 12px;
  --background: #ff3b30; /* piros kijelentkezés */
  --color: #fff;
  font-weight: bold;
  margin-top: 15px;
}

ion-button:hover {
  --background: #ff5c4d;
}
</style>
