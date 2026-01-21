import Card from "./Card"
function List(props){
    const listItems = props.items.map(studentId => <Card studentId ={studentId}/> );
    return(
        <>
            <h3> {listItems} </h3>
        </>
    );
}

export default List;