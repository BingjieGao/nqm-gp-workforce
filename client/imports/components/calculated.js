import TableControl from "./controls/tableControl";
import WorkforceControl from "./controls/WorkforceControl";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class CalculatedComponents extends Component{

  constructor(props) {
    super(props);
    this.state = {
      TableData: this.props.TableData
    }
  }

  render(){
    return(
        <MuiThemeProvider>
          <TableControl TableData={this.state.TableData}>
        </MuiThemeProvider>
    )
  }
}
