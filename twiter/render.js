const Renderer = function () {
    const renderComment = function (postID, comments) {
        console.log(comments)
        let commentBox = $(`<div class=pleaseWork> </div>`)
        for (let i = 0; i < comments.length; i++) {
            commentBox.append($(`<div>
        <span class=delete-comment onclick=recomment(${postID},${comments[i].id})>X</span>
        <span class=myComment>${comments[i].txt}</span>
        </div>
       `))
        }
        return commentBox
    }

    const renderPosts = function (posts) {
        $("#posts").empty()
        const p = posts
        for (let i = 0; i < p.length; i++) {
                    const postBox= $(
                    `<div class=post data-id=${p[i].id}>
                        <div class=post-text>${p[i].txt}</div>
                        <div class=comments>
                                <div class=my  data-commentID=${p[i].id}></div>
                                <input type="text" placeholder="comment!" class="com">
                                <button class=spaicel >add comment </button>
                        </div>
                        <div class=delete onclick=remove(${p[i].id})> delete</div>
                    </div>`)
            postBox.append(renderComment(p[i].id, p[i].comments))
         $("#posts").append(postBox)
        }

    }

    return {
        renderPosts: renderPosts,

    }

}

