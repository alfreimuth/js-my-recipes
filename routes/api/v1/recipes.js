
const router = require('express').Router()
const path = require('path')
const root = path.join(__dirname, '..', '..', '..')
const recipes = require('../../../data/recipes.json')


//const recipes = require('')

router.get('/test', (_, response) => response.send('hi'))

// endpoint 1 (doesnt crash anymore)
router.get('/', async (_, response) => {
    const json = await recipes
    const data = await json.map((recipe => { recipe.id, recipe.title, recipe.image, recipe.prepTime, recipe.difficulty}))
    response.send(data)
})

// endpoint 2 (doesnt work)
router.get('/api/v1/recipe/add', async (request, response) => {
    const { title, image, ingredients, instructions, prepTime, difficulty } = request.body
    const found = recipes.find(r => r.id.toString() === id.toString())
})

// endpoint 3 (doesnt work)
router.get('/api/v1/recipe/:id', async (request, response) => {
    const { id } = request.params
    const found = recipes.find(r => r.id.toString() === id)
    if (found) response.send(found)
        else response.send({error: { message: `Could not find recipe with id: ${id}`}})
})

module.exports = router