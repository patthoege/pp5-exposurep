Return to [README.md](/README.md)  

# Manual Testing  

## Methodology  
Throughout  testing has been performed and is described below, it contains of manual test to check that all user stories and acceptance criteria are met, as well as testing and validating the code with different online tools as presented below.  


### Registration 
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **User signup page** | Test link is working | User is directed to the signup page | PASS |
| **User signup - Form validation** | Submit empty form | Form validation prompts the user | PASS |
| **User signup - Form validation** | Submit invalid password | Form validation prompts the user | PASS |
| **User signup - Form validation** | Submit non matching passwords | Form validation prompts the user | PASS |
| **User login page** | Test link is working | User is directed to the login page | PASS |
| **User login - Form validation** | Submit incorrect password | Form validation prompts the user | PASS |
| **User login - Form validation** | Submit incorrect name | Form validation prompts the user | PASS |
| **User Logout page** | Test link is working | User is logged out | PASS |


### Redirect User
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Logged-in User** | Test signin/signup link is disable | User is directed to the home page | PASS |
| **Logged-out User** | Create, AddEvent, Feed, Liked and Saved link is disable | User is directed to the home page | PASS |


### NavBar
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Home Link** | Click on the "Home" link in the navbar | Navigate to the home page | PASS |
| **About Link** | Click on the "About" link in the navbar | Navigate to the about page | PASS |
| **Events Link** | Click on the "Events" link in the navbar | Navigate to the event list page | PASS |
| **Authenticated User - Create Post Link** | Click on the "Create" link in the navbar | Navigate to the page for adding a new post | PASS |
| **Authenticated User - Add Event Link** |  Click on the "AddEvent" link in the navbar | Navigate to the page for adding a new event | PASS |
| **Authenticated User - Feed Link** |  Click on the "Feed" link in the navbar | Navigate to the page for existing content that the user follows | PASS |
| **Authenticated User - Liked Link** |  Click on the "Liked" link in the navbar | Navigate to the page for the favourites content | PASS |
| **Authenticated User - Saved Link** |  Click on the "Saved" link in the navbar | Navigate to the page for the saved content | PASS |
| **Authenticated User - Profile** |  Click on the profile in the navbar | Sends the authenticated user to its profile page | PASS |
| **Unauthenticated User - Signin Link** | Click on the "SignIn" link in the navbar | Navigate to the sign-in page | PASS |
| **Unauthenticated User - Sign Up Link** |  Click on the "SignUp" link in the navbar | Navigate to the sign-up page | PASS |


#### Home Page - Post List
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Page Navigation** | On the home page | The browser should display the home page with a list of the latest published  posts | PASS |
| **Search Bar** | Check if the search bar section is visible | A functional search bar displaying should be visible at the top of the page | PASS |
| **Post Display** | Inspect individual post cards | Each post card should display the featured image, username avatar, publication date, title, description, location, and number of likes and comments | PASS |
| **Avatar** | Click on the username's avatar | The browser should navigate to the username's profile page | PASS |
| **Featured Image** | Click on the "Featured Image" link | The browser should navigate to the detailed view of the respective post page| PASS |
| **Infinite Scroll** | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content effortlessly | PASS |


