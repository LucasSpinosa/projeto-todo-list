import { useState } from "react";
import {FaBars} from "react-icons/fa";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Criar Tarefas");

  const menuItems = [
    { name: "Criar Tarefas", icon: "bi-house" },
    { name: "Gerenciar Tarefas", icon: "bi-speedometer2" },
    { name: "Editar Tarefas", icon: "bi-table" },
  ];

  return (
    <>
      <header>
        {/* Mobile Menu */}
        <div className="
          d-flex 
          d-md-none 
          justify-content-between 
          bg-body-tertiary 
          p-4 
          align-items-center
        ">
          <span className="display-4">GerenciaLista</span>
          <button
            className="btn btn-secondary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <FaBars/>
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
              Offcanvas with body scrolling
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
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
                    <i className={`bi ${item.icon} me-2`}></i>
                    {item.name}
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
