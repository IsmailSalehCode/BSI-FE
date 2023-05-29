<template>
  <div>
    <button @click="startNFCReader">Start NFC Reader</button>
    <ul>
      <li v-for="record in nfcRecords" :key="record.recordId">
        {{ record }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nfcRecords: [],
    };
  },
  methods: {
    startNFCReader() {
      /* eslint-disable no-undef */
      const reader = new NDEFReader();
      reader.addEventListener("reading", this.handleNFCReading);
      reader
        .scan()
        .then(() => {
          console.log("NFC reader started successfully.");
        })
        .catch((error) => {
          console.error("Error starting NFC reader:", error);
        });
    },
    handleNFCReading(event) {
      const records = event.message.records;
      this.nfcRecords = records;
    },
  },
};
</script>
