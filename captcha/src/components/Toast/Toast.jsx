import "./Toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";
export function Toast({ hideToast, toast }) {
  return (
    <div className={toast.isVisible ? "toast show" : "toast hide"}>
      <span style={{ padding: "0.5rem" }}>{toast.message}</span>
      <button
        type="button"
        className="icon--button"
        onClick={() => {
          console.log("toast bar closed");
          hideToast();
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}
