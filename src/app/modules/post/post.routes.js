const postController = require('./post.controller');
// const postValidator = require('./post.validators');
const prefix = '/api/v1/post';

module.exports = (app) => {
    app
        .route(prefix + '/CreatePost')
        // .all(postValidator.validateCreateStudentSchema)
        .post(postController.createPost);

    app
        .route(prefix + '/getPost')
        .get(postController.getAllPosts); 
    
    app
        .route(prefix + '/deletePost')
        .post(postController.deletePost);   
    app
        .route(prefix + '/updatePost')
        .put(postController.updatePost);      
}
 