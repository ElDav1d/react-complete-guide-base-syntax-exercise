import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="User">
      <div>{props.children}</div>
      <h3>I'm {props.userName}</h3>
      <p>I'm paragraph 1</p>
      <p>I'm paragraph 2</p>
    </div>
  )
};

export default userOutput;