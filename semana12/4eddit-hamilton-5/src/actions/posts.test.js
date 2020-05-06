import { setAllPosts, setPostDetails } from "./posts";

describe("Posts Actions", () => {
  test("setAllPosts", () => {
    // Preparação
    const mockPost = "Hi!"

    // Execução
    const action = setAllPosts(mockPost);

    // Verificação
    expect(action.type).toBe("SET_ALL_POSTS");
    expect(action.payload.post).toBe(mockPost);
  });

  test("setPostDetails", () => {
    // Preparação
    const mockPostDetails = "My comment!"

    // Execução
    const action = setPostDetails(mockPostDetails);

    // Verificação
    expect(action.type).toBe("SET_POST_DETAILS");
    expect(action.payload.comment).toBe(mockPostDetails);
  });
});
