import {
  BTN_COLOR,
  BTN_SIZE,
  BTN_STYLE,
  Button,
} from "./components/Button/Button";

const App = () => {
  return (
    <div>
      <Button
        title="Hello"
        btnColor={BTN_COLOR.RED}
        btnSize={BTN_SIZE.SMALL}
        btnStyle={BTN_STYLE.primary}
        isDisabled={true}
      >
        Asrbek
      </Button>
    </div>
  );
};

export default App;
