type Props = {
    text: string,
    fnButton: () => void

}
export const Button = ({text, fnButton}: Props) => {
    const handleClick = () => {
        fnButton('Frase');
    }
    return (
        <button onClick={handleClick}>{text}</button>
    );
}