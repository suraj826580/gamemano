// src/components/useSweetAlert.js
import Swal from "sweetalert2";

export const showAlert = ({
  title = "Alert",
  text = "",
  icon = "info",
  confirmButtonText = "OK",
  background = "#1a1a1a",
  color = "#ffffff",
  showCancelButton = false,
  cancelButtonText = "Cancel",
  cancelButtonColor = "#ff4d4f",
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    cancelButtonColor,
    showCancelButton,
    cancelButtonText,
    background,
    color,
  });
};
