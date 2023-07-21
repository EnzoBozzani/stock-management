export const loadItem = (args: any) => {
    const itemId = args.params.id;
    const item = localStorage[itemId];
    if (!item){
        throw new Response('404 Not Found', { status: 404 });
    }
    return JSON.parse(item);
}