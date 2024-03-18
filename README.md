<h1 align="center">ExposePX</h1>
<div align="center"><img src="docs/readme/images/amiresponsive.png"></div>

**ExposePX** offers a vibrant online community for photographers, where users can seamlessly interact with each other through various features such as posting pictures, liking, commenting, and following fellow enthusiasts. Additionally, users have the ability to create and join events tailored to the photography scene, fostering connections and collaborations within the art shooting community. The platform also enables users to bookmark events of interest for easy access.

This section of the project is the frontend built to support the Django Rest Framework API from the backend, and it is powered by React Framework.

This project was built as my final Advanced Frontend Portfolio submission for the Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/).

#### DEPLOYED BACKEND API RENDER [LINK](https://p5-drf-api-50dd27c53894.herokuapp.com/)
#### BACKEND GITHUB [REPOSITORY](https://github.com/patthoege/pp5-drf-api)

#### DEPLOYED FRONTEND RENDER [LINK - LIVE SITE]() - to do


The live link for **"ExposePX"** can be found [HERE](https://exposurepx-e2816574e586.herokuapp.com/)

## Table of Contents
+ [UX](#ux "UX")
  + [Site Purpose](#site-purpose "Site Purpose")
  + [Site Goal](#site-goal "Site Goal")
  + [Audience](#audience "Audience")
  + [Communication](#communication "Communication")
  + [Current User Goals](#current-user-goals "Current User Goals")
  + [New User Goals](#new-user-goals "New User Goals")
+ [User Stories](#user-stories "User Stories")
  + [Admin stories](#admin-stories "Admin stories")
  + [User stories](#usert-stories "User stories")
  + [Visitor stories](#visitor-stories "Visitor stories")
+ [Design](#design "Design")
  + [Colour Scheme](#colour-scheme "Colour Scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
  + [C.R.U.D](#crud "C.R.U.D")
+ [Testing](#testing "Testing")
  + [Manual Testing](#manual-testing "Manual Testing")
  + [Automated Testing](#automated-testing "Automated Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Technologies Used](#technologies-used "Technologies Used")
  + [Main Languages Used](#main-languages-used "Main Languages Used")
  + [Frameworks, Libraries & Programs Used](#frameworks-libraries-programs-used "Frameworks, Libraries & Programs Used")
  + [Databases Platform and Cloud Storage](#databases-platform-and-cloud-storage "Databases Platform and Cloud Storage")
+ [Components](#components "Components")
+ [Deployment](#deployment "Deployment")
+ [Credits](#credits "Credits")
  + [Content](#content "Content")
  + [Media](#media "Media")


## UX

#### Site Purpose:
The purpose of ExposePX is to provide a dynamic online community for photographers, facilitating seamless interaction among users through various features such as photo sharing, liking, commenting, and following other enthusiasts. Additionally, the platform offers the opportunity to create and join photography-related events, fostering connections and collaborations within the photography community.

#### Site Goal:
The primary goal of ExposePX is to create and keep an engaging and user-friendly platform where photographers of all levels can connect, share their work, and participate in events tailored to their interests. The platform aims to provide a space where users can showcase their photography skills, gain inspiration from others, and build meaningful connections within the photography community.

#### Audience:
The target audience for ExposePX includes photography enthusiasts of all skill levels, from amateur photographers looking to improve their skills to professional photographers seeking to showcase their work and network with peers.

#### Communication:
ExposePX communicates its purpose and features through intuitive design, clear navigation, and informative content. The user interface is designed to be visually appealing and easy to navigate, with clear calls-to-action guiding users to key features such as posting photos, joining events, and interacting with other users. Additionally, the platform utilizes clear and concise messaging to inform users about upcoming events, community updates, and any relevant notifications to enhance user engagement and participation.

#### Current User Goals:
- Share photos and receive feedback from the community.
- Discover and participate in photography events.
- Connect with fellow photographers and build a network of like-minded individuals.
- Stay updated on community news, events, and trends in the photography scene.

#### New User Goals:
- Easily sign up and create a profile to start engaging with the community.
- Quickly understand the platform's features and how to navigate them.
- Find inspiration and discover new photography opportunities through the platform.
- Feel welcomed and encouraged to participate in community activities and discussions that the site has to offer.

[Back to top](<#table-of-contents>)

## User Stories

- **User Stories and Issues** (<a href="https://github.com/patthoege/pp5-exposurep/issues?q=is%3Aissue+is%3Aclosed" target="_blank" rel="noopener">GitHub Issues</a>): Project tasks were organized into user stories, each corresponding to specific functionalities or improvements. These user stories were then translated into GitHub issues, providing a clear and manageable way to track progress.

- **MoSCoW Prioritization**: The MoSCoW method was employed to prioritize project requirements and features based on their importance.

- **GitHub Kanban Board** (<a href="https://github.com/users/patthoege/projects/4" target="_blank" rel="noopener">GitHub Project</a>): The GitHub Kanban board was leveraged to visualize and manage the project's workflow. It facilitated the organization of tasks, from backlog to completion, providing a visual representation of the project's status.

[Back to top](<#table-of-contents>)
## Design

### Wireframes:
- A separate document for the wireframes can be viewed here: 
  - [For Desktop view](docs/readme/wireframes/wireframe-desktop.pdf) 
  - [For Mobile view](docs/readme/wireframes/wireframe-mobile.pdf)


### Database Schema:
This has been uploaded to the Backend README, which can be found [HERE](https://github.com/patthoege/pp5-drf-api/#database-schema)

### Colour Scheme:

![Colour Palette](docs/readme/images/palette.png)

### Typography:
All fonts were obtained from the Google Fonts library. I chose the following fonts for the page:
1. "Montserrat", sans-serif;

## Features

### Existing Features:
## 1. NavBar
  Includes a responsive navigation bar with the following elements:
  - **Logo:** ExposePX logo with a link to the home page.
  - **Navigation Links:** Home, Events, About, SignIn and SignUp (for non-authenticated users). A Create Post, Add Event, Liked, Saved, SignOut and Profile (for authenticated users).

    <details><summary><b> Navbar Non-user Image</b></summary>
    
    ![Navbar Non-user Image](docs/readme/images/navbar-visiter.png)
    </details><br />

    <details><summary><b>Navbar User Image</b></summary>

    ![Navbar User Image](docs/readme/images/navbar-user.png)
    </details><br />
## 2. About Page
  The About page serves as a concise guide to ExposePX, detailing its purpose and functionalities. It informs users about the website's features, encourages sign-ups, and provides connection through social media links. Additionally, it includes copyright information.

  <details><summary><b>About Us Image</b></summary>

  ![About Us Image](docs/readme/images/about.png)
  </details><br />

## 3. Landing Page
  Exhibits recent posts by platform users, featuring their avatar images, posting dates, locations, featured images, titles, descriptions, and counts of likes and comments. Additionally, on the right side of the screen, displays the most followed profiles, accompanied by a "Follow" button for users to easily engage with them. Users can utilize a search bar to find posts by username, title or location.

  <details><summary><b>Landing Page Image</b></summary>

  ![Landing Page Image](docs/readme/images/landing-page.png)
  </details><br />

## 4. Create Post Page
  Provides for authenticated users with a form to upload images and input details such as title, location, and description for their posts.

  <details><summary><b>Create Post Page Image</b></summary>

  ![Create Post Page Image](docs/readme/images/post-form.png)
  </details><br />

## 5. Add Event Page
  Allows authenticated users to create captivating event listings and invite the community to participate. By filling in event details such as title, content, event link, category, date, time, and place.

  <details><summary><b>Add Event Page Image</b></summary>

  ![Add Event Page Image](docs/readme/images/event-form.png)
  </details><br />

## 6. Event List Page
  Displays recent events by platform users, featuring their avatar images, posting dates, locations, titles, category, descriptions, event link, date-time, and saved and comment counts.

  <details><summary><b>Events Page Image</b></summary>

  ![Events Page Image](docs/readme/images/events.png)
  </details><br />

## 7. Liked Page
  Enables users to conveniently access a list of recently liked posts, helping them keep track of their favorite content.

  <details><summary><b>Liked Page Image</b></summary>

  ![Liked Page Image](docs/readme/images/liked.png)
  </details><br />

## 8. Saved Page
  Allows users to conveniently access a list of recently saved events, helping them manage and keep track of their interests and plans.

  <details><summary><b>Saved Page Image</b></summary>

  ![Saved Page Image](docs/readme/images/saved.png)
  </details><br />

## 9. Single Post & Event Pages
  These pages offer detailed information about a specific post or event, providing users with the functionality to leave comments on the existing content.

  <details><summary><b>Single Post Page Image</b></summary>

  ![Single Post Page Image](docs/readme/images/single-post.png)
  </details><br />

  <details><summary><b>Single Event Page Image</b></summary>

  ![Single Event Page Image](docs/readme/images/single-event.png)
  </details><br />

## 10. SignIn & SignUp Pages
  

  <details><summary><b>SignIn Page Image</b></summary>

  ![SignIn Page Image](docs/readme/images/signin.png)
  </details><br />

  <details><summary><b>SignUp Page Image</b></summary>

  ![SignUp Page Image](docs/readme/images/signup.png)
  </details><br />

## 11. No Results & 404 Pages
  

  <details><summary><b>No Results Page Image</b></summary>

  ![No Results Page Image](docs/readme/images/no-results.png)
  </details><br />

  <details><summary><b>404 Not Found Page Image</b></summary>

  ![404 Not Found Page Image](docs/readme/images/not-found.png)
  </details><br />

[Back to top](<#table-of-contents>)

### Future Features Left to Implement:
- Implement a private messaging system that allows users to engage in one-on-one conversations or group discussions. 
- Integrating Google Maps into the events and post sections, providing users with comprehensive location details, allowing them to visualize where a photo was taken or where an event is scheduled to take place.
- Implement like and reply comments to enable users to engage in specific conversations within a thread. 


[Back to top](<#table-of-contents>)

## Testing
This project has been continuously tested throughout the development stages

### Manual Testing:
A separate document for testing can be viewed here: [TESTING.md](docs/readme/TESTING.md)

### Automated Testing
Automated tests for the NavBar were run on the project using the React Testing Library, following the approach demonstrated in the Moments Walkthrough Project.

<details><summary><b>React Library Test NavBar Image</b></summary>

![React Library Test NavBar Image](docs/readme/images/navbartest.png)
</details><br />

### Validator Testing:
1. CSS files pass through the [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) validator with no issues found.
 
      <details><summary><b>CSS Validator Image</b></summary>

      ![CSS Validator Image](docs/readme/images)
      </details><br />

2. All HTML files passed through the [W3C Markup Validator](https://validator.w3.org/) with no errors.

      <details><summary><b>MarkUp Validator Image</b></summary>

      ![MarkUp Validator Image](docs/readme/images)
      </details><br />

2. All JSX code pass through `npx eslint src/**/*.js` [ESLint](https://eslint.org/). All `console.log(err);` have been left in place and commented out, as it was suggested in the **"Moments" Walkthrough Project**.

      <details><summary><b>ESLint Terminal Results Image</b></summary>

      ![ESLint Validator Image](docs/readme/images/eslint.png)
      </details><br />

3. Lighthouse
      <details><summary><b>Lighthouse Validator Image</b></summary>

      ![Lighthouse Validator Image](docs/readme/images)
      </details><br />

### Unfixed Bugs:
-

[Back to top](<#table-of-contents>)

## Technologies Used

### Main Languages Used
- HTML5
- CSS3
- Javascript
- Python
- SQL - Postgres

### Frameworks, Libraries & Programs Used
- **GitPod:** Served as the primary workspace for project development, facilitating the creation and modification of JSX/CSS files before repository submission on GitHub.
- **GitHub:** Used as the hosting platform to store the project repository for version control.
- **Google Fonts:** Utilized for the site fonts.
- **Font Awesome:** Integrated to incorporate stylish icons into social links within the footer and navigation sections.
- **Balsamiq:** Was used to create mockups of the project prior to starting.
- **Am I Responsive?:** Ensured the responsiveness of the project across various devices, ensuring optimal user experience regardless of screen size or resolution.
- **Coolors.co:** Used to create color palettes tailored to the project's website, ensuring harmonious design .
- **Favicon:** To provide the code & image for the icon in the tab bar.
- **Canva:** Utilized for creating image icons, such as uploading an image, no results found and 404 Page Not Found.
- **ChatGPT:** Leveraged for creating and refining content for the project and its accompanying documentation, ensuring clarity and coherence in communication.
- **Django:** Used to build the backend database that serves as an API for the front-end project.
- **React-Bootstrap:** The styling library that has aided to the layout of the site, and which was introduced to us during the course of the program.
- **Drawio:** An diagram software tool to design Database schema so that we can visualise the relationships between models.
- **ReactJS:** To build the components that would collectively form the front-end application.
- **jwt-decode:** is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
- **NPM JS** - The npm registry website used for information on npm libraries.
- **react-router-dom:** enables you to implement dynamic routing in a web app.
- **react-infinite-scroll-component:** a technique that automatically adds the next page as the user scrolls down through content, more content is loaded.
- **Popper:**  is used for positioning and aligning pop-up elements, such as dropdown menus, tooltips, or popovers, relative to their reference elements. 

### Databases Platform and Cloud Storage
- **ElephantSQL Postgres:** database service provided by ElephantSQL for data storage.
- **Heroku Postgres:** SQL database service provided directly by Heroku for storing data.
- **Cloudinary:** to store images and static files in production.
- **Heroku:** to deploy and run the application in production.


[Back to top](<#table-of-contents>)

## Components
Several components have been implemented within this project that have been reused throughout the project:

- **axiosDefault.js:** for ease of communication with the backend API.
- **Asset.js:** dynamically renders a loading spinner (spinner), an image (src), and a message (message) throughout the site.
- **MoreDropdown.js:** to allow users to edit/delete their Events, Posts and comments.
- **NavBar.js:**  renders a navigation bar with various icons and links based on the user's authentication status. The navigation bar also contains sign-in and sign-up links for logged-out users and profile-related links for logged-in users. Additionally, it handles sign-out functionality.
- **NotFound.js:**  renders a custom 404 error page when a user navigates to a non-existent page.
#### Contexts
- **CurrentUserContext.js:** Provides hooks (useCurrentUser and useSetCurrentUser) for accessing and updating the current user's data. Confirm users logged-in status to determine what functionality is - available to the user.
- **ProfileDataContext.js:** It provides hooks (useProfileData and useSetProfileData) for accessing and updating profile data, respectively. Offering the un/follow ability to other users across PopProf & ProfPage components.
####  Hooks
- **useClickOutsideToggle.js:**  manages the state of an element's visibility based on clicks outside of that element.
- **useRedirect.js:** redirects users based on their authentication status. It sends a POST request to refresh tokens and redirects to the home page ("/") if logged in or logged out.

#### Utils
- **utils.js:** contains helper functions for managing pagination (fetchMoreData), updating follower counts and following status (followHelper and unfollowHelper), and handling authentication tokens (setTokenTimestamp, shouldRefreshToken, removeTokenTimestamp). These functions streamline data management and authentication tasks within the Moments WalkThrough Project.


## Deployment
## Credits