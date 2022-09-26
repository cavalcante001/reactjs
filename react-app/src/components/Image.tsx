import  { ReactNode } from 'react';

type Prop = {
    legend: string,
    children: ReactNode
}
export const Image = ({legend,children } : Prop) => {
    return (
        <>
            {children}
            <p>{legend}</p>
        </>
    );
}