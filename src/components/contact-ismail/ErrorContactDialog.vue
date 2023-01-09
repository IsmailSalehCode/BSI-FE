<template>
  <!-- IN CASE OF BACKEND FAILURE -->
  <v-dialog max-width="300px" v-model="dialog">
    <v-card>
      <v-toolbar density="compact">
        <v-spacer></v-spacer>
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-container fluid>
          <v-row
            v-for="item in contactItems"
            :key="item.context"
            justify="center"
            align="center"
          >
            <v-col>
              <p>
                <b>{{ item.context }}</b
                >:<br />{{ item.text }}
              </p>
            </v-col>
            <v-col style="text-align: end">
              <v-btn
                size="x-small"
                icon="mdi-share-circle"
                class="wow"
                :href="item.path"
                target="_blank"
                rel="noopener noreferrer"
              >
              </v-btn>
            </v-col>
            <v-divider v-if="isNotLast(item.context)"></v-divider>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { useIsmailStore } from "@/stores/ismailStore";

export default {
  setup() {
    const ismailStore = useIsmailStore();
    return { ismailStore };
  },
  data() {
    return {
      dialog: false,
      contactItems: [
        {
          context: "E-mail",
          text: this.ismailStore.email.text,
          path: this.ismailStore.email.path,
        },
        {
          context: "Instagram",
          text: this.ismailStore.instagram.text,
          path: this.ismailStore.instagram.path,
        },
        {
          context: "Facebook",
          text: this.ismailStore.facebook.text,
          path: this.ismailStore.facebook.path,
        },
      ],
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    isNotLast(itemContext) {
      const arr = this.contactItems;
      const lastIndex = arr.length - 1;
      for (let i = 0; i < arr.length; i++) {
        const currItem = arr[i];
        if (currItem.context == itemContext) {
          if (lastIndex == i) {
            // is last
            return false;
          }
          // is not last
          return true;
        }
      }
    },
  },
};
</script>
<style scoped>
p {
  line-height: 25px;
}
</style>
