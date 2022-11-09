import userController from "../../user/user.controller";

describe("계산", () => {
  test("2 더하기 2 는 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("2 + 2 는 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("userController", () => {
  it("login 이 함수인가?", () => {
    expect(typeof new userController().login).toBe("function");
  });
});
