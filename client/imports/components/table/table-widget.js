import React from "react";
import TableContainer from "./table-container";
import TableControl from "../controls/tableControl"

class TableWidget extends React.Component {

  render() {

    var widget_data = this.props.data;
    var tableId = "first";
    var tablename = "first table";
    return (
        <TableContainer tableId={tableId} tablename={tablename} />
    );
  }

}

TableWidget.propTypes = {
};

export default TableWidget;
