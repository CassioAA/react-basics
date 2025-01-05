import {useState} from 'react'
import './App.css'

function App() {

    const [name, setName] = useState("João");
    const [nameButtonContent, setNameButtonContent] = useState("Mudar para José");
    function changeName() {
        setName("José");
        setNameButtonContent("Nome alterado");
    }

    let nameWithoutHook = "João";
    function tryChangeName() {
        nameWithoutHook = "José";
    }

    const [repeatedUserInput, setRepeatedUserInput] = useState("");

    const [showNames, setShowNames] = useState(false);

    return (
        <>
            <div>
                <p>Nome a ser re-renderizado pelo navegador após o React atualizar o seu estado, recriar o VDOM, e
                    aplicar o que mudou nele ao DOM:</p>
                <button onClick={changeName}>{nameButtonContent}:</button>
                {name}
                <p>Nome atualizado sem ser pelo React:</p>
                <button onClick={tryChangeName}>Tentar mudar para José:</button>
                {nameWithoutHook}
            </div>
            <div>
                <input
                    placeholder="Insira aqui um nome:"
                    onChange={
                        (event) => {
                            setRepeatedUserInput(event.target.value);
                        }
                    }
                />
                {repeatedUserInput}
            </div>
            <div>
                <p>Também mostrar, abaixo, os nomes?</p>
                <button
                    onClick={
                        () => {
                            setShowNames(!showNames)
                        }
                    }
                >
                    Mostrar, ou não, os nomes:
                </button>
                {showNames && (
                    <ul>
                        <li>{name}</li>
                        <li>{nameWithoutHook}</li>
                        <li>{repeatedUserInput}</li>
                    </ul>
                )}
            </div>
        </>
    );
}

export default App