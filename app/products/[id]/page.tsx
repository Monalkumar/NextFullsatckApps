export default async function  ProductItems({params}:{params:Promise<{id:string}>}){
    const {id} = await params
    return (
        <div><h2>products {id}</h2></div>
    )

}