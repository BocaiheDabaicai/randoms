export default defineEventHandler(async (event, context) => {
    /*const id = getRouterParam(event,'id')
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const body = await readBody(event)
    const data = await $fetch(url, {
        method:'PUT',
        body
    })

    return data*/
    return {
        status:'200',
        content:'finished'
    }
})