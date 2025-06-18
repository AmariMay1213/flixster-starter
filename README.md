  📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Flixster

Submitted by: Amari May

Estimated time spent: 22 hours 

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### REQUIRED FEATURES

- [X] **Display Movies**
  - [X] Users can view a list of current movies from The Movie Database API in a grid view.
    - [X] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [X] For each movie displayed, users can see the movie's:
    - [X] Title
    - [X] Poster image
    - [X] Vote average
  - [X] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page. 
- [X] **Search Functionality**
  - [X] Users can use a search bar to search for movies by title.
  - [X] The search bar should include:
    - [X] Text input field
    - [X] Submit/Search button
    - [X] Clear button
  - [X] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [X] Presses the Enter key
    - [X] Clicks the Submit/Search button
  - [X] Users can click the Clear button. When clicked:
    - [X] All text in the text input field is deleted
    - [X] The most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [X] **Design Features**
  - [X] Website implements all of the following accessibility features:
    - [X] Semantic HTML
    - [X] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [X] Alt text for images 
  - [X] Website implements responsive web design.
    - [X] Uses CSS Flexbox or CSS Grid
    - [X] Movie tiles and images shrink/grow in response to window size
  - [X] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [X] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [X] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [X] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [X] The pop-up displays additional details about the moving including:
      - [X] Runtime in minutes
      - [X] Backdrop poster
      - [X] Release date
      - [X] Genres
      - [X] An overview
  - [X] Users can use a drop-down menu to sort movies.
    - [X] Drop-down allows movies to be sorted by:
      - [X] Title (alphabetic, A-Z)
      - [X] Release date (chronologically, most recent to oldest)
      - [X] Vote average (descending, highest to lowest)
    - [X] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [X] Website displays:
    - [X] Header section
    - [X] Banner section
    - [X] Search bar
    - [X] Movie grid
    - [X] Footer section
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 

#### STRETCH FEATURES

- [x] **Deployment**
  - [x] Website is deployed via Render.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 
- [x] **Embedded Movie Trailers**
  - [x] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    - [x] When the trailer is clicked, users can play the movie trailer.
- [x] **Favorite Button**
  - [x] For each movie displayed, users can favorite the movie.
  - [X] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [X] If the movie is not favorited:
    - [X] Clicking on the visual element should mark the movie as favorited
    - [X] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [X] If the movie is already favorited:
    - [X] Clicking on the visual element should mark the movie as *not* favorited.
    - [X] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited. 
- [X] **Watched Checkbox**
  - [X] For each movie displayed, users can mark the movie as watched.
  - [X] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [X] If the movie has not been watched:
    - [X] Clicking on the visual element should mark the movie as watched
    - [X] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [X] If the movie is already watched:
    - [X] Clicking on the visual element should mark the movie as *not* watched.
    - [X] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [ ] **Sidebar**
  - [ ] The website includes a side navigation bar.
  - [ ] The sidebar has three pages:
    - [ ] Home
    - [ ] Favorites
    - [ ] Watched
  - [ ] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [ ] The Favorites page displays all favorited movies in a grid view.
  - [ ] The Watched page displays all watched movies in a grid view.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. Ensure your walkthrough showcases the presence and/or functionality of all features you implemented above (check them off as you film!). Pay attention to any **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS** checkboxes listed above to ensure graders see the full functionality of your website! (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I only did labs one and two and I would say that lab one taught me how to do git commands and lab two taught me basic React setup. Lab one I learned the basic commands such as commit and push within the terminal and in doing so I commit more often than I did for the first two projects. Lab two helped me learn how to use React and playing with the language so it helped a lot with the basic set up of this project in order to set up components. I don't think I felt unprepared to complete the weekly assignments I just feel like we don't have enough time to do all the labs and the project in a reasonable amount of time. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

  If I had more time I would have implemented the Sidebar feature, focus on playing with different fonts for the website, and making the search bar larger. I didn't have time for a lot of these in order to meet the due date, hoeever I tried to change the size of my search bar however all of my tries failed. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I believe what went well for my project demo is that I always have strong energy while presenting as I pride myself in a strong voice and body language. After talking to Devarsh I tried a new presentation style of showing off my website first then transitioning to my presentation slides. It went well and I felt very comfortable doing it so I will continue that presentation style. The main thing I will work on from this project is first pacing myself, when I feel like I'm running out of time I often speak extremely fast which I did this presentation, and I even felt a bit nervous for some reason. I think the solution for next time is spending more time practicing ahead of time in front of a crowd as well as not being afraid to take a deep breath while presenting and continuing my presentation in order to calm myself down. I really appreciate how my peers stray away from the demo slides and now make their slides on theme with their website so I think I will try the same thing next time. 

### Open-source libraries used

- Chatgpt
- https://github.com/dst2609/ftl-code-demo-2025/tree/main/week3/w3d1/state-example
- https://github.com/dst2609/ftl-code-demo-2025/tree/main/week2/w2d4/Pokemon-app
- https://github.com/dst2609/ftl-code-demo-2025/tree/main/week2/w2d5/pokemon-list

### Shout out

- Jessica - Cool backgrounds and letting me chat to her about my code
- Devarsh - helping me set up my API Key
- Keith and Alex - helping me learn how to embed Youtube Videos
- Luccia - Teaching me how to create a drop down bar and reassess my learning style
- Ayo - Helping me set up my code
- Nathan - For looking at my code
- Camila, Janine, Senaf and the rest of my cohort - supporting me and practicing with me! 
