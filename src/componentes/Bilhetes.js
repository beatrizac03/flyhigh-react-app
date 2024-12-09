import { useState, useEffect, useRef } from "react";
import { findAll, save, deleteById } from "../api/api";
import "./Bilhetes.css";

export default function Bilhetes() {
  const [bilhetes, setBilhetes] = useState([]);

  const numeroRef = useRef();
  const assentoRef = useRef();
  const dtPartidaRef = useRef();
  const dtChegadaRef = useRef();
  const tipoRef = useRef();
  const valorRef = useRef();

  useEffect(() => {
    async function getDados() {
      const dados = await findAll();
      setBilhetes(dados);
    }
    console.log(bilhetes);
    getDados();
  }, []);

  async function handleSubmit() {
    console.log(numeroRef.current.value, tipoRef.current.value);

    try {
      const numero = numeroRef.current.value;
      const assento = assentoRef.current.value;
      const dataPartida = dtPartidaRef.current.value;
      const dataChegada = dtChegadaRef.current.value;
      const tipo = tipoRef.current.value;
      const valor = valorRef.current.value;

      console.log({ numero, assento, dataPartida, dataChegada, tipo, valor });

      const novoBilhete = await save(
        Number(numero),
        assento,
        dataPartida,
        dataChegada,
        tipo,
        Number(valor)
      );

      console.log(novoBilhete);

      setBilhetes((bilhetesAnteriores) => [...bilhetesAnteriores, novoBilhete]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <div className="container-form">
        <h1>Cadastro de Bilhetes</h1>
        <div className="inputs">
          <div className="c-input">
            <label htmlFor="numero">NÚMERO</label>
            <input type="number" id="numero" ref={numeroRef} />
          </div>

          <div className="c-input">
            <label htmlFor="assento">ASSENTO</label>
            <input type="text" id="assento" ref={assentoRef} />
          </div>

          <div className="c-input">
            <label htmlFor="dtPartida">Data de Partida</label>
            <input type="date" id="dtPartida" ref={dtPartidaRef} />
          </div>

          <div className="c-input">
            <label htmlFor="dtChegada">Data de Chegada</label>
            <input type="date" id="dtChegada" ref={dtChegadaRef} />
          </div>

          <div className="c-input">
            <label htmlFor="tipo">Tipo:</label>
            <select ref={tipoRef} id="tipo">
              <option>Leito</option>
              <option>Semi Leito</option>
            </select>
          </div>

          <div className="c-input">
            <label htmlFor="valor">Valor:</label>
            <input type="number" id="valor" ref={valorRef} />
          </div>

          <button onClick={handleSubmit}>Cadastrar</button>
        </div>
      </div>

      <div className="c-all">
        {bilhetes.map((b, index) => (
          <div key={index} className="bilhete-card">
            <h2>Número: {b.numero}</h2>
            <h2>Assento: {b.assento}</h2>
            <h2>Data de Partida: {b.dataPartida}</h2>
            <h2>Data de Chegada: {b.dataChegada}</h2>
            <h2>Tipo: {b.tipo}</h2>
            <h2>Valor: {b.valor}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
