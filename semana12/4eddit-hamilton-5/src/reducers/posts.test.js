import { setAllPosts, setPostDetails} from "../actions/posts"
import { setLoading } from "../actions/global"
import posts from "./posts"

describe("Posts Reducer", () => {
    test("SET_ALL_POSTS", () => {
        const mockPost = [{ votesCount: 1, userVoteDirection: 1, commentsCount: 2, id: "XFM8JtoESiWKqCml3Rjz", username: "natalia", text: "My post!" }]

        const mockStatePosts=  { posts: [] };
        
        const mockAction = setAllPosts(mockPost)
    
        const newState = posts(mockStatePosts, mockAction);

        expect(newState.posts).toHaveLength(1);
        expect(newState.posts).toBe(mockPost);
    });

    test("SET_POST_DETAILS", () => {
        const mockComment = "My Comment"
        
        const mockStatePostDetails=  { post: null };
        
        const mockAction = setPostDetails(mockComment)
    
        const newState = posts(mockStatePostDetails, mockAction);
    
        expect(newState.post).toBe(mockComment);
    });

    test("SET_LOADING", () => {
        const mockLoading = true
        
        const mockStateLoading= { isLoading: false };
        
        const mockAction = setLoading(mockLoading)

    
        // Execução
        const newState = posts(mockStateLoading, mockAction);
    
         //Verificação
        expect(newState.isLoading).toBe(mockLoading);
    });
})