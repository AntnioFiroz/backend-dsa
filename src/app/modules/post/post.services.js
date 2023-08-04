const postModel = require('./post.model')
const logger = require('../../common/logger/logs');

exports.doCreatePost = async (data) => {
    try {
        let post = data;
        const result = await postModel.create(post);
        logger.info("/modules/auth/post.services.js:"," doCreatePost ", result);
        if (result) {
            return {
                status: true,
                data: {
                    message: "post Created Successfully"
                }
            }
        }else{
            return {
                status: false,
                data: "Error while creating post"
            }
        }

       
    } catch (error) {
        logger.error("/modules/post/post.services.js:"," doCreatePost ", error);
        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while creating post, Try after some time!"
            }
        }
    }
}

exports.doGetAllPosts = async () => {
    try {
        let result = await Student.find()
        logger.info("/modules/post/post.services.js:"," doGetAllPosts ", result);
        if (result) {
            return {
                status: true,
                data: result
            }
        }else{
            return {
                status: false,
                data: "Error while getting all posts"
            }
        }
        
    } catch (error) {
        logger.error("/modules/post/post.services.js:"," doGetAllPosts ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while getting posts, Try after some time!"
            }
        }
    }
}
exports.doDeletePost = async (postId) => {
    try {
        let result = await postModel.findByIdAndDelete(postId)
        logger.info("/modules/post/post.services.js:"," doDeletePost ", result);
        if (result) {
            return {
                status: true,
                message: "Post deleted Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while deleting post"
            }
        }
        
    } catch (error) {
        logger.error("/modules/post/post.services.js:"," doDeletePost ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while deleting post, Try after some time!"
            }
        }
    }
}
exports.doUpdatePost = async (data) => {
    try {
        let post = data;
        let result = await postModel.findByIdAndUpdate(post.studentId,{firstName:student.firstName,lastName:student.lastName,class:student.class})

        logger.info("/modules/post/post.services.js:"," doUpdatePost ", result);
        if (result) {
            return {
                status: true,
                message: "Post updated Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while updating post"
            }
        }
        
    } catch (error) {
        logger.error("/modules/post/post.services.js:"," doUpdatePost ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while updating post, Try after some time!"
            }
        }
    }
}

