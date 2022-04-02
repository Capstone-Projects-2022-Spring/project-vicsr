# VICSR Frontend #

## Development Dependencies (mac) ##
From [here](https://reactnative.dev/docs/environment-setup), under mac/iOS settings
- Node
- Watchman
- the React Native command line interface 
- Xcode 
- CocoaPods

## Development Diary ##
Search this page for bugs, weird issues, following my coding logic etc

[Here](Bri_development_diary.txt)

## Development Setting up Environment ##

- Make sure all packages in packages.json are installed
- When running in the ios simulator, make sure cocoapods are updated
- run: ```cd ios``` and then ``` pod install``` and finally, ```cd ..```

## Development Running and Testing ##

- Follow the steps in the link above to set up your development environment UNTIL the header "Creating a new application"
- Then, clone the branch included the frontend code that you want to work on
- From project root 
- ```cd frontend```
- ```cd VICSRfrontend```
- Run Metro, the javascript bundler that ships with react native
- This also gives you a debugger
- To do so, run the following command, included in Node:
- ```npx react-native start```
- Then run the following to start the IOS simulator and run the app:
- ```npx react-native run-ios```

## Screenshots ##
#### Login Screen
![Demo of Login screen](Screenshots/LoginPage.png "Demo of Login screen")
#### Registration
![Demo of Registration screen](Screenshots/RegisterPage.png "Demo of Registration screen")
#### Document View
![Demo of Document screen](Screenshots/DocumentView.png "Demo of Document screen")
![Demo of Modal screen](Screenshots/UploadModal.png "Demo of Document Modal screen")