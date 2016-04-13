
google.load("feeds", "1");
function initialize() {
	var feedurl = "http://www.saba-navi.com/feed/";
	var feed = new google.feeds.Feed(feedurl);
	feed.setNumEntries(10);
	feed.load(function (result){
		if (!result.error){
			for (var i = 0; i < result.feed.entries.length; i++) {
				var entry = result.feed.entries[i];
				var title = '<li><h3><a href="' + entry.link + '">' + entry.title + '</a></h3></li>';
				var conte = '<li>' + entry.contentSnippet + '</li>';
				var dates = '<li>' + entry.publishedDate + '</li>';
				$('ul#feed').append('<li class="post"><ul>' + title + dates + '</ul></li>');
			}
		}
	});
}
google.setOnLoadCallback(initialize);
