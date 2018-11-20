/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('should have a URL defined and not empty', function () {
            allFeeds.forEach((rss) => {
                expect(rss.url).toBeDefined();
                expect(rss.url.length).toBeGreaterThan(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('should have a name defined and not empty', function () {
            allFeeds.forEach((rss) => {
                expect(rss.name).toBeDefined();
                expect(rss.name.length).toBeGreaterThan(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('should change visibility when the menu icon is clicked', function () {
            // Declare the menu icon variable
            const menuIcon = $('.menu-icon-link')[0];

            // When the menu icon is clicked
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // When the menu icon is clicked again
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        // Declare Css Tricks entries element
        let cssTricksEntries;

        beforeEach(function (done) {
            /* Invoke the loadFeed() function with two parameters:
             * - The first parameter is '1' which reffer to Css Tricks feed
             *   object in allFeed array.
             * - The second parameter is 'done' which is used to ensure that
             *   function is called and completed its work before the test is
             *   started
             */
            loadFeed(1, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('number should be at least one', function (done) {
            // Assign Udacity BLog entries variable
            cssTricksEntries = $('.entry-link');
            expect(cssTricksEntries.length).toBeGreaterThan(0);
            done();
        });

        /* TODO: Write a new test suite named "New Feed Selection" */
        describe('New Feed Selection', function () {
            // Declare Udacity Blog entries element
            let udacityEntries;

            beforeEach(function (done) {
                /* Invoke the loadFeed() function with two parameters:
                 * - The first parameter is '0' which reffer to Udacity Blog feed
                 *   object in allFeed array.
                 * - The second parameter is 'done' which is used to ensure that
                 *   function is called and completed its work before the test is
                 *   started
                 */
                loadFeed(0, done);
            });

            /* TODO: Write a test that ensures when a new feed is loaded
             * by the loadFeed function that the content actually changes.
             * Remember, loadFeed() is asynchronous.
             */
            it('should change content', function (done) {
                // Assign Css Tricks entries variable
                udacityEntries = $('.entry-link');
                let isContentChanged;

                // Check if the two entries feed host is the same or not
                if (udacityEntries[0].host === cssTricksEntries[0].host) {
                    isContentChanged = false;
                } else {
                    isContentChanged = true;
                }

                expect(isContentChanged).toBe(true);
                done();
            });

        });

    });

}());