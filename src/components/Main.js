import subComponents from "./subComponents";

const Main = ({nav, handleNav, closeNav}) => {
  return(
    <div onClick={closeNav } className='main'>
        {subComponents.map((w, index) => {
          return(
            w.component
          )
        })}
    </div>
  )
};

export default Main;
