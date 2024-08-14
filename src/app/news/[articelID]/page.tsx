export default function Articel( { params }: {params: {articelID: string }; }) {
    return <h1>Das ist ein Artikel { params.articelID }</h1>
}