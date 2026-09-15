import React from "react";

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
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
