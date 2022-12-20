/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import Styles from "./CreateLink.module.css";
function CreateLink() {
  return (
    <Link className={Styles.selecter} to="/create">
      Create
    </Link>
  );
}

export default CreateLink;
