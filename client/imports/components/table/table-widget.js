import React from "react";
_ = lodash;

import TableContainer from "./table-container";

class TableWidget extends React.Component {

  render() {
  //  console.log(this.props.data);
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
