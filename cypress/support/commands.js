// Custom command for authentication if needed
Cypress.Commands.add("login", () => {
  // Add your authentication logic here
  // For example:
  cy.window().then((window) => {
    window.localStorage.setItem(
      "user",
      JSON.stringify({
        _id: "testUserId",
        username: "testuser",
        // Add other necessary user data
      })
    );
  });
});
