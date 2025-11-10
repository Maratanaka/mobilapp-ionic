<template>
  <ion-page>
    <ion-content fullscreen>
      <div class="page-wrapper">

        <div class="logo-container">
          <img src="\axoradata_white.png" alt="App Logo" class="app-logo" />
        </div>

        <ion-card>
          <ion-card-content>
            <h2>Üdv újra, {{ user }}!</h2>
            <p>Itt jelenhetnek meg az információk, például hírek, adatok vagy statisztikák.</p>

            <ion-button expand="block" @ionFocus="logout" @click="logout">Kijelentkezés</ion-button>
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

    onMounted(() => {
      const storedUser = localStorage.getItem('user')
      if(!storedUser) router.push('/')
      else user.value = storedUser
    })

    onIonViewWillEnter(() => {
      const wrapper = document.querySelector('.page-wrapper')
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
