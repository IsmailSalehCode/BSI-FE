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
      <v-card-title>Terms & Conditions</v-card-title>
      <v-card-text v-html="TC_Content"> </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      TC_Content:
        "<p><strong>INTRODUCTION</strong></p> <p>These terms and conditions govern your use of this website. By using this website, you accept these terms and conditions in full.</p> <p>&nbsp;</p> <p><strong>LICENSE TO USE WEBSITE</strong></p> <p>Unless otherwise stated, Blue Sky Invest, referred to as BSI from here on out, and/or its licensors, own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved. You may view, download for caching purposes only from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions. Without BSI&rsquo;s express written consent, you must not:</p> <ul> <li>republish material from this website (including republication on another website)</li> <li>print pages or other content</li> <li>sell, rent or sub-license material from the website</li> <li>reproduce, duplicate, copy or otherwise exploit material on this website with a commercial purpose</li> </ul> <p>&nbsp;</p> <p><strong>ACCEPTABLE USE</strong></p> <p>You may use this website to acquaint yourself with BSI&rsquo;s&nbsp;projects and information, contact them or apply for a job. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability and/or accessibility of the online services; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity. You must not conduct any systematic or automated data collection activities (including, without limitation, scraping, data mining, data extraction and data harvesting) on or in relation to this website without BSI&rsquo;s express written consent. You must not use this website to transmit or send unsolicited commercial communications. You must not use this website for any purposes related to marketing without BSI&rsquo;s express written consent.</p> <p>&nbsp;</p> <p><strong>RESTRICTED ACCESS</strong></p> <p>If BSI provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</p> <p>&nbsp;</p> <p><strong>USER CONTENT</strong></p> <p>In these terms and conditions, &ldquo;your user content&rdquo; means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose. It is kept private- between BSI&rsquo;s and your eyes. Your user content must not be illegal or unlawful, must not infringe any third party&rsquo;s legal rights, and must not be capable of giving rise to legal action whether against you or BSI or a third party (in each case under any applicable law). You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint. BSI reserves the right to edit or remove any material submitted to this website, or stored on it's&nbsp;servers, or hosted or published upon this website. Notwithstanding BSI&rsquo;s rights under these terms and conditions in relation to user content, BSI does not undertake to monitor the submission of such content to, or the publication of such content on, this website.</p> <p>&nbsp;</p> <p><strong>BREACHES OF THESE TERMS AND CONDITIONS</strong></p> <p>Without prejudice to BSI&rsquo;s other rights under these terms and conditions, if you breach these terms and conditions in any way, BSI may take such action as he deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers, using your IP address, from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.</p> <p>&nbsp;</p> <p><strong>VARIATION</strong></p> <p>BSI may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.</p> <p>&nbsp;</p> <p><strong>SEVERABILITY</strong></p> <p>If any judicial or other competent authority finds a provision of these terms to be illegal and / or inapplicable, the other published provisions shall remain in force.</p> <p>&nbsp;</p> <p><strong>ENTIRE AGREEMENT</strong></p> <p>These terms and conditions constitute the entire agreement between you and BSI in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p> <p>&nbsp;</p> <p><strong>LAW AND JURISDICTION</strong></p> <p>These terms and conditions will be governed by and construed in accordance with Bulgarian Law, and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of Bulgaria.</p> <p>&nbsp;</p>",
    };
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
<style scoped>
p {
  line-height: 25px;
}
</style>
