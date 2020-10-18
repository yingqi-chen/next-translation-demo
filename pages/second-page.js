import { withTranslation } from "../i18n"


class SecondPage extends React.Component {
    render() {
    return <h1>{this.props.t('nested.content')}</h1>;
    }
  }
export default withTranslation('common')(SecondPage)