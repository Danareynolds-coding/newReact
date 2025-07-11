import propTypes from 'newreact/src/Student.jsx';
import './index.css'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age:{props.age}</p>
            <p>Student:{props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
    name:propTypes.string,
    age:propTypes.number,
    isStudent:propTypes.bool,
}
Student.defaultProps = {
    name:"guest",
    Age:0,
    isStudent:false,
}
export default Student