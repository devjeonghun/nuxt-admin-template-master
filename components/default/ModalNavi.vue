<template>
<div>
  <v-dialog v-model="modalDialog" width="800px">
    <v-card>
      <v-card-title>
        Create contact
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs12 align-center justify-space-between>
            <v-layout align-center>
              <v-avatar size="40px" class="mr-3">
                <img
                  src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                  alt=""
                >
              </v-avatar>
              <v-text-field
                placeholder="Name"
              ></v-text-field>
            </v-layout>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              prepend-icon="business"
              placeholder="Company"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              placeholder="Job title"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="mail"
              placeholder="Email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              type="tel"
              prepend-icon="phone"
              placeholder="(000) 000 - 0000"
              mask="phone"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              prepend-icon="notes"
              placeholder="Notes"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn flat color="primary">More</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
        <v-btn flat @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
export default {
  props: ['dialog'],
  data: () => ({
    modalDialog: null
  }),
  watch: {
    dialog (value) {
      this.modalDialog = value;
    },
    modalDialog (value) {
      this.$emit('isDialog', value)
    }
  }
}
</script>