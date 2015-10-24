'use strict';

class FacetTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leprosy: this.props.leprosy,
      facetMatches: "US Election, US Politics, Republican Party, Current Events, Donald Mumps"
    }
  }

  submitLeprosy() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: { leprosy: this.state.leprosy },
      dataType: 'json',
      url: '/'
    }).done(function(res, status, xhr) {
      console.log('SUCCESS!!!!!!');
      that.setState({facetMatches: res.slice(0,10).join(', ')});
    }).fail(function(xhr, status, err) {
      console.log('ERROR: ' + status + JSON.stringify(err));
    });
  }

  leperChange(e) {
    // console.log(e.target.value);
    this.setState({leprosy: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Facet Testing Page!</h1>
        <hr />

        <h1>Very simple, bare bones testing page</h1>

        <table>
          <tbody>
            <tr>
              <td style={{width: '20%'}}>Enter Snippet:</td>
              <td style={{border: '', width: '50%', padding: '5'}}>
                <LeperForm leperChange={this.leperChange.bind(this)} submitLeprosy={this.submitLeprosy.bind(this)} leprosy={this.state.leprosy} />
              </td>
              <td style={{width: '20%', paddingLeft: '50'}}>snippet can be any text chunk from any web page (in any language)</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <table>
          <tbody>
            <tr>
              <td style={{width: '20%'}}>Facet Matches:</td>
              <td style={{width: '50%', border: '1px solid white', padding: '5'}}>{this.state.facetMatches}</td>
              <td style={{width: '20%'}}></td>
            </tr>
          </tbody>
        </table>

        <hr />

        <table>
          <tbody>
            <tr>
              <td style={{width: '20%'}}>Matching Threshold:</td>
              <td style={{width: '50%', border: '1px solid black', padding: '5'}}>ADD SETTINGS HERE THAT WE CAN PLAY WITH THAT MAKE SENSE. PERHAPS WE’LL HAVE A FACET FILTER LIST.</td>
              <td style={{width: '20%'}}></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class LeperForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <textarea style={{width: '100%', rows: '5'}} onChange={this.props.leperChange.bind(this)} value={this.props.leprosy} ></textarea>
        <br />
        <button onClick={this.props.submitLeprosy}>SUBMIT</button>
      </div>
    );
  }
}
LeperForm.propTypes = {
  leprosy: React.PropTypes.string.isRequired,
  leperChange: React.PropTypes.func.isRequired,
  submitLeprosy: React.PropTypes.func.isRequired
};
LeperForm.defaultProps = { leprosy: '' };


React.render(
  <FacetTest />,
  document.getElementById('facettest')
);
