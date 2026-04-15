const logger = require('./logger')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let sumaTotal = 0

    for (const blog of blogs){
        logger.info(blog.likes)
        sumaTotal += blog.likes
    }

    return sumaTotal
}

const favoriteBlog = (blogs) => {
    let blogFavorito = blogs[0]

    for (const blog of blogs.slice(1)){
        const likes = blog.likes
        if (blogFavorito.likes < likes){
            blogFavorito = blog
        }
    }
    return {
        "title": blogFavorito.title,
        "author": blogFavorito.author,
        "likes": blogFavorito.likes
    }

}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}