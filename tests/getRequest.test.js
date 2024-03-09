const request = require("supertest");
const app = require("../src/app");

describe("GET Request Tests", () => {
  test("GET /health should return 'Server is healthy' message", async () => {
    request(app)
      .get("/health")
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Server is healthy");
      });
  });

  test("GET /users should return an array of users", async () => {
    request(app)
      .get("/users")
      .expect(200)
      .then((response) => {
        expect(response.body.users).toEqual([
          { id: 1, name: "John" },
          { id: 2, name: "Doe" },
        ]);
      });
  });

  test("GET /users/:id should return a user with the given id", async () => {
    request(app)
      .get("/users/1")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ id: "1", name: "John" });
      });
  });
});
