import React from "react";
function List({people}){
    return(
        <>
        {
            people.map((user)=>{
                const {id,name,age,image}=user;
                return(
                    <article key={id} className="person">
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })
        }
        </>
    );
}
export default List;