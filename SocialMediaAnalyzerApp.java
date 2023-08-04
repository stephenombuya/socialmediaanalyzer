package socialmediaanalyzer;

public class SocialMediaAnalyzerApp {

	public static void main(String[] args) {
		        // Create a social media analyzer
		        SocialMediaAnalyzer analyzer = new SocialMediaAnalyzer();

		        // Create some posts
		        Post post1 = new Post("1", "Hello world!");
		        post1.setLikes(10);
		        post1.setComments(5);
		        post1.setShares(3);

		        Post post2 = new Post("2", "Check out this amazing photo!");
		        post2.setLikes(20);
		        post2.setComments(8);
		        post2.setShares(2);

		        Post post3 = new Post("3", "Exciting news!");
		        post3.setLikes(15);
		        post3.setComments(10);
		        post3.setShares(4);

		        // Add posts to the analyzer
		        analyzer.addPost(post1);
		        analyzer.addPost(post2);
		        analyzer.addPost(post3);

		        // Calculate and display average engagement metrics
		        double avgLikes = analyzer.calculateAverageLikes();
		        double avgComments = analyzer.calculateAverageComments();
		        double avgShares = analyzer.calculateAverageShares();
		        System.out.println("Average likes: " + avgLikes);
		        System.out.println("Average comments: " + avgComments);
		        System.out.println("Average shares: " + avgShares);

		        // Display posts with high engagement
		        double threshold = 25.0;
		        analyzer.displayPostsWithHighEngagement(threshold);
		    }
		}

