<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Модулярни/сглобяеми къщи</h1>
        <h2>Срок на изпълнение: 20-30 дни</h2>
        <v-btn
          style="text-transform: none"
          variant="outlined"
          @click="openDialog('see-stages')"
          >{{ $t("btn-label-see-stages") }}</v-btn
        >
        <h3>Неограничени възможности</h3>
        <p>
          Всякакъв брой етажи, всякаква квадратура на етаж и всякакво
          разпределение. Разгледайте примерни имплементации по-долу.
        </p>
      </v-col>
    </v-row>
    <DialogMHousesStages ref="see_stages" />
  </v-container>
</template>
<script>
import DialogMHousesStages from "../components/DialogMHousesStages.vue";

export default {
  components: {
    DialogMHousesStages,
  },
  methods: {
    openDialog(action) {
      switch (action) {
        case "see-stages":
          this.$refs.see_stages.open();
          break;
      }
    },
  },
};
</script>
<style></style>
