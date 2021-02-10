import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <form action="">
            <input type="text" className="task-input"/>
            <div className="buttons">
              <button type="submit" className="btn add-task-btn">Adicionar</button>
              <button className="btn clear-btn">Limpar</button>
            </div>
          </form>
          <div>
            <ul className="list-tasks">
              <li className="list-item">
                <span>Tarefa 1</span>
                <div>
                  <button>Deletar</button>
                  <button>Editar</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;