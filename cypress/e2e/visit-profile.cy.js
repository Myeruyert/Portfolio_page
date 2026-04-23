describe("ViewProfile Page", () => {
  beforeEach(() => {
    // Set up authentication directly in localStorage
    cy.window().then((window) => {
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          _id: "testUserId",
          username: "testuser",
        })
      );
    });

    // Mock user authentication
    cy.intercept("POST", "/api/graphql", (req) => {
      if (req.body.operationName === "GetOneUser") {
        req.reply({
          data: {
            getOneUser: {
              _id: "123",
              username: "testuser",
              name: "Test User",
              bio: "Test bio",
              accountVisibility: "PUBLIC",
              avatar: "test-avatar.jpg",
            },
          },
        });
      }
    }).as("getOneUser");

    cy.intercept("POST", "/api/graphql", (req) => {
      if (req.body.operationName === "GetFollowStatus") {
        req.reply({
          data: {
            getFollowStatus: {
              _id: "456",
              status: "NONE",
            },
          },
        });
      }
    }).as("getFollowStatus");

    // Visit the profile page with a test user ID
    cy.visit("/profile/123");
  });

  it("should render the profile page correctly", () => {
    cy.get('[data-cy="visit-profile-page"]').should("exist");
    cy.wait("@getOneUser");
    cy.wait("@getFollowStatus");
  });

  describe("Public Profile Tests", () => {
    it("should display public profile content", () => {
      cy.get('[data-cy="public-user"]').should("be.visible");
      cy.contains("POSTS").should("be.visible");
    });

    it("should handle follow button interactions", () => {
      // Mock follow request
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "SendFollowReq") {
          req.reply({
            data: {
              sendFollowReq: {
                status: "PENDING",
              },
            },
          });
        }
      }).as("sendFollowReq");

      cy.contains("Follow").click();
      cy.wait("@sendFollowReq");
      cy.contains("Requested").should("be.visible");
    });

    it("should handle unfollow interactions", () => {
      // Mock initial following status
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "GetFollowStatus") {
          req.reply({
            data: {
              getFollowStatus: {
                _id: "456",
                status: "APPROVED",
              },
            },
          });
        }
      }).as("getFollowStatus");

      // Mock unfollow request
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "Unfollow") {
          req.reply({
            data: {
              unfollow: {
                success: true,
              },
            },
          });
        }
      }).as("unfollow");

      cy.visit("/profile/123");
      cy.wait("@getFollowStatus");

      cy.contains("Following").click();
      cy.wait("@unfollow");
      cy.contains("Follow").should("be.visible");
    });
  });

  describe("Private Profile Tests", () => {
    beforeEach(() => {
      // Mock private profile data
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "GetOneUser") {
          req.reply({
            data: {
              getOneUser: {
                _id: "123",
                username: "testuser",
                name: "Test User",
                bio: "Test bio",
                accountVisibility: "PRIVATE",
                avatar: "test-avatar.jpg",
              },
            },
          });
        }
      }).as("getOneUser");

      cy.window().then((window) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            _id: "testUserId",
            username: "testuser",
          })
        );
      });

      cy.visit("/profile/123");
    });

    it("should display private profile content", () => {
      cy.get('[data-cy="public-user"]').should("not.exist");
      cy.contains("This Account is Private").should("be.visible");
    });

    it("should handle follow request for private account", () => {
      // Mock follow request for private account
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "SendFollowReq") {
          req.reply({
            data: {
              sendFollowReq: {
                status: "PENDING",
              },
            },
          });
        }
      }).as("sendFollowReq");

      cy.contains("Follow").click();
      cy.wait("@sendFollowReq");
      cy.contains("Requested").should("be.visible");
    });
  });

  describe("Error Handling", () => {
    beforeEach(() => {
      cy.window().then((window) => {
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            _id: "testUserId",
            username: "testuser",
          })
        );
      });
    });

    it("should handle API errors gracefully", () => {
      // Mock API error
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "GetOneUser") {
          req.reply({
            statusCode: 500,
            body: {
              errors: [
                {
                  message: "Internal server error",
                },
              ],
            },
          });
        }
      }).as("getOneUserError");

      cy.visit("/profile/123");
      cy.wait("@getOneUserError");
    });

    it("should handle follow request errors", () => {
      // Mock follow request error
      cy.intercept("POST", "/api/graphql", (req) => {
        if (req.body.operationName === "SendFollowReq") {
          req.reply({
            statusCode: 500,
            body: {
              errors: [
                {
                  message: "Failed to send follow request",
                },
              ],
            },
          });
        }
      }).as("sendFollowReqError");

      cy.contains("Follow").click();
      cy.wait("@sendFollowReqError");
    });
  });
});
