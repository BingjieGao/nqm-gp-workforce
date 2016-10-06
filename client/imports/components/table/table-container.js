import {compose} from "react-komposer";
import loadData from "../../composers/loadTable";
import Table from "./table-display";
import TableControl from "../tableControl/tableControl";


export default compose(loadData)(Table,TableControl);
