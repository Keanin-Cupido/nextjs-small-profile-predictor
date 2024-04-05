interface Params {
    params: { name: string }
}

export default function Prediction({params}: Params) {
    const label = "hello"
    return (
        <h1>{params.name}</h1>
    )
}