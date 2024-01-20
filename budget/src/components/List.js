import Item from './Item'

function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano={1985}/>
                <Item marca="Lamborghini" ano={1989}/>
                <Item marca="Chrysler"/>
            </ul>
        </>
    )
}

export default List;