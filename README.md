# VICSR
### Vocabulary In Context + Spaced Repitition

## Overview
VICSR - or Vocabulary In Context + Spaced Repetition is a vocabulary learning app. By enabling learners to see new vocabulary words in the context of their reading using our intuitive highlight to translation feature, memorization starts early. When the user finishes a reading, they can easily begin to memorize all the unknown new words by taking advantage  of VICSR’s automatic flashcard generation feature. Any word highlighted in a given document (and its translation) will be appended to a flashcard deck, from which users can study their new vocabulary. 

## URL

http://vicsr.herokuapp.com

## Deploying // Running for dev

### Running as dev
1) Change the values for the variables in [this file](src/config.js) to be all false except for testFrontProdBack
2) This will allow you to use the current LIVE backend while testing the frontend locally
3) use the command npm start

### Deploying on Heroku
1) Make sure you have Heroku CLI installed
2) Make sure project has been built
3) ```heroku login```
4) Make sure to add heroku remote origin with this command:
5) ```heroku git:remote -a vicsr```
6) ```git add .```
7) ```git commit -am "message"```
8) ```git push heroku main```


## Getting Started

[Beginner's Guide](documentation/Getting_Started.md)

FAQs

## Current Features
- User authentication/management
- Document Upload
- Preprocessing highlight extraction
- Document Management(rename, delete)
- Live highlight to translation/definition 
- Study set auto-generation
- Flashcard order responsive to user feedback

## Known Bugs
- When email was not valid, it did not show an error message.
- When a wrong login is entered, login will not accept a valid login until the page is reloaded.
- Some of the pre-highlighted words were not picked up. I.e., the some of the pre-highlighted words did not appear on the vocab list after upload.
- When the document was first uploaded and available to the user, highlight was attempted and did not add words to the vocab list. After waiting some more time, live highlight did work and added words to the vocab list. 
- The first word highlighted on the second page was not added to the vocab list. 
- After highlighting a word on the second page, when I visit the first page again highlight  is not loaded in. When you revisit the second then the first page again, the highlight reloads.
- Some definitions do not match the word they describe. For instance Judah returned Definition: Utah ( YOO-tah, (listen) YOO-taw) is a state in the Mountain West subregion of the Western United States. Utah is a landlocked U.S. state bordered to its east by Colorado, to its northeast by Wyoming, to its north by Idaho, to its south by Arizona, and to its west by Nevada.
- When switching between definition document and translation document, sometimes highlight state is not loaded correctly and no highlight appears on the page
- Definition visually hangs off the back of a flashcard when definition mode generates a flashcard deck.
- Creating a new deck was not implemented
- Study progress saved / Spaced repetition model was not totally completed, the ordering of flashcards by difficulty is the only functionality implemented
- Flashcard deck management is not implemented.
- After giving incorrect login information, login page clears password and email values without clearing frontend form text
- Document list does not properly update upon delete
- When user clicks on a study set with no content it crashes the flashcard view 

## Contributers
* Alyssa Colella
* Bri McCaffrey
* Bryan Oberholtzer
* Cecily Devaney
* Songyuan Huang

## Releases
[v1.0](https://github.com/Capstone-Projects-2022-Spring/project-vicsr/releases/tag/v1.0)
[v1.1](https://github.com/Capstone-Projects-2022-Spring/project-vicsr/releases/tag/v1.1)
[v1.2](https://github.com/Capstone-Projects-2022-Spring/project-vicsr/releases/tag/v1.2)
