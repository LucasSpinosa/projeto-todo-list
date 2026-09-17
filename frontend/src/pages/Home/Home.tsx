import styles from "./Home.module.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z.object({
  title: z.string().min(1, "É obrigatório informar o título da tarefa!"),

  description: z
    .string()
    .min(1, "É obrigatório informar a descrição da tarefa!"),

  steps: z.string().optional(),

  priority: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "É obrigatório selecionar uma prioridade!" }),
  }),
});

type RegisterData = z.infer<typeof registerSchema>;

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>({ resolver: zodResolver(registerSchema) });

  const handleSendForm = (data: RegisterData) => {
    //Trocar por API depois
    const tasks = localStorage.getItem("tasks");

    if (tasks == null) {
      localStorage.setItem("tasks", JSON.stringify([data]));
    } else {
      if (tasks != null) {
        const arrayTasks = JSON.parse(tasks);

        arrayTasks.push(data);

        localStorage.setItem("tasks", JSON.stringify(arrayTasks));
      }
    }

    alert("Tarefa inserida!")
  };

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
            <form onSubmit={handleSubmit(handleSendForm)}>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  <b>
                    Título<span className="text-danger">*</span>
                  </b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  {...register("title")}
                  placeholder="Informe o título da tarefa"
                />
                {errors.title && (
                  <span className="text-danger mt-2">
                    {errors.title.message}{" "}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  <b>
                    Descrição<span className="text-danger">*</span>
                  </b>
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="description"
                  {...register("description")}
                  placeholder="Informe a descrição da tarefa"
                />
                {errors.description && (
                  <span className="text-danger mt-2">
                    {errors.description.message}{" "}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="steps" className="form-label">
                  <b>Passos da Tarefa</b>
                </label>
                <textarea
                  className="form-control"
                  rows={8}
                  id="steps"
                  {...register("steps")}
                  placeholder="Informe os passos para completar a tarefa (um por linha)"
                />
              </div>
              <div className="mb-3 col-12 col-lg-5">
                <label htmlFor="priority" className="form-label">
                  <b>
                    Prioridade da Tarefa<span className="text-danger">*</span>
                  </b>
                </label>
                <select
                  className="form-select w-md-25"
                  {...register("priority")}
                  id="priority"
                  defaultValue={""}
                >
                  <option disabled value="">
                    Selecione uma prioriedade
                  </option>
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
                {errors.priority && (
                  <span className="text-danger mt-2">
                    {errors.priority.message}{" "}
                  </span>
                )}
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
                  <b>{isSubmitting ? "Enviando" : "Salvar"}</b>
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
