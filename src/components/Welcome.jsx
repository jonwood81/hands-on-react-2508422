
const Welcome = (props) => {
			return <h1>Meet the <i>{props.name}</i></h1>;
}

export default Welcome;

/*can be done ...

    export default = (props) => {
          return <h1>Meet the <i>{props.name}</i></h1>;
    }
    
*/