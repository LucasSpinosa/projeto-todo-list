"use no memo";

import { useForm } from "react-hook-form";

import styles from "./ManageTasks.module.css";

import type { Task } from "../../types/task";
import { useState } from "react";

interface SearchFormData {
  keyword: string;
  priority: "" | "low" | "medium" | "high";
  status: "" | "working" | "done";
}

const ManageTask = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormData>({
    defaultValues: {
      keyword: "",
      priority: "",
      status: "",
    },
  });

  const handleClearFormFields = () => {
    reset();
  };

  const [tasks, setTasks] = useState<Task[]>();

  const handleSendForm = () => {
    //Trocar para API depois
    // let keywords = data.keyword.split(',');

    // keywords = keywords
    //   .map((keyword) => keyword.trim())
    //   .filter((keyword) => keyword !== "");

    if (!localStorage.getItem("tasks")) {
      setTasks([]);
    } else {
      console.log(JSON.parse(localStorage.getItem("tasks")!));
      setTasks(JSON.parse(localStorage.getItem("tasks")!));
    }
  };

  return (
    <>
      <div className="jumbotron mt-5">
        <h1 className="display-4 ps-4">Gerenciar Tarefas</h1>
        <p className="lead ps-4 mt-4 ps-4">
          Pesquise suas tarefas, edite tarefas, apague tarefas, marque como
          concluídas!
        </p>
        <hr className="my-4 w-100" />
      </div>
      <main className="ps-md-4 me-md-4">
        <div className="card">
          <div className="card-header">
            <h5>Buscar e Filtrar Tarefas</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSendForm)}>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  <b>Palavras-chave</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  {...register("keyword")}
                  placeholder="Informe palavras que estão no título, descrição ou passos, separadas por vírgula"
                />
              </div>
              <div className="mb-3 col-12 col-lg-5">
                <label htmlFor="priority" className="form-label">
                  <b>Prioridade da Tarefa</b>
                </label>
                <select
                  className="form-select w-md-25"
                  {...register("priority")}
                  id="priority"
                >
                  <option value="">Selecione uma prioriedade</option>
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
              </div>
              <div className="mb-3 col-12 col-lg-5">
                <span className="form-label">
                  <b>Status da Tarefa</b>
                </span>
                <div className="d-flex mt-2">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="statusWorking"
                      {...register("status")}
                      value={"working"}
                    />
                    <label className="form-check-label" htmlFor="statusWorking">
                      Em Progresso
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="statusDone"
                      {...register("status")}
                      value={"done"}
                    />
                    <label className="form-check-label" htmlFor="statusDone">
                      Finalizada
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4 mb-4">
                <button
                  type="submit"
                  className={`btn 
                  btn-primary 
                  me-4
                  ${styles.button}
                  `}
                  disabled={isSubmitting}
                >
                  <b>{isSubmitting ? "Pesquisando" : "Pesquisar"}</b>
                </button>
                <button
                  type="button"
                  onClick={handleClearFormFields}
                  className={`btn btn-secondary me-3`}
                >
                  <b>Limpar Campos</b>
                </button>
              </div>
            </form>
          </div>
        </div>
        {tasks && tasks.length == 0 && (
          <>
            <div className="my-4 w-100 text-center">
              <span>Não foram encontradas tarefas para exibir.</span>
            </div>
          </>
        )}
        {tasks && tasks.length >= 1 && (
          <div
            className="accordion mt-4 mb-3"
            id="accordionPanelsStayOpenExample"
          >
            {tasks.map((task) => (
              <div className="accordion-item" key={task.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${task.status === "working" ? "bg-body" : "bg-success"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse${task.id}`}
                    aria-expanded="true"
                    aria-controls={`panelsStayOpen-collapse${task.id}`}
                  >
                    <span
                      className={`fw-bold ${task.status === "working" ? "text-black" : "text-white"}`}
                    >
                      {task.title}
                    </span>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse${task.id}`}
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      <span className="fw-bold">Descrição: </span>3
                      {task.description}
                    </p>
                    {task.steps.length >= 1 && (
                      <>
                        <span className="fw-bold"> Passos da Tarefa:</span>
                        <div className="form-check mt-3 ms-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="check1"
                            name="option1"
                            value="something"
                            checked
                            disabled
                          />
                          <label className="form-check-label">Option 1</label>
                        </div>
                      </>
                    )}
                    <p className="fw-bold mt-3">
                      Prioridade:{" "}
                      <span
                        className={`
                        ${task.priority === "low" && "text-info"} 
                        ${task.priority === "medium" && "text-warning"} 
                        ${task.priority === "high" && "text-danger"}
                        `}
                      >
                        {task.priority === "low" && "Baixa"}
                        {task.priority === "medium" && "Média"}
                        {task.priority === "high" && "Alta"}
                      </span>
                    </p>
                    <div className="d-flex justify-content-end">
                      <button
                        className="btn btn-success me-4"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <b>Concluir</b>
                      </button>
                      <button className="btn btn-primary me-4">
                        <b>Editar</b>
                      </button>
                      <button className="btn btn-danger me-2">
                        <b>Deletar</b>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        z-index="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Concluir Tarefa
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Tem certeza que deseja marcar essa tarefa como concluída?
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-success me-4"
                data-bs-dismiss="modal"
              >
                <b>Confirmar</b>
              </button>
              <button
                type="button"
                className="btn btn-secondary me-3"
                data-bs-dismiss="modal"
              >
                <b>Cancelar</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTask;