#### Single Post Page
| Testing | Steps | Expected Outcome | Results |
| - | - | - | - |
| **Access Page** | Navigate to the post page for a specific post | The browser should display detailed information about the post, including title, username's avatar, creation date, featured image, description, location, number of likes and comments | PASS |
| **Username Avatar**| Check if username profile information is displayed | The post should include the user's profile image, username, and render the link to the username's profile page | PASS |
| **Like Post** | If logged in, click the like button | The like status should toggle, and the number of likes should be updated | PASS |
| **Unlike Post** | If logged in, click the unlike button | The unlike status should toggle, and the number of likes should be updated | PASS |
| **Like Post (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the like button functionality should be disable | PASS |
| **Like Post (Owner's Post**) | If user tries to like their own content | A message should inform the owner that can not like their own content and the like button functionality is disable | PASS |
| **Add Comment (Valid)** | If logged in, enter a valid comment in the comment form and click "Send" | The comment should be posted, and the number of comments should be updated | PASS |
| **Add Comment (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the comment form should not be displayed | PASS |
| **Delete Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment | The comment should be deleted | PASS |
| **Edit Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment, make changes, and click "Send" | The comment should be edited | PASS |


#### Single Event Page
| Testing | Steps | Expected Outcome | Results |
| - | - | - | - |
| **Access Page** | Navigate to the event page for a specific event content | The browser should display detailed information about the eventt, including username's avatar, title, category creation date, content, location, date, time, and number of saved and comments | PASS |
| **Username Avatar**| Check if username profile information is displayed | The post should include the user's profile image, username, and render the link to the username's profile page | PASS |
| **Save Event** | If logged in, click the save button | The save status should toggle, and the number of save should be updated | PASS |
| **Unsave Event** | If logged in, click the unsaved button | The unsave status should toggle, and the number of save should be updated | PASS |
| **Save Event (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the save button functionality should be disable | PASS |
| **Save Event (Owner's Event**) | If user tries to save their own content | A message should inform the owner that can not save their own content and the save button should be disable | PASS |
| **Add Comment (Valid)** | If logged in, enter a valid comment in the comment form and click "Submit" | The comment should be posted, and the number of comments should be updated | PASS |
| **Add Comment (Not Logged In**) | If not logged in | A message should encourage the user to log in, and the comment form should not be displayed | PASS |
| **Delete Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment | The comment should be deleted | PASS |
| **Edit Comment (Own Comment)** | If logged in and the comment belongs to the user, click the "Three Dots" button on a comment, make changes, and click "Save" | The comment should be edited | PASS |


#### Create Post
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Access Create Post Page** | Navigate to the "Create" page by logging in and clicking on the appropriate link  | The browser should display a form for creating a new post | PASS |
| **Form Fields**| Inspect the form fields and labels | The form should include fields for title, location, content, and an option to upload a featured image | PASS |
| **Publish Post** | Fill in the requireded fields and click on the "Create" button | The form data should be saved, and redirect the user to the post page sucessfully posted | PASS |
| **Edit Post (Authorized)**| Access the "Edit Post" page for a previously saved post | The browser should display a form populated with the existing data of the selected post | PASS |
| **Edit Post (Submit)** | Make changes to the post data and submit the form | The post data should be updated, and redirected to the post page | PASS |
| **Delete Post (Authorized)**| Click the "DropDownMenu" from the specific post page | The browser should display a delete option for the specific post | PASS |
| **Delete Post (Confirm)** | Confirm the deletion of the post | The post should be deleted from the browser| PASS |
|**Navigation** | Click the "cancel" button if the user decides not to create a post | The browser should navigate back to the previous page | PASS |


#### Add Event
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Access Event Page** | Navigate to the "Add Event" page by logging in and clicking on the appropriate link  | The browser should display a form for creating a new event content | PASS |
| **Form Fields**| Inspect the form fields and labels | The form should include fields for Title, Content, Event Link, Category, Date, Time and Place | PASS |
| **Create Event** | Fill in the requireded fields and click on the "Create" button | The form data should be saved, and redirect the user to the event page sucessfully posted | PASS |
| **Edit Event (Authorized)**| Access the "Edit Post" page for a previously saved post | The browser should display a form populated with the existing data of the selected event | PASS |
| **Edit Event (Submit)** | Make changes to the event data and submit the form | The event data should be updated, and redirected to the event page | PASS |
| **Delete Event (Authorized)**| Click the "DropDownMenu" from the specific event | The browser should display a delete option for the specific event | PASS |
| **Delete Event (Confirm)** | Confirm the deletion of the event | The event should be deleted from the browser| PASS |
|**Navigation** | Click the "cancel" button if the user decides not to create a event | The browser should navigate back to previous page | PASS |


#### Event List Page
| Testing | Steps | Expected Outcome| Results |
| - | - | - | - |
| **Page Navigation** | On the home page | The browser should display the home page with a list of the latest published events | PASS |
| **Search Bar** | Check if the search bar section is visible | A functional search bar displaying should be visible at the top of the page | PASS |
| **Post Display** | Inspect individual events cards | Each event card should display the username avatar, publication date, title, content, date, time, place, and number of save and comments | PASS |
| **Avatar** | Click on the username's avatar | The browser should navigate to the username's profile page | PASS |
| **Title Link** | Click on the "title" link | The browser should navigate to the detailed view of the respective event page| PASS |
| **Infinite Scroll** | Check if seamless browsing by continuously loading content as the user scrolls down the page | New events are automatically loaded, enabling users to explore an endless stream of content effortlessly | PASS |


### Feed List
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Feed" page | If the user is logged in, the browser should display existing content that the user follows | PASS |
| **Content Display**  | Check if seamless browsing by continuously loading content as the user scrolls down the page | New posts are automatically loaded, enabling users to explore an endless stream of content from the profile users they decided to follow | PASS |


### Liked List
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Liked" page | Browser displays existing liked content if user is logged in | PASS |
| **Content Display** | Check if loads recent liked content as the user scrolls down the page | Liked posts automatically load, allowing users to explore favorite content | PASS |


### Saved List
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Saved" page | Browser displays existing saved content events, if user is logged in | PASS |
| **Content Display** | Check if loads recent saved content as the user scrolls down the page | Saved events automatically load, allowing users to explore easily saved content | PASS |


### About Page
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **About Page Navigation** | Click on the "About" link in the navigation bar  | The browser should navigate to the "About" page | PASS |
| **Content Display** | Check if the content on the "About" page is displayed correctly | The page  display a brief introduction about the platform, including featured details and the purpose of the website | PASS |
| **Sign-Up Button** | Click on the "Sign Up Now!" button | The browser should navigate to the sign-up page | PASS |


### Search Bar 
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Posts Found** | Enter a search query in the search bar. Click on the search button. | Display a list of posts that match the search query. Each post should show: - Featured image - Number of likes and comments - Title - Location - Description - Date | PASS |
| **No Posts Found** | Enter a search query that has no matching posts. Click on the search button. | Display a message stating "No results found. Adjust the search keyboard." | PASS |
| **Events Found** | Enter a search query in the event search bar. Click on the search button. | Display a list of events that match the search query. Each event should show: - Number of saved and comments - Title, Content, Event Link, Category, Date, Time and Place | PASS |
| **No Events Found** | Enter a search query that has no matching events. Click on the search button. | Display a message stating "No results found. Adjust the search keyboard." | PASS |


### Profile
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** | Navigate to the "Profile" page | The browser should display existing user profile and an three dots drop down menu, if the user is logged in | PASS |
| **Follow/Unfollown Button** | on the "Profile" page  | Should appear a button to follow the user's profile if other user are logged in | PASS |
| **DropDownProfile** | Click on the three-dots dropdown menu | Dropdown menu should appear with options to "Edit Profile", "Change Username", and "Change Password" | PASS |
| **View Profile Details** |  View counts of "Post", "Followers" and "Following" | The browser should display posts associated with the selected user profile | PASS |
| **Edit Profile** | The browser should display profile form fields | Ensure new changes are saved and redirects the user back to the profile page | PASS |
| **Change Username** | The browser should display username form field | Ensure new username is saved and redirects the user back to the profile page | PASS |
| **Change Password** | The browser should display new password form fields | Ensure new password is saved and redirects the user back to the profile page | PASS |


### Popular Profiles
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Access Page** |  Navigate to the "Home" page | Browser displays a popular list of profiles with usernames and avatars linking to their respective profile pages, along with a follow/unfollow button if user is logged in | PASS |


### Followers
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Follow/Unfollow Section** | Navigate to the "Profile" page or Popular Profile List | The browser should display a follow/unfollow button, if the user is logged in | PASS |
| **Follow User** | Click on the follow button | Follow count increases for the user being followed, and the follower is added to their followers list | PASS |
| **Unfollow User** | Click on the unfollow button | Follow count decreases for the user being unfollowed, and the follower is removed from their followers list | PASS |


### Footer
| Testing  | Steps | Expected Outcome | Results |  
| - | - | - | - |
| **Display Quick Links** | Visit about page with the footer. | Display quick link for "SignUp"  Ensure the links navigate to the correct pages. | PASS |
| **Display Social Links** |Visit about page with the footer. | Display social links for Google, Instagram, LinkedIn, and GitHub. Ensure the links navigate to the correct social media profiles or pages. | PASS |
| **Display Copyright Information** | Visit about page with the footer. | Display copyright information, including the current year, and mention that all rights are reserved. | PASS |


<br/>

Return to [README.md](/README.md)