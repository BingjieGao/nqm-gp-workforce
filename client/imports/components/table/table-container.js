import {compose} from "react-komposer";
import loadData from "../../composers/loadTable";
import Table from "./table-display";

export default compose(loadData)(Table);
