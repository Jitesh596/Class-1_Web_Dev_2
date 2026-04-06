// import React from 'react'

// function sample({count, setCount}) {
    
//   return (
//     <div>   
//         <h2>Trending Topics</h2>
//         <p>Check out the latest discussions and trends in the community!</p>
//     <button>
//         className="counter"
//         onClick={() => setCount((count) => count + 1)}

//         count is {count}
//     </button>
//     </div>
//     )
// }


import React, { useState } from "react";

function Sample(props) {

  const [name, setName] = useState("Jitesh");
  const [age, setAge] = useState(20);

  return (
    <div>
      <h2>Trending Topics</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum.
      </p>

      <h3>{name}</h3>
      <h4>Age: {age}</h4>

      <button
        onClick={() => {
          setName("Vishnu");
        }}
      >
        Name Change
      </button>

      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increase Age
      </button>

      <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
      >
        Count is {props.count}
      </button>

    </div>
  );
}

export default Sample;
           



class Sample extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>   
//             <h2>Trending Topics</h2>
//             <p>Check out the latest discussions and trends in the community!</p>
//          <button>
//             className="counter"
//             onClick={() => setCount((count) => count + 1)}

//             count is {this.props.count}
//         </button>
//         </div>
//     )
//   } 

    

    export default sample