<template>
  <ion-app class="force-light">
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>

<style>
.force-light {
  --ion-background-color: #ffffff;
  --ion-text-color: #000000;
   --ion-card-background: #ffffff;
    --ion-item-background: #ffffff;
}

</style>