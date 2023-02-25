export default function ExampleApi(request, response) {
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toString(),
    })
}