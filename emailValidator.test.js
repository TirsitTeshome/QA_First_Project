const {isValidEmail} = require("./emailValidator");
test("Valid email addresses", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.co")).toBe(true);
    expect(isValidEmail("my-email123@service.net")).toBe(true);
});
test("Invalid email addresses", () => {
    expect(isValidEmail("invalidemail")).toBe(false);
    expect(isValidEmail("missing@domain")).toBe(false);
    expect(isValidEmail("@nouser.com")).toBe(false);
    expect(isValidEmail("plainaddress.com")).toBe(false);
});