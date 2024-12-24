

const Header = ({onHandleDark,mode}) => {

  return (
    <div className="header my-3 container p-4 shadow border border-danger">
      <div className="d-flex justify-content-between align-items-center ">
        <h2 className="fw-bold header-title">NaaMusic</h2>
        <div className="header-content fs-2 d-flex align-items-center g-3">
          <i className="bi bi-heart"></i>
          <button className="btn fs-2" onClick={() => onHandleDark()}>
            {mode?<i className="bi bi-moon-fill"></i>:<i className="bi bi-brightness-high-fill"></i>}
          </button>
          <button className="btn btn-outline-success">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
