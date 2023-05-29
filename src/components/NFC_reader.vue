<template>
  <div>
    <button @click="startNFCReader">Start NFC Reader</button>
    <button @click="stopNFCReader">Stop NFC Reader</button>
    <div v-if="cardData">
      <h2>Card Data:</h2>
      <p>{{ cardData }}</p>
    </div>
  </div>
</template>

<script>
import { NFC } from "nfc-pcsc";

export default {
  data() {
    return {
      cardData: "",
      nfc: null,
    };
  },
  methods: {
    startNFCReader() {
      this.nfc = new NFC();

      this.nfc.on("reader", (reader) => {
        console.log(`New reader detected: ${reader.name}`);

        reader.on("card", async (card) => {
          console.log("Card detected");

          const uid = card.uid;
          console.log(`Card UID: ${uid}`);

          // You can perform any additional processing with the card UID or card data here
          // For example, send it to a backend server or update the component's data

          this.cardData = uid;
        });

        reader.on("error", (err) => {
          console.error("Reader error", err);
        });

        reader.on("end", () => {
          console.log("Reader disconnected");
          this.cardData = "";
        });
      });

      this.reader.on("error", (err) => {
        console.error("PCSC error", err);
      });
    },
    stopNFCReader() {
      if (this.reader) {
        this.reader.close();
        this.reader = null;
        this.cardData = "";
      }
    },
  },
  beforeUnmount() {
    this.stopNFCReader();
  },
};
</script>
