import React, { PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren<unknown>) => {
    return (
        // <div style={{backgroundColor: '#f5f6f7'}}>
        //     {props.children}
        // </div>
        <div>
            {props.children}
        </div>
    )
}