export default {
  data() {
    return {
      showErrorMsg: false,
      showSuccessMsg: false,
    };
  },
  methods: {
    // Methods to set the alert visibility flags
    setError(err) {
      this.showErrorMsg = true;
      // Optionally display error message: this.errorMsg = err;
    },
    setSuccess() {
      this.showSuccessMsg = true;
    },
    // Methods to reset the flags
    clearAlerts() {
      this.showErrorMsg = false;
      this.showSuccessMsg = false;
    },
  },
};
