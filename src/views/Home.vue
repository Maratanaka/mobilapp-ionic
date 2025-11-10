<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="home-wrapper">

        <!-- Üdvözlő logó / ikon -->
        <div class="logo-container">
          <img src="\axoradata_white.png" alt="App Logo" class="app-logo" />
        </div>

        <!-- Információs card -->
        <ion-card>
          <ion-card-content>
            <h2>Üdv újra, {{ user }}!</h2>
            <p>Itt jelenhetnek meg az információk, például hírek, adatok vagy statisztikák.</p>

            <ion-button expand="block" class="ion-margin-top" @click="logout">
              Kijelentkezés
            </ion-button>
          </ion-card-content>
        </ion-card>

      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/vue'
import { onIonViewWillEnter } from '@ionic/vue'

export default {
  name: 'HomePage',
  components: { IonPage, IonContent, IonCard, IonCardContent, IonButton },
  setup() {
    const user = ref('')
    const router = useRouter()

    // Ha nincs bejelentkezve, visszadob a login-ra
    onMounted(() => {
      const storedUser = localStorage.getItem('user')
      if(!storedUser) router.push('/')
      else user.value = storedUser
    })

    // Margin-top beállítása fullscreen-hez
    onIonViewWillEnter(() => {
      const wrapper = document.querySelector('.home-wrapper')
      if(wrapper) wrapper.style.marginTop = '60px'
    })

    function logout() {
      localStorage.removeItem('user')
      router.push('/')
    }

    return { user, logout }
  }
}
</script>

<style scoped>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin: 0 auto;
}

ion-card-content {
  display: flex;
  flex-direction: column;
  text-align: center;
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

h2 {
  margin-bottom: 10px;
}
</style>
