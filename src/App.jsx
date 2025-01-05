import {useState} from 'react'
import './App.css'

function App() {

    const [name, setName] = useState("João");
    const [buttonContent, setButtonContent] = useState("Mudar para José");
    function changeName() {
        setName("José");
        setButtonContent("Nome alterado");
    }

    let nameWithoutHook = "João";
    function tryChangeName() {
        nameWithoutHook = "José";
    }

    return (
        <div>
            <p>Nome a ser re-renderizado pelo navegador após o React atualizar o seu estado, recriar o VDOM, e  aplicar o que mudou nele ao DOM:</p>
            <button onClick={changeName}>{buttonContent}:</button>
            {name}
            <p>Nome atualizado sem ser pelo React:</p>
            <button onClick={tryChangeName}>Tentar mudar para José:</button>
            {nameWithoutHook}
        </div>
    );
}

export default App