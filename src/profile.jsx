const Profile =(Props) =>{
    const profession = "MULTItalented";
    return (
        <div>
            <h1>Name: {Props.name}</h1>
            <p>age: {Props.age}</p>
            <p>profession: {profession}</p>
        </div>
    );
};

export default Profile;