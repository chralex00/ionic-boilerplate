<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary" />
                </ion-buttons>
                <ion-title>Ionic Boilerplate</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <div id="container">
                <p>
                    Explore
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ionicframework.com/docs"
                        >Ionic Docs</a
                    >
                </p>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/vue";
</script>
