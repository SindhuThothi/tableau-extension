function initialize() {
  tableau.extensions.initializeAsync().then(() => {
    alert("Extension initialized successfully (Jupyter hosting)");
  });
}
