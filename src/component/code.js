import { useState } from "react";


function Code() {

    // // Swapping first two elements of the array
    // let array = [10, 2, 5, 12, 7];
    // [array[0], array[1]] = [array[1], array[0]];
    // console.log("Array after swapping : " + array);

    const [value, setValue] =useState(1);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (

        <>
            <input ref="email" value={value} onChange={handleChange} />
            <button disabled={!value}>Let me in</button>
        </>

    );
}
export default Code;
