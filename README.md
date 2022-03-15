# VICSR
### Vocabulary In Context + Spaced Repitition
project-vicsr created by GitHub Classroom

## Overview
VICSR (Vocabulary In Context + Spaced Repetition) is a cross-platform mobile app intended for language students, medical/premed students, or any student in a discipline which is vocabulary-dense. The app will help students by teaching the user foreign language or special subject vocabulary words in the most scientifically sound manner. 

VISCR facilitates foreign language and special subject vocabulary learning in two ways: by making vocabulary and translations available in the context of assigned texts, and by organizing said vocabulary into flash cards, which are presented to the user using the principles of spaced-repetition learning. Unlike competitors such as Notability, Anki, and Quizlet, VICSR streamlines the “reading to vocabulary learning pipeline” by bundling useful and novel functionality in one app! No other app lets a user simply highlight a word to translate it, let alone automatically begin teaching the user said word via a scientifically sound studying methodology. 

## Demo Outline

http://vicsr.herokuapp.com/

Registration: 
- click registration button
- register new user
    - try email without @
    - try password less than 8 characters
    - try password too similar to username/email
    - try successful password —> document view
- we only have one error message for credentials, but we will return more specific ones so user knows what to change

Expected Result: Users are able to open up the register by clicking the Register here button under the login in button. Users have to enter an email address containing @, and the password is no less than 8 characters/numbers. Click the Register button once complete the filling info, users are able to transfer the Document View page.

Logout:
- scroll to the right, click logout button

Expected Result: Once users are in the DocumentView, users are able to log out by clicking the logout button, then confirm that they are logout. It should bring users back to the login/registration page. 

Login: 
- login with newly registered user information

Expected Result: Users are able to fill in the login info with the email that includes @, and password no less than 8 characters. Click on the login button, the users should be able to transfer to the Document View page.

Document View:
- talk about add document button, rendered list of documents, and their delete buttons
- go to flashcard view

(Theres no back button back to doc view, so add /logout to url if you want to log out again) 

Expected Result: For the Document View page now, users are able to preview their uploaded document and able to switch to the flashcard view page. in order to go back to the document page, users have to click on the web browser back button. Users can also log out on the document view page by clicking the logout button in the upper right. 

## Contributers
* Alyssa Colella
* Bri McCaffrey
* Bryan Oberholtzer
* Cecily Devaney
* Songyuan Huang
