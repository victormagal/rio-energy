import './App.css';

import BtnGroup from './components/Button';

function App() {

  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }

  return (
    <div className="App">
      <BtnGroup
        btnButtons={[
          "Ver Nosso Impacto",
          // "Saiba mais",
          // "Fale conosco",
          // "Ver Nosso Impacto",
          // "Ver Nossa Energia",
          // "Ver oportunidades",
          // "Ver RI",
          // "Vamos conversar"
        ]}
        btnClick={printBtnLabel}
      />
    </div>
  );
}

export default App;
