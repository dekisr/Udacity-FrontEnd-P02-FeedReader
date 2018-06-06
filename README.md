# Feed Reader Testing

### Project Overview
This is my second project of the Advanced Front-End course, from Udacity Brasil.
The goal was to learn how to use [Jasmine](http://jasmine.github.io/) to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

### Why this Project?
> Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.  
Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## Instructions
All required files are included in this repo and it's using the **Jasmine ver. 2.1.2**.  
To run this project, you can download or clone this repo and then open the `index.html`.  
All tests are in `jasmine/spec/feedreader.js`.

### Tests
1. **RSS Feeds**
* the allFeeds variable has been defined and that it is not empty
* the url must be defined and is not empty
* the name must be defined and is not empty
2. **The menu**
* the menu should be hidden by default
* the menu changes visibility when the menu icon is clicked
3. **Initial Entries**
* the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
4. **New Feed Selection**
* the content actually changes when a new feed is loaded by the loadFeed

## Resources
* [Udacity - Web Front-End Avançado](https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001-br-advanced)
* [Jasmine Docs](https://jasmine.github.io/pages/docs_home.html)