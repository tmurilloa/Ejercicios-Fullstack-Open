const { test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const logger = require('../utils/logger')

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }  
]

// Test de funcion de 4.3
test('dummy returns one', () => {

    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
})

// Test de funcion de 4.4
describe('Total likes', () => {
    test('Con la lista de blogs completa', () => {
        const result = listHelper.totalLikes(blogs)
        let sumaTotal_Assert = 0
        for (const blog of blogs){
            sumaTotal_Assert += blog.likes
        }
        logger.info(sumaTotal_Assert)

        assert.strictEqual(result, sumaTotal_Assert)
    })

})

// Test de funcion 4.5
describe('Favorite blog', () => {

  test('Con la lista de blogs completa', () => {
    const result = listHelper.favoriteBlog(blogs)
    const favoriteBlog_Assert = {
      "title": "Canonical string reduction",
      "author": "Edsger W. Dijkstra",
      likes: 12
    }

    assert.deepStrictEqual(result,favoriteBlog_Assert)
  })
})

// Bloque de tests de funcion 4.6
describe('Most blogs', () => {

  test('Con la funcion hecha por logica mostBlogs', () => {
    const result = listHelper.mostBlogs(blogs)
    logger.info(result)
    const mostBlogs_Assert = {
      author: "Robert C. Martin",
      blogs: 3
    }

    assert.deepStrictEqual(result, mostBlogs_Assert)
  })

  test('Con la funcion hecha con lodash', () => {
    const result = listHelper.mostBlogs2(blogs)
    logger.info(result)
    const mostBlogs_Assert = {
      author: "Robert C. Martin",
      blogs: 3
    }

    assert.deepStrictEqual(result, mostBlogs_Assert)
  })

})

// Test de funcion 4.7
describe('Most Likes', () => {

  test('con la lista de blogs completa', () => {
    const result = listHelper.mostLikes(blogs)
    logger.info(result)
    const mostLikes_Assert = {
      author: "Edsger W. Dijkstra",
      likes: 17
    }

    assert.deepStrictEqual(result, mostLikes_Assert)
  })
})