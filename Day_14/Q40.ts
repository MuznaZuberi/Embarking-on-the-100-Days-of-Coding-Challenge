//  Album: Create an object that describes the music album by creating a function named make_album(). The function must contain an artist's name and album title, which should be returned as an object containing those two pieces of information. To create three dictionaries representing different albums, use the function. To demonstrate that the album information is correctly stored in objects, print each return value. You can store a certain number of tracks in an album by adding the option to make_album(). Add this value to the album's object when a calling line contains an indication of how many tracks there are. To include the number of tracks in an album, make at least one new function call.

function make_album(artist: string, title: string, tracks?: number) {
	let album = { artist, title };
	if (tracks)
		album["tracks"] = tracks;
   
    return album
};


console.log(make_album("Elvis Presley" , "Elvis Presley Rock n' Roll"));
console.log(make_album("Cliff Richard" , "Cliff with Strings – My Kinda Life"));
console.log(make_album("Cliff Richard" , "Cliff with Strings – My Kinda Life" , 19));






