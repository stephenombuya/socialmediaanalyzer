package socialmediaanalyzer;

import java.util.*;

public class SocialMediaAnalyzer {

	    private List<Post> posts;

	    public SocialMediaAnalyzer() {
	        this.posts = new ArrayList<>();
	    }

	    public void addPost(Post post) {
	        posts.add(post);
	    }

	    public double calculateAverageLikes() {
	        int totalLikes = 0;
	        for (Post post : posts) {
	            totalLikes += post.getLikes();
	        }
	        return (double) totalLikes / posts.size();
	    }

	    public double calculateAverageComments() {
	        int totalComments = 0;
	        for (Post post : posts) {
	            totalComments += post.getComments();
	        }
	        return (double) totalComments / posts.size();
	    }

	    public double calculateAverageShares() {
	        int totalShares = 0;
	        for (Post post : posts) {
	            totalShares += post.getShares();
	        }
	        return (double) totalShares / posts.size();
	    }

	    public void displayPostsWithHighEngagement(double threshold) {
	        System.out.println("Posts with high engagement (above threshold " + threshold + "):");
	        for (Post post : posts) {
	            double engagementScore = calculateEngagementScore(post);
	            if (engagementScore > threshold) {
	                System.out.println(post);
	            }
	        }
	    }

	    private double calculateEngagementScore(Post post) {
	        // Define your own engagement score calculation logic
	        // Example: engagement score = likes + 2 * comments + 3 * shares
	        return post.getLikes() + 2 * post.getComments() + 3 * post.getShares();
	    }
	}
