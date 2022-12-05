import Cards from './components/Cards';

function Main(props){

    return(
        <>
        <div>Contenu</div>
        {(props.listSchool).map((obj, i) => {
            return <Cards obj={obj}></Cards>
        })}
       </>
    )
}

export default Main;