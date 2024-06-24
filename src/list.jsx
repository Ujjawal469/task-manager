const List = () => {
    const lst = ["CODING", "DEVELOPMENT", "FRIENDS"];
    return (
        <div>
            <h1>Skills</h1>
            {lst.map((item, index) => (
                <li key={index}> {item} </li>
            ))}
        </div>
    );
};

export default List;