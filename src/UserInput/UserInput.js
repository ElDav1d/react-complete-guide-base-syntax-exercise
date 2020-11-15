const userInput = (props) => {
  return (
    <div>
      <input
        onChange={props.changed}
        type="text"
        value={props.name}/>
    </div>
  )
};

export default userInput;