## Features

:warning: At the end of this briefing there are links for sample solutions. We recommend going over them once you are finished with the assignment. You might learn new tricks :smile:.

## What are we building? (Just a reminder)

We are building a webapp where people can have their own space and post stories in it. It is called `Cool story bro`. It has multiple pages

- Signup & Login pages (already implemented in the starter kit)
- A home page with a list of spaces of different users
- A detail page for a space where you can view a users' stories
- A page where you can view your own space and stories
- A form where you can edit your space
- A form where you can post a story

### 1. As a user I want to view a list of spaces belonging to other users

- The default page you see when you go to `/` should be a list of spaces
- Each space is displayed in the colors their users have customized
- There is a button linking to the details of that space

| Criteria                                                                | Points |
| ----------------------------------------------------------------------- | ------ |
| The frontend route `/` displays a list of spaces                        | 1      |
| The spaces have a backgroundColor and color as specified by their users | 1      |
| The data is managed using Redux                                         | 2      |
| Each space has a `Visit space` button, it links to a space's details    | 1      |
| Total                                                                   | 5      |

---

### 2. As a user interested in people's lives, I want to read people's stories, so I can be informed

- When we click on the `Visit space` button of a space we see the details of a space
- On this detail page we can see the stories belonging to that space

| Criteria                                                                | Points |
| ----------------------------------------------------------------------- | ------ |
| The frontend route `/spaces/:id` displays a detail page for a space     | 1      |
| The stories are displayed with a name, content and an image             | 1      |
| The space and its stories are queried from the database using 1 query   | 2      |
| The space has a backgroundColor and color as specified by their user    | 1      |
| The stories are displayed in order, from newest to oldest (`createdAt`) | 2      |
| Total                                                                   | 7      |

---

### 3. As a user signing up I want a space to be created for me

- When you sign up for a new account, a space should be created for you.
- The space is set up with some default values:
  - title: `<MyName>'s space`
  - description: null
  - backgroundColor: #ffffff (white)
  - color: #000000 (black)

| Criteria                                                                                       | Points |
| ---------------------------------------------------------------------------------------------- | ------ |
| When a user sign's up a space is created and saved to the database with the correct attributes | 3      |
| The space is sent in the response of `/signup` along with the new user                         | 1      |
| The space is stored in the redux store in the frontend                                         | 1      |
| Total                                                                                          | 5      |

---

### 4. As a logged in user I want to be able to view my space and delete my own stories

- When you are logged in, there should be a link in the navbar to `My space`
- When you click that link you see the space belonging in to your user and its stories
- Ideally, we add the user's space to the information being fetched when we login
- That means modifying the `/me` and `/login` endpoints to also send your space in the response
- Alternatively fetch the data from the endpoint set up for feature #2 (detail page)
- Users also want to be able to delete their own stories.

| Criteria                                                                                                 | Points |
| -------------------------------------------------------------------------------------------------------- | ------ |
| You see a `My space` link in the navbar (but only when you're logged in)                                 | 1      |
| When you click `My space` you see your space and your stories                                            | 1      |
| Your space & stories are fetched using the `/me` and `/login` endpoints                                  | 2      |
| Your space's details are managed by redux                                                                | 2      |
| On `My space`, stories are displayed with a `Delete Story` button which lets them delete their own story | 2.5    |
| The story is removed from the space without manually refreshing (CMD + R / CTRL + R)                     | 1.5    |
| Total                                                                                                    | 10     |

---

### 5. As a logged in user I want to be able to post stories on space, so I can share my adventures with the world

- You should be able to post a story on your space
- In the `My space` section there should be a button to `Post a cool story bro`
- When you click this button a form appears so you can post a story
- You should only be able to do this when you are logged in

| Criteria                                                                            | Points |
| ----------------------------------------------------------------------------------- | ------ |
| There is a button with `Post a cool story bro` on `My space`                        | 0.5    |
| Clicking the button makes a form appear with the correct inputs for posting a story | 1.5    |
| When a user enters an imageUrl, they can see a preview of the image                 | 1      |
| When the form is submitted a request is sent to the server to create the story      | 3      |
| The request uses JWT authorization                                                  | 2      |
| The user sees a success message if the story was posted successfully                | 1      |
| The success message is an alert, confirm or prompt popup or console.log             | -1     |
| Total                                                                               | 9      |

---

### 6. As a logged in user I want to be able to edit my space, so I can express myself

- Your space has a title, description backgroundColor and color. You should be able to change those
- In the `My space` section there should be a button to `Edit my space`
- When you click this button a form appears so you can edit your space
- You should only be able to do this if you're logged in

**Hint:** Make the backgroundColor and color inputs using `<input type="color">`, documentation on it can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)

| Criteria                                                                                               | Points |
| ------------------------------------------------------------------------------------------------------ | ------ |
| There is a button with `Edit my space` on `My space` that makes a form appear                          | 1.5    |
| The form has inputs for the spaces attributes                                                          | 0.5    |
| The values in the form start as the current values for your space                                      | 2.5    |
| When the form is submitted a request is sent to update the users space                                 | 2      |
| The request makes use of JWT authorization                                                             | 1      |
| The user can see the results of their update without manually refreshing (CMD + R / CTRL + R) the page | 2.5    |
| Total                                                                                                  | 10     |

---

### 7. Finishing up

- Self assess: Score your assessment yourself using the table below
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (max off by + or - 7 points) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words | 2      |
| Student has regularly committed changes (at least 1 commit per feature)    | 1      |
| Student has written clear commit messages                                  | 1      |
| Total                                                                      | 6      |

### Self assessment

| Section                      | Max Points | Self assessed points | Assessor |
| ---------------------------- | ---------- | -------------------- | -------- |
| 0 Migrations, models & seeds | 8          | 0/8                  | 0/8      |
| 1 Spaces list                | 5          | 0/5                  | 0/5      |
| 2 Space details              | 7          | 0/7                  | 0/7      |
| 3 Space created on signup    | 5          | 0/5                  | 0/5      |
| 4 My space                   | 10         | 0/10                 | 0/10     |
| 5 Posting stories            | 9          | 0/9                  | 0/9      |
| 6 Editing your space         | 10         | 0/10                 | 0/10     |
| 7 Finishing up               | 6          | 0/6                  | 0/6      |
| Total                        | 60         | 0/60                 | 0/60     |

## Sample solution

[Client](https://github.com/Codaisseur/cool-story-bro-client)
[Server](https://github.com/Codaisseur/cool-story-bro-server)
