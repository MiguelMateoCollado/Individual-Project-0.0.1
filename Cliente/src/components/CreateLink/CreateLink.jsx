/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@mui/material";
import Styles from "./CreateLink.module.css";

function CreateLink() {
  return (
    <Link
      color="none"
      underline="none"
      className={Styles.selecter}
      href="/create"
    >
      Create
    </Link>
  );
}

export default CreateLink;
