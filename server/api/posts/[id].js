export default defineEventHandler(async (event) => {
    /*const id = getRouterParam(event,'id')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const data = await $fetch(url)

    return data*/

    return {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
})