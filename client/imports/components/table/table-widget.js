import React from "react";
import TableContainer from "./table-container";
import TableControl from "../tableControl/tableControl";
import {TableCalculator} from "../../functions/tableCalculator";

class TableWidget extends React.Component {

  render() {

    var widget_data = this.props.data;
    var tableId = "first";
    var tablename = "first table";
    return (
      <div className="flex-container">
        <TableContainer tableId={tableId} tablename={tablename} />
      </div>
    );
  }

}

TableWidget.propTypes = {
};

export default TableWidget;
