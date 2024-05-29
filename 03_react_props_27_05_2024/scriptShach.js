
const root = ReactDOM.createRoot(document.getElementById('root')); 

const ShachChempion = ({firstName, lastName, country, years}) => {
   
return (
    <>
        <h2>Name: {firstName}</h2>
        <h1>Surname: {lastName}</h1>
        <h2>Country: {country}</h2>
        <h2>Years: {years}</h2>
        
    </>                   
)
}

const champions = [
    {firstName:'Анатолий', lastName:'Карпов', country:'Россия', years:'1993-1999'},
    {firstName:'Александр', lastName:'Халифман', country:'Россия', years:'1999–2000'},
    {firstName:'Вишванатан', lastName:'Ананд', country:'Индия', years:'2000–2002'}
];

root.render(
    <>
    {/* <ShachChempion firstName = 'Анатолий' lastName = 'Карпов' country = 'Россия' years = '1993-1999' /> 
    <ShachChempion firstName = 'Александр' lastName = 'Халифман ' country = 'Россия' years = '1999–2000' /> 
    <ShachChempion firstName = 'Вишванатан' lastName = 'Ананд' country = 'Индия' years = '2000–2002' /> 
    <ShachChempion firstName = 'Руслан' lastName = 'Пономарёв' country = 'Украина' years = '2002–2004' /> 
    <ShachChempion firstName = 'Вишванатан' lastName = 'Ананд' country = 'Индия' years = '2007–2013' />  */}
    { champions.map((elem, index) => (
        <ShachChempion key = {index} lastName={elem.lastName}/>
    )) }
    </>
)