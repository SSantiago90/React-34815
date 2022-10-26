import "./mybutton.css";

function MyButton(props) {
  console.log(props);

  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.children}
    </button>
  );
}

export default MyButton;
