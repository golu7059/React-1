function List(props){
    const ListItems = props.items.map((item)=>
    <li key={item}>{item}</li>
    );

    return (
        <ul>{ListItems}</ul>
    )
}

export default List;