const userInput = (props) => {
  return (
    <div>
      <input
        onChange={props.changed}
        type="text"/>
    </div>
  )
};

export default userInput;