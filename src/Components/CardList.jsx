import React from "react";


export const CardList = props =>(
        <>
            {props.frameworks.map(framework=>(
                <div className="card">
                <h2>{framework.name} - {framework.language}</h2>
                <img src={`/img/${framework.imgTag}.png`} height="60%" width="100%" alt="photo" />
                <p>Catégory : {framework.category}</p>
            </div>
            ))}
       </>
    );
