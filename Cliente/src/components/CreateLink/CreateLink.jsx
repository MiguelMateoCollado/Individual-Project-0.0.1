/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@mui/material";
import Styles from "./CreateLink.module.css";

function CreateLink({css}) {
  return (
    <Link
      color="none"
      underline="none"
      className={Styles.boton}
      href="/create"
    >
      Create
    </Link>
  );
}

export default CreateLink;
