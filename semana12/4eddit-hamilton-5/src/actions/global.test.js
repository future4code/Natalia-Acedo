import { setLoading } from "./global";

describe("Global Actions", () => {
  test("setLoading", () => {
    // Preparação
    const mockLoading = true

    // Execução
    const action = setLoading(mockLoading);

    // Verificação
    expect(action.type).toBe("SET_LOADING");
    expect(action.payload.loading).toBe(mockLoading);
  })
})