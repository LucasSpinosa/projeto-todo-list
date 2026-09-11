import { useState } from "react";
import { FaBars, FaClipboardList } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

import { IoIosCreate } from "react-icons/io";

import styles from "./Header.module.css"

const Header = () => {
  const [activeItem, setActiveItem] = useState("Criar Tarefas");

  const menuItems = [
    { name: "Criar Tarefas", icon: <IoIosCreate size={20}/> },
    { name: "Gerenciar Tarefas", icon: <FaClipboardList size={20} /> },
    { name: "Editar Tarefas", icon: <CiEdit size={20}/> },
  ];

  return (
    <>
      <header>
        {/* Mobile Menu */}
        <div
          className="
          d-flex 
          d-md-none 
          justify-content-between 
          bg-body-tertiary 
          p-4 
          align-items-center
        "
        >
          <span className="display-4 fw-semibold">GerenciaLista</span>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <FaBars />
          </button>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex={-1}
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
              Selecione a página desejada!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav nav-pills flex-column mb-auto">
              {menuItems.map((item) => {
                const isActive = activeItem === item.name;
                return (
                  <li key={item.name} className="nav-item">
                    <button
                      type="button"
                      className={`nav-link text-start w-100 ${
                        isActive ? "active" : "link-body-emphasis"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setActiveItem(item.name)}
                    >
                      <div className="d-flex align-items-center">
                      {item.icon}
                      <span className={`ms-1 ${styles.linkText}`}>{item.name}</span>
                    </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Tablet / Desktop */}
        <div
          className="d-none d-md-block d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary vh-100"
          style={{ width: "280px" }}
        >
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-2 fw-semibold">GerenciaLista</span>
          </a>

          <hr />

          <ul className="nav nav-pills flex-column mb-auto">
            {menuItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <li key={item.name} className="nav-item">
                  <button
                    type="button"
                    className={`nav-link text-start w-100 ${
                      isActive ? "active" : "link-body-emphasis"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <div className="d-flex align-items-center">
                      {item.icon}
                      <span className={`ms-1 ${styles.linkText}`}>{item.name}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
