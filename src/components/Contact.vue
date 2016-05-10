<template>
<div class="mdl-grid portfolio-max-width portfolio-contact">
              <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                  <div class="mdl-card__title">
                      <h2 class="mdl-card__title-text">Contact</h2>
                  </div>
                  <div class="mdl-card__media">

                  </div>
                  <div class="mdl-card__supporting-text">
                      <p>
                          Please feel free to contact me, by submitting the info below.
                      </p>
                      <form action="#" class="">
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <mdl-textfield floating-label="Name" :value.sync="contactInfo.name"></mdl-textfield>
                              <span class="mdl-textfield__error">Letters and spaces only</span>
                          </div>
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                              <mdl-textfield floating-label="Email" :value.sync="contactInfo.email"></mdl-textfield>
                          </div>
                          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <mdl-textfield floating-label="Note" :value.sync="contactInfo.note"></mdl-textfield>
                          </div>
                          <p>
                              <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" type="submit">
                                  Submit
                              </button>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
</template>
<script>

import { MdlButton, MdlTextfield, directives } from 'vue-mdl';

export default {
  components: {
    MdlButton,
    MdlTextfield,
  },
  directives,
  data() {
    return {
      contactInfo: {
        name: '',
        email: '',
        note: '',
      },
    };
  },
  methods: {

  },
};
</script>
