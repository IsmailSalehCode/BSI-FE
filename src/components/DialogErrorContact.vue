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
            :key="item.text"
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
            <v-divider v-if="isNotLast(item.text)"></v-divider>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { useContactStore } from "@/stores/contactStore";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      dialog: false,
      contactItems: [
        {
          context: "E-mail",
          text: this.contactStore.email.text,
          path: this.contactStore.email.path,
        },
        {
          context: "Tel. number 1:",
          text: this.contactStore.phone1.text,
          path: this.contactStore.phone1.path,
        },
        {
          context: "Tel. number 2:",
          text: this.contactStore.phone2.text,
          path: this.contactStore.phone2.path,
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
    isNotLast(itemtext) {
      const arr = this.contactItems;
      const lastIndex = arr.length - 1;
      for (let i = 0; i < arr.length; i++) {
        const currItem = arr[i];
        if (currItem.text == itemtext) {
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
