const logger = require('./logger')
const _ = require('lodash')

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

const mostBlogs = (blogs) => {
    let dicConteo = {}

    for (const blog of blogs){
        const autor = blog.author
        if (autor in dicConteo){
            dicConteo[autor] += 1
        }
        else {
            dicConteo[autor] = 1
        }
    }

    const arrayPares = Object.entries(dicConteo)
    let autorMasBlogs = ''
    let numMasBlogs = 0
    for (const par of arrayPares){
        const [autor, numBlogs] = par
        if (numBlogs > numMasBlogs){
            autorMasBlogs = autor
            numMasBlogs = numBlogs
        }
     }

     return {
        author: autorMasBlogs,
        blogs: numMasBlogs
     }
}

const mostBlogs2 = (blogs) => {
    const dicConteo = _.countBy(blogs, 'author')
    const arrayPares = Object.entries(dicConteo)
    const [autorMasBlogs, masBlogs] = _.maxBy(arrayPares, ( [autor, blogs] ) => blogs)
    return {
        author: autorMasBlogs,
        blogs: masBlogs
    }
}

const mostLikes = (blogs) => {
    const agrupacionAutor = _.groupBy(blogs, 'author')
    const arrayParesAgrupacion = Object.entries(agrupacionAutor)

    const arrayMostLikes = []
    for (const [autor, arrayBlogs] of arrayParesAgrupacion) {
        const sumLikes = _.sumBy(arrayBlogs, 'likes')
        arrayMostLikes.push({
            author: autor,
            likes: sumLikes
        })
    }

    const autorMasLikes = _.maxBy(arrayMostLikes, ( {author, likes} ) => likes)
    return autorMasLikes
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostBlogs2,
    mostLikes
}