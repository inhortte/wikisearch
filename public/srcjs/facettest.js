'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let $ = require('jquery');

class FacetTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leprosy: this.props.leprosy,
      facetMatches: ['US Election', 'US Politics', 'Republican Party', 'Current Events', 'Donald Mumps'],
      facetsShown: 'US Election, US Politics, Republican Party, Current Events, Donald Mumps',
      matchesShown: 10,
      fFilter: ''
    }
  }

  submitLeprosy() {
    var that = this;
    new Promise(resolve => this.setState({facetsShown: "Searching..."}, resolve))
                               .then(function() {
                                 $.ajax({
                                   method: 'POST',
                                   data: { leprosy: that.state.leprosy },
                                   dataType: 'json',
                                   url: '/'
                                 }).done(function(res, status) {
                                   console.log('SUCCESS!!!!!! - status: ' + status);
                                   return new Promise(r => that.setState({facetMatches: res}, r))
                                                               .then(() => that.showFacets());
                                 }).fail(function(xhr, status, err) {
                                   return new Promise(r => that.setState({facetsShown: "Error."}, r))
                                                               .then(() => console.log('ERROR: ' + status + JSON.stringify(err)));
                                 });
                               })
                               .catch(function(err) { console.error(err); });
  }

  showFacets() {
    let matches = this.state.facetMatches;
    let filterer = this.state.fFilter.trim();
    if(filterer.length > 0) {
      let re = new RegExp(filterer, "i");
      matches = matches.filter(function(el) {
        return re.test(el);
      });
    }
    this.setState({facetsShown: matches.slice(0, this.state.matchesShown).join(', ')});
  }

  leperChange(e) {
    this.setState({leprosy: e.target.value});
  }

  fFilterChange(e) {
    new Promise(resolve => this.setState({fFilter: e.target.value}, resolve)).then(() => this.showFacets())
                               .catch(function(err) { console.error(err); });
  }

  changeMatchesShown(n) {
    new Promise(resolve => this.setState({matchesShown: n}, resolve)).then(() => this.showFacets())
                               .catch(function(err) { console.error(err); });
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
              <td style={{width: '20%', valign: 'top'}}>Facet Matches:</td>
              <td style={{width: '50%', border: '1px solid white', padding: '5'}}>{this.state.facetsShown}</td>
              <td style={{width: '20%'}}></td>
            </tr>
          </tbody>
        </table>

        <hr />

        <table>
          <tbody>
            <tr>
              <td style={{width: '20%'}}>Matching Threshold:</td>
              <td style={{width: '50%', border: '1px solid black', padding: '5'}}>
                <FacetsShownSelect width={'50%'} changeMatchesShown={this.changeMatchesShown.bind(this)} />
                <FacetFilter width={'50%'} fFilterChange={this.fFilterChange.bind(this)} />
              </td>
              <td style={{width: '20%'}}></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class FacetsShownSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  makeOption(value, text) {
    return (
      <option key={value} value={value}>{text}</option>
    );
  }

  handleChange(e) {
    this.props.changeMatchesShown(e.target.value);
  }

  render() {
    let options = [10, 25, 50, 100].map(n => this.makeOption(n, n.toString()));
    let style = { width: this.props.width };
    return (
      <div>
        Facets shown: <select onChange={this.handleChange.bind(this)} style={style}>{options}</select>
      </div>
    );
  }
}
FacetsShownSelect.propTypes = {
  width: React.PropTypes.string.isRequired
};
FacetsShownSelect.defaultProps = { width: '100%' };

class FacetFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let style = { width: this.props.width };
    return (
      <div>
        Facet filter: <input type="text" style={style} onChange={this.props.fFilterChange.bind(this)} value={this.props.fFilter} />
      </div>
    );
  }
}
FacetFilter.propTypes = {
  width: React.PropTypes.string.isRequired
};
FacetFilter.defaultProps = { width: '100%' };

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


ReactDOM.render(
  <FacetTest />,
  document.getElementById('facettest')
);
