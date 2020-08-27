import React from 'react'
export default () => {
    return (
        <div>
            <p>Default</p>
        </div>
    )
}
const Description2 = (prop) => {
    return (
        <div>
            <p >
                I'm {prop.name == null ? 'not yet' : prop.name}
            </p>
        </div>
    );
}
export { Description2 }