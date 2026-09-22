"use no memo";

import { useForm } from "react-hook-form";

import styles from "./ManageTasks.module.css"

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

  const [tasks, setTasks] = useState<Task[]>()

  const handleSendForm = (data: SearchFormData) => {
    //Trocar para API depois
    // let keywords = data.keyword.split(',');
    
    // keywords = keywords
    //   .map((keyword) => keyword.trim())
    //   .filter((keyword) => keyword !== "");

    if(!localStorage.getItem("tasks")){
      setTasks([]);
    }
    else{
      console.log(JSON.parse(localStorage.getItem("tasks")!));
      setTasks(JSON.parse(localStorage.getItem("tasks")!))
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
      </main>
    </>
  );
};

export default ManageTask;
