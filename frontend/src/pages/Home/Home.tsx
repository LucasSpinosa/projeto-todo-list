import React from "react";

import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <div className="jumbotron mt-5">
        <h1 className="display-4 ps-4">Criar Tarefas</h1>
        <p className="lead ps-4 mt-4 ps-4">
          Crie suas tarefas informando título, descrição, passos e prioridade!
        </p>
        <hr className="my-4 w-100" />
      </div>
      <main className="ps-md-4 me-md-4">
        <div className="card">
          <div className="card-header">
            <h5>Informações da Tarefa</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  <b>Título</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Informe o título da tarefa"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  <b>Descrição</b>
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="description"
                  name="description"
                  placeholder="Informe a descrição da tarefa"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="steps" className="form-label">
                  <b>Passos da Tarefa</b>
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="steps"
                  name="steps"
                  placeholder="Informe os passos para completar a tarefa (um por linha)"
                  required
                />
              </div>
              <div className="mb-3 col-12 col-lg-5">
                <label htmlFor="priority" className="form-label">
                  <b>Prioridade da Tarefa</b>
                </label>
                <select
                  className="form-select w-md-25"
                  name="priority"
                  id="priority"
                  defaultValue={""}
                  required
                >
                  <option disabled value="">
                    Selecione uma prioriedade
                  </option>
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
              </div>
              <div className="d-flex justify-content-end mt-4 mb-4">
                <button type="submit" className={`btn btn-primary me-4 ${styles.button}`}>
                  <b>Salvar</b>
                </button>
                <button className={`btn btn-secondary me-3 ${styles.button}`}>
                  <b>Limpar Campos</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
