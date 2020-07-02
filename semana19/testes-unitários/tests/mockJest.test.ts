describe("Training jest.fn", () => {
  test("Creating validateCharacter Mocks, should return true", () => {
    const validateCharacter = jest.fn(() => {
      return true;
    });
  });

  test("Creating validateCharacter Mocks, should return false", () => {
    const validateCharacter = jest.fn(() => {
      return false;
    });
  });
});
