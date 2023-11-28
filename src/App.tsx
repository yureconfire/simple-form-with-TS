import LoginForm from "./components/form/LoginForm";
import Wrapper from "./components/wrapper/Wrapper";
const App: React.FC = () => {
  return (
    <Wrapper>
      <>
        <div className="w-2/4 pl-36">
          <p className="text-[54px] font-bold pb-5">
            Get in <span className="text-rose-500">Touch</span>
          </p>
          <p className="text-sm font-semibold">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
          <LoginForm />
        </div>
        <div className="w-2/4 pr-36"></div>
      </>
    </Wrapper>
  );
};

export default App;
