import {compose} from "react-komposer";
import loadData from "../../composers/load-resource";
import Pyramid from "./pyramid-display";

export default compose(loadData)(Pyramid);
