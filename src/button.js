
function Button(props){
    return (
      <button onClick={props.buttonClicked} className={props.className}>{props.buttonText}</button>
    )
  }

  export default Button;