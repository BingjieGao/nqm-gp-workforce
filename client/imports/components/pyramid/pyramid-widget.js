import React from "react";
import { Meteor } from "meteor/meteor";

import PyramidContainer from "./pyramid-container";
import Paper from "material-ui/Paper"

class PyramidWidget extends React.Component {

  render() {
    const filter = {
      "year": {
        "$eq": this.props.year
      }
    };
    let age_bands = this.props.age_bands;
    if (age_bands[0] === "All Ages" && age_bands.length === 1) {
      age_bands = Meteor.settings.public.age_bands;
    }

    return(

          <PyramidContainer wgtId={this.props.wgtId}
                            resourceId={this.props.popletDatasetId}
                            filter={filter}
                            options={{limit: 2500}}
                            female={this.props.female}
                            male={this.props.male}
                            age_bands={age_bands}
                            top={this.props.top}
                            width={this.props.width}
                            height={this.props.height}
                            left={this.props.left}
                            right={this.props.right}
                            />
    );
  }


}

PyramidWidget.propTypes = {
  age_bands: React.PropTypes.array.isRequired,
  male: React.PropTypes.bool.isRequired,
  female: React.PropTypes.bool.isRequired,
  year: React.PropTypes.string.isRequired,
  popletDatasetId: React.PropTypes.string.isRequired,
  wgtId: React.PropTypes.string.isRequired
};

export default PyramidWidget;
