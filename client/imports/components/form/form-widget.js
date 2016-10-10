import React from "react";
import FormContainer from "./form-container";

//
class FormWidget extends React.Component {

  render() {
    console.log(<FormContainer />)
    return (
      <FormContainer />
    );
  }

}

FormWidget.propTypes = {
};

export default FormWidget;
