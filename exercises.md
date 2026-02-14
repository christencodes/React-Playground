```
Project 1: The "Digital Business Card" (UI & Props Focus)
This project reinforces reusable components, dynamic attributes, and list rendering.

The Goal: Build a page that displays a grid of business cards for a team.

Requirements:

Create a UserCard component that accepts props for name, jobTitle, image, and an array of skills.

Use a List (.map()) to render cards from a dummy data array.

Conditional Styling: If a user’s job title is "Lead" or "Manager," give their card a special border color.

Dynamic Attributes: Make the "Contact" button on the card alert the user's name when clicked (Events).

Knowledge Reinforced: Props (44-46), Dynamic Content (42-43), Lists (58).

Project 2: The "Interactive Voting App" (State & Events Focus)
This project is much more "reactive." It forces you to manage State and Conditional Content.

The Goal: A "Feature Request" board where users can vote on which feature should be built next.

Requirements:

State: Maintain a list of features (e.g., "Dark Mode", "Mobile App", "API Access"). Each should have a voteCount.

Events: Clicking a "Vote" button must increment that specific feature's count.

Computed Values: Calculate the total number of votes cast across all features and display it at the top.

Conditional Content: If a feature reaches 10 votes, display a "🏆 Top Choice" badge on it. If there are no features in the list, show a "No features found" message.

Composition: Use the children prop (49) to create a generic Card wrapper that provides the shadow and padding for both the features and the total count box.

Knowledge Reinforced: Event Handling (50-52), State Hooks (54), Children Prop (49), Conditional Rendering (56).
```
