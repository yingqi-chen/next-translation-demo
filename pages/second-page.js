import { withTranslation } from "../i18n"


class SecondPage extends React.Component {
    render() {
    return (
    <>
    <h1>{this.props.t('nested.content')}</h1>
    <h1>{this.props.t('secondFile:second')}</h1>
    </>
    );
    }
  }

//   SecondPage.getInitialProps = async () => ({
//     namespacesRequired: ['common','secondFile'],
//   })
export default withTranslation(['common','secondFile'])(SecondPage)