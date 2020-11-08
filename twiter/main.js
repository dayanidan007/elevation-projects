
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const addcomment = function () {
    let com = $(this).closest(".post").data().id
    let inputVal = $(this).closest(".comments").find(".com").val()
    console.log(inputVal)
    tweeter.addComment(com, inputVal)
    renderer.renderPosts(tweeter.getPosts())

}
$("#posts").on("click", ".spaicel", addcomment)


const recomment = function (postID, commentID) {
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
}



const remove = function (postID) {
    let re = postID
    tweeter.removePost(re)
    renderer.renderPosts(tweeter.getPosts())
}


$("#post").on("click", function () {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    console.log(posts)

})




