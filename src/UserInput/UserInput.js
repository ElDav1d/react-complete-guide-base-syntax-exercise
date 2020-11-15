const userInput = (props) => {
  const inputStyle = {
    display: 'block',
    margin: '1rem auto',
  }

  return (
    <form>
      <label>Input a new username</label>
      <input
        style={inputStyle}
        onChange={props.changed}
        type="text"
        value={props.name}/>
    </form>
  )
};

export default userInput;