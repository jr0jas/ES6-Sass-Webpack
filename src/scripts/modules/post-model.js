const GET_LIST_OF_POST = 'https://jsonplaceholder.typicode.com/posts'; 

	const GET_SINGLE_POST = 'https://jsonplaceholder.typicode.com/posts/1'; 

	const ADD_NEW_POST = 'https://jsonplaceholder.typicode.com/posts'; 

	const ADD_NEW_COMMENT = ''; 

	const UPDATE_SINGLE_POST = 'https://jsonplaceholder.typicode.com/posts/1';  

	const UPDATE_SINGLE_COMMENT = ''; 

	const DELETE_COMMENT = '';  

	const DELETE_POST = ''; 

	const GET_LIST_OF_POST_PER_USER = 'https://jsonplaceholder.typicode.com/posts?userId=1'; 

class Post {

    constructor () {}

    static getListOfPost() {
    	return fetch(GET_LIST_OF_POST)
  		.then(response => response.json())
  		.then(json => console.log(json));
    }

    static addNewPost(title, body, userId) {
    	fetch('https://jsonplaceholder.typicode.com/posts', {
	    method: 'POST',
	    body: JSON.stringify({
	      title: title,
	      body: body,
	      userId: userId
	    }),
		headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
	  .then(response => response.json())
	  .then(json => console.log(json));
    }
}

export default Post;