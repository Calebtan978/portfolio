import subComponents from "./subComponents";

const Main = ({closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        {subComponents.map((w, index) => {
          return(
            <div key = {index}>
              {w.component}
            </div>
          )
        })}
    </div>
  )
};

export default Main;
