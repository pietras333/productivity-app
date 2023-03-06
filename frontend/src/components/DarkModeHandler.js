const DarkModeHandler = {
  setMode(value) {
    if (value === "dark") {
      return localStorage.setItem("mode", "dark");
    }
    return localStorage.setItem("mode", "light");
  },

  getMode() {
    return localStorage.getItem("mode");
  },

  changeMode() {
    if (this.getMode() === "dark") {
      console.log("HELLO FROM DARK");
      return localStorage.setItem("mode", "light");
    }
    console.log("HELLO FROM LIGHT");
    return localStorage.setItem("mode", "dark");
  },

  echoMode() {
    console.log("Mode:", this.getMode());
  },
};

export default DarkModeHandler;
