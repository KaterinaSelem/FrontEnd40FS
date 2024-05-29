//props - properties
const root = ReactDOM.createRoot(document.getElementById('root')); 
// принятие пропсов
// const Student = (props) => {
//     console.log(props);
// return (
//     <>
//         <h1>Name: {props.name}</h1>
//         <h2>Age: {props.age}</h2>
//     </>
// )
// }

// дистриктурированый пропс:
// const Student = ({name, age}) => {
//     console.log(props);
// return (
//     <>
//         <h1>Name: {name}</h1>
//         <h2>Age: {age}</h2>
//     </>                   
// )
// }

class Student extends React.Component {
    render() {
        // const { name, age } = this.props;
        return (
            <>
            <h1>Name: {this.props.name}</h1>
            <h2>Age: {this.props.age}</h2>
            </>
        )
    }
}

root.render(
    <>
    {/* componrnts exemlar */}
    <Student name = 'Peter' age ={37+3} /> 
    <Student name = 'Mery' age = {26-2}/>
    <Student name =  'Boris' age = {18+4}/>
    <Student name =  'Katy' age = {45}/>
    </>
)