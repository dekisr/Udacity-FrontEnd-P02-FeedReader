/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
      it('the allFeeds variable has been defined and that it is not empty', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
      it('the url must be defined and is not empty', function() {
        for (const feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url).not.toBe('');
        }
      });

      /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
      it('the name must be defined and is not empty', function() {
        for (const feed of allFeeds) {
          expect(feed.name).toBeDefined();
          expect(feed.name).not.toBe('');
        }
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
      /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
      const menu = document.querySelector('body').classList;
      it('the menu should be hidden by default', function() {
        expect(menu).toContain('menu-hidden');
      });

      /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
      const menuIcon = document.querySelector('.menu-icon-link');
      it('the menu changes visibility when the menu icon is clicked', function() {
        menuIcon.click();
        expect(menu).not.toContain('menu-hidden');
        menuIcon.click();
        expect(menu).toContain('menu-hidden');
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      beforeEach(function(done) {
        loadFeed(0, function() {
          done();
        });
      });

      it('the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container', function(done) {
        const feedDiv = document.querySelector('.feed');
        const bolo = feedDiv.querySelectorAll('article');
        expect(bolo[0].classList).toContain('entry');
        done();
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
      let feedContent, feedContentNext;
      beforeEach(function(done) {
        loadFeed(0, function() {
          feedContent = document.querySelector('.feed').innerHTML;
          for (let i = 1; i < allFeeds.length; i++) {
            loadFeed(i, function() {
              feedContentNext = document.querySelector('.feed').innerHTML;
              if (i === allFeeds.length - 1) {
                loadFeed(0);
                done();
              }
            });
          }
        });
      });

      afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
      });

      it('the content actually changes when a new feed is loaded by the loadFeed', function(done) {
        expect(feedContent).not.toBe(feedContentNext);
        done();
      });
    });
  })()
);
