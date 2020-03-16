import '../styles/index.scss';
import Post from './modules/post-model';

// anonymous arrow function (IIFE)
(() => {
	'use strict';

	

    let $doc = document;

    $doc.addEventListener('DOMContentLoaded',()=>{
    	Post.addNewPost('WornderSauce Test', 'Test', 1);
    	let posts = Post.getListOfPost();
    	console.log('Test', posts);
	});

})();
