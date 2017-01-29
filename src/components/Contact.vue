<template>
  <div>
    <div class="mdl-grid portfolio-max-width portfolio-contact">
      <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
          <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">
              Contact
            </h2>
          </div>
          <div class="mdl-card__media">

          </div>
          <div class="mdl-card__supporting-text">
            <p>
              Please feel free to contact me, by submitting the info below.
            </p>
            <form name="contactForm">
                <div class="input mdl-js-textfield input--floating-label">
                  <input type="text"
                         class="mdl-textfield__input"
                         id="contactInfoName"
                         v-model="contactInfo.name">
                  <label for="contactInfoName" class="mdl-textfield__label">
                    Name
                  </label>
                  <span class="input__error">Letters and spaces only</span>
                </div>
                <div class="input mdl-js-textfield input--floating-label">
                  <input type="text"
                         class="mdl-textfield__input"
                         id="contactInfoEmail"
                         v-model="contactInfo.email">
                  <label for="contactInfoEmail" class="mdl-textfield__label">
                    Email
                  </label>
                </div>
                <div class="input mdl-js-textfield input--floating-label">
                  <input type="text"
                         class="mdl-textfield__input"
                         id="contactInfoNote"
                         v-model="contactInfo.note">
                  <label for="contactInfoNote" class="mdl-textfield__label">
                    Note
                  </label>
                </div>
                <p>
                  <button class="mdl-button
                                 mdl-js-button
                                 mdl-button--raised
                                 mdl-js-ripple-effect
                                 mdl-button--colored"
                          type="submit">
                    Submit
                  </button>
                </p>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
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
