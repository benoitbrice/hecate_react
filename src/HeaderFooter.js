import Menu from "./Menu";

function HeaderFooter(props){
    return (
        <>
            <div>{props.titre}</div>
            <Menu testClic={props.testClic}></Menu>
        </>
    )
}

export default HeaderFooter;