import { useEffect, useState } from "react";
import Menu from "./Menu";

function HeaderFooter(props){

    const [search, setSearch] = useState("");

    function changeValue(field){
        setSearch(field.currentTarget.value);
    }

    useEffect(()=>{
        fetch('https://127.0.0.1:8000/query/' + search)
        .then(function(response) {
            return response.json();
          })
        .then(function(body){
            console.log(body);
            props.setListSchool(body);
        });
    }, [search]);

    return (
        <>
            { props.titre == "Header" &&
                <input type="text" value={search} onChange={changeValue} />
            }
            <div>{props.titre}</div>
            <Menu testClic={props.testClic}></Menu>
        </>
    )
}

export default HeaderFooter;