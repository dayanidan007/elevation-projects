const Tweeter = function () {

    const posts = [{ id: 1, txt: "I am the First", comments: [], commentIdCounter: 0 }]
    let postIdCounter = 1

    const getPosts = function () {
        return posts
    }


    const getComments = function (postID,) {
        let go = getPosts()
        for (let i = 0; i < go.length; i++) {
            if (go[i].id == postID) {
                let com = go[i].comments
                return com

            }
        }
    }


    const addPost = function (text) {
        postIdCounter++
        let somePost = { id: postIdCounter, txt: text, comments: [], commentIdCounter: 0 }
        posts.push(somePost)
    }

    const removePost = function (postID) {
        for (let i = 0; i < posts.length; i++) {
            if (postID == posts[i].id) {
                posts.splice(i, 1)
            }
        }
    }

    const addComment = function (postId, text) {
        for (let i = 0; i < posts.length; i++) {
            if (postId == posts[i].id) {
                let com = posts[i].comments
                posts[i].commentIdCounter++
                com.push({ id: posts[i].commentIdCounter, txt: text })
            }
        }
    }

    const removeComment = function (postID, commentID) {
        for (let i = 0; i < posts.length; i++) {
            if (postID == posts[i].id) {
                let tmp = posts[i].comments
                for (let j = 0; j < tmp.length; j++) {
                    if (tmp[j].id == commentID) {
                        posts[i].commentIdCounter--
                        tmp.splice(j, 1)
                    }
                }
            }
        }
    }

    return {
        getPosts: getPosts,
        getComments: getComments,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment

    }
}
