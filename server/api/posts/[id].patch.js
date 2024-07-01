export default defineEventHandler(async (event) => {
    /*const id = getRouterParam(event,'id')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const body = await readBody(event)
    const data = await $fetch(url,{
        method:'patch',
        body
    })

    return data*/

    return {
        "userId": 1,
        "id": 5,
        "title":"Greeting",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "content":"Hello World"
    }
})