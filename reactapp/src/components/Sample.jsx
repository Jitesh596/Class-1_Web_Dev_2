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


import React, {Component, useState} from "react";

function Sample(probs) {

    const [name, setname] = useState("Jitesh");
    const [age, setCount] = useState(20);

    return (
        <div>   
            <h2>Trending Topics</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <h3>{name}</h3>
            <button onClick={() => {
                setname("Vishnu");

            }}> Name Change </button>

            </button>
        </div>
    )
}



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