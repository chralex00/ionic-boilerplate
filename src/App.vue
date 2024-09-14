<template>
    <ion-app>
        <ion-split-pane content-id="main-content">
            <ion-router-outlet id="main-content" />
        </ion-split-pane>
    </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/vue";
</script>
