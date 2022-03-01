import "./styles.css";
import CheckboxWithLabel from "spider-vision/CheckboxWithLabel";
import snackbarMachine from "spider-vision/AlertBar/snackbarMachine";
import BaseDialogModal from "spider-vision/BaseDialogModal/BaseDialogModal";
import genBaseModalMachine from "spider-vision/BaseDialogModal/baseModalMachine";
import { useMachine } from "@xstate/react";

const baseModalMachine = genBaseModalMachine({ initial: "invisible" });

export default function App() {
  const [snackbarState] = useMachine(snackbarMachine);
  const [baseModalState, sendBaseModalState, baseModalService] = useMachine(
    baseModalMachine
  );

  console.log(snackbarState);

  return (
    <div className="App">
      <CheckboxWithLabel labelOff={"off"} labelOn={"on"} />
      <BaseDialogModal
        title="BaseDialogModal示例"
        baseModalService={baseModalService}
      >
        这里是一个BaseDialogModal
      </BaseDialogModal>
    </div>
  );
}
