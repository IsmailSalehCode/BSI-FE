<template>
  <v-container style="max-width: 460px">
    <v-card v-if="!finished" :loading="loadingSendBtn" elevation="6">
      <v-card-title class="pb-2 darkCardTitle">Contact Form</v-card-title>
      <hr />
      <v-form
        ref="form"
        v-model="valid"
        :disabled="disabledForm"
        @submit.prevent
        @submit="submit"
      >
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model.trim="name"
                dense
                label="Name"
                :rules="[
                  rules.required,
                  rules.max(50),
                  rules.onlyLetters,
                  rules.min(3),
                ]"
                validate-on-blur
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            v-model.trim="email"
            type="email"
            style="max-width: 300px"
            validate-on-blur
            :rules="emailRules"
            dense
            label="E-mail"
            outlined
          ></v-text-field>
          <v-text-field
            v-model.trim="phone"
            style="max-width: 300px"
            dense
            label="Tel. number"
            :rules="[rules.max(22)]"
            outlined
          ></v-text-field>
          <v-textarea
            v-model.trim="message"
            validate-on-blur
            :rules="[rules.required, rules.min(10), rules.max(1000)]"
            outlined
            placeholder="Your message here..."
          ></v-textarea>
          <hr />
          <br />
          <v-row justify="center">
            <v-col justify="center" class="pb-2">
              <v-row
                v-if="!captchaToken"
                style="text-align: center"
                class="pb-1"
                justify="center"
              >
                Tap on the white square next to 'I am not a robot'
              </v-row>
              <v-row style="justify-content: center">
                <v-col class="pb-3" justify="center" align="center">
                  <vue-recaptcha
                    ref="recaptcha"
                    :sitekey="captchaSiteKey"
                    language="en"
                    @verify="enablePosting"
                    @expired="disablePosting"
                  ></vue-recaptcha>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            :disabled="captchaToken ? false : true"
            :color="captchaToken ? 'success' : ''"
            type="submit"
            :loading="loadingSendBtn"
            class="info"
            >Send</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
    <v-alert class="mb-0" v-if="ok" type="success">
      Your inquiry has been sent our way!
      <!-- Your inquiry has been sent our way! -->
    </v-alert>
    <v-alert class="mb-0" v-if="notOk" type="error">
      Your inquiry was not sent! Please contact
      <!-- Your inquiry was not sent! Please contact -->
      <b>{{ devMail }}</b>
    </v-alert>
  </v-container>
</template>

<script>
import CFService from "../services/ContactFormService";
import { useContactStore } from "@/stores/contactStore";
import { VueRecaptcha } from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  setup() {
    const store = useContactStore();

    return { store };
  },
  data() {
    return {
      captchaSiteKey: process.env.VUE_APP_CAPTCHA_KEY,
      devMail: "centriu78@gmail.com",
      captchaToken: null,
      phone: null,
      disabledForm: false,
      emailRules: this.store.emailRules,
      rules: this.store.rules,
      valid: true,
      name: null,

      email: null,
      message: null,
      loadingSendBtn: false,
      finished: false,
      ok: false,
      notOk: false,
    };
  },
  methods: {
    enablePosting(response) {
      this.captchaToken = response;
    },
    disablePosting() {
      this.captchaToken = null;
      this.$refs.recaptcha.reset();
    },
    async submit() {
      if (this.captchaToken != null) {
        if (this.$refs.form.validate()) {
          this.loadingSendBtn = true;
          this.disabledForm = true;
          let response = null;
          try {
            response = await CFService.addForm(this.captchaToken, {
              name: this.name,
              phone: this.phone,
              email: this.email,
              message: this.message,
            });
            if (this.isSuccessful(response)) {
              this.ok = true;
            } else {
              throw new Error("Response is not 200");
            }
          } catch (err) {
            this.disablePosting();
            //  this.handleAsyncError(err);
            this.notOk = true;
          }
          this.finished = true;
        }
      }
    },
  },
};
</script>
<style>
.darkCardTitle {
  background-color: rgb(14, 14, 14);
  color: #ffffff;
}
</style>
