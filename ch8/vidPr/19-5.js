

let post = new Post('gogo', 'blue', 'cody');


function Post(title, body, author) {
   this.title = title;
   this.body = body;
   this.author = author;
   this.views = 0;
   this.comments = [];
   this.isLive = false;
}

console.log(post);
