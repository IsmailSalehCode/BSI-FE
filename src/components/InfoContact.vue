<template>
  <v-container style="max-width: 1135px">
    <v-row style="justify-content: center">
      <!-- <v-col cols="12" sm="8" style="max-width: 800px">
        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11733.833938444843!2d23.2781873!3d42.6728295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85e09ccc6675%3A0xb54eb8de606cb88!2sBlue%20Sky%20Invest%20LTD!5e0!3m2!1sen!2sbg!4v1673862773176!5m2!1sen!2sbg"
            style="outline: 4px black auto"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </v-col> -->
      <v-col cols="12" sm="4" style="min-width: 320px">
        <v-card variant="outlined" tile style="max-width: 400px">
          <v-col cols="12">
            <v-row style="align-items: center">
              <v-col class="py-0">
                <h3 style="font-style: italic">
                  Construction Project Management since 1980
                </h3>
              </v-col>
              <v-col class="py-0">
                <v-img
                  aspect-ratio="1"
                  style="max-width: 150px"
                  src="../assets/logo-bsi.png"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
          <v-card-text>
            <p>
              <b>Address: </b>
              {{ contactStore.address.text }}
            </p>
            <p><b>E-mail: </b> {{ contactStore.email.text }}</p>
            <p>
              <b>Phone 1: </b>
              {{ contactStore.phone1.text }}
            </p>
            <p>
              <b>Phone 2: </b>
              {{ contactStore.phone2.text }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useContactStore } from "@/stores/contactStore";

export default {
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
};
</script>

<style scoped>
p {
  font: unset;
  line-height: 25px;
}
.map-responsive {
  overflow: hidden;

  padding-bottom: 56.25%;

  position: relative;

  height: 0;
}

.map-responsive iframe {
  left: 0;

  top: 0;

  height: 100%;

  width: 100%;

  position: absolute;
}
</style>
