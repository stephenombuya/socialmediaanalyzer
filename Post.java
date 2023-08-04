package socialmediaanalyzer;

import java.util.ArrayList;
import java.util.List;

 public class Post {
    private String postId;
    private String content;
    private int likes;
    private int comments;
    private int shares;

    public Post(String postId, String content) {
        this.postId = postId;
        this.content = content;
        this.likes = 0;
        this.comments = 0;
        this.shares = 0;
    }

    // Getters and setters

    public String getPostId() {
        return postId;
    }

    public void setPostId(String postId) {
        this.postId = postId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getComments() {
        return comments;
    }

    public void setComments(int comments) {
        this.comments = comments;
    }

    public int getShares() {
        return shares;
    }

    public void setShares(int shares) {
        this.shares = shares;
    }

    @Override
    public String toString() {
        return "Post{" +
                "postId='" + postId + '\'' +
                ", content='" + content + '\'' +
                ", likes=" + likes +
                ", comments=" + comments +
                ", shares=" + shares +
                '}';
    }
}

	

