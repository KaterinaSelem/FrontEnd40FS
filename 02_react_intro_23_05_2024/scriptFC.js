//functional component

const root = ReactDOM.createRoot(document.getElementById('root')); //получили ссылку в вирт дом

function Cohort40(){
    return (
        <>
    <h1 style={{ textAlign: 'center'  }}>Hello world!</h1>
    <h1 className = ''>It`s me again!</h1>
    </>
)
}

root.render(
    <>
    <Cohort40 />
    <Cohort40 />
    <Cohort40 />
    </>
);