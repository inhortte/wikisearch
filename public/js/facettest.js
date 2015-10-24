'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FacetTest = (function (_React$Component) {
  _inherits(FacetTest, _React$Component);

  function FacetTest(props) {
    _classCallCheck(this, FacetTest);

    _get(Object.getPrototypeOf(FacetTest.prototype), 'constructor', this).call(this, props);
    this.state = {
      leprosy: this.props.leprosy,
      facetMatches: "US Election, US Politics, Republican Party, Current Events, Donald Mumps"
    };
  }

  _createClass(FacetTest, [{
    key: 'submitLeprosy',
    value: function submitLeprosy() {
      var that = this;
      $.ajax({
        method: 'POST',
        data: { leprosy: this.state.leprosy },
        dataType: 'json',
        url: '/'
      }).done(function (res, status, xhr) {
        console.log('SUCCESS!!!!!!');
        that.setState({ facetMatches: res.slice(0, 10).join(', ') });
      }).fail(function (xhr, status, err) {
        console.log('ERROR: ' + status + JSON.stringify(err));
      });
    }
  }, {
    key: 'leperChange',
    value: function leperChange(e) {
      // console.log(e.target.value);
      this.setState({ leprosy: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Welcome to the Facet Testing Page!'
        ),
        React.createElement('hr', null),
        React.createElement(
          'h1',
          null,
          'Very simple, bare bones testing page'
        ),
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { style: { width: '20%' } },
                'Enter Snippet:'
              ),
              React.createElement(
                'td',
                { style: { border: '', width: '50%', padding: '5' } },
                React.createElement(LeperForm, { leperChange: this.leperChange.bind(this), submitLeprosy: this.submitLeprosy.bind(this), leprosy: this.state.leprosy })
              ),
              React.createElement(
                'td',
                { style: { width: '20%', paddingLeft: '50' } },
                'snippet can be any text chunk from any web page (in any language)'
              )
            )
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { style: { width: '20%' } },
                'Facet Matches:'
              ),
              React.createElement(
                'td',
                { style: { width: '50%', border: '1px solid white', padding: '5' } },
                this.state.facetMatches
              ),
              React.createElement('td', { style: { width: '20%' } })
            )
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'table',
          null,
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                { style: { width: '20%' } },
                'Matching Threshold:'
              ),
              React.createElement(
                'td',
                { style: { width: '50%', border: '1px solid black', padding: '5' } },
                'ADD SETTINGS HERE THAT WE CAN PLAY WITH THAT MAKE SENSE. PERHAPS WE’LL HAVE A FACET FILTER LIST.'
              ),
              React.createElement('td', { style: { width: '20%' } })
            )
          )
        )
      );
    }
  }]);

  return FacetTest;
})(React.Component);

var LeperForm = (function (_React$Component2) {
  _inherits(LeperForm, _React$Component2);

  function LeperForm(props) {
    _classCallCheck(this, LeperForm);

    _get(Object.getPrototypeOf(LeperForm.prototype), 'constructor', this).call(this, props);
  }

  _createClass(LeperForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement('textarea', { style: { width: '100%', rows: '5' }, onChange: this.props.leperChange.bind(this), value: this.props.leprosy }),
        React.createElement('br', null),
        React.createElement(
          'button',
          { onClick: this.props.submitLeprosy },
          'SUBMIT'
        )
      );
    }
  }]);

  return LeperForm;
})(React.Component);

LeperForm.propTypes = {
  leprosy: React.PropTypes.string.isRequired,
  leperChange: React.PropTypes.func.isRequired,
  submitLeprosy: React.PropTypes.func.isRequired
};
LeperForm.defaultProps = { leprosy: '' };

React.render(React.createElement(FacetTest, null), document.getElementById('facettest'));
//# sourceMappingURL=data:application/json;base64,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VTtBQUM1QyxlQUFhLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtDQUMvQyxDQUFDO0FBQ0YsU0FBUyxDQUFDLFlBQVksR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7QUFHekMsS0FBSyxDQUFDLE1BQU0sQ0FDVixvQkFBQyxTQUFTLE9BQUcsRUFDYixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFDIiwiZmlsZSI6ImZhY2V0dGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmFjZXRUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxlcHJvc3k6IHRoaXMucHJvcHMubGVwcm9zeSxcbiAgICAgIGZhY2V0TWF0Y2hlczogXCJVUyBFbGVjdGlvbiwgVVMgUG9saXRpY3MsIFJlcHVibGljYW4gUGFydHksIEN1cnJlbnQgRXZlbnRzLCBEb25hbGQgTXVtcHNcIlxuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdExlcHJvc3koKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHsgbGVwcm9zeTogdGhpcy5zdGF0ZS5sZXByb3N5IH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdXJsOiAnLydcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcywgc3RhdHVzLCB4aHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTISEhISEhJyk7XG4gICAgICB0aGF0LnNldFN0YXRlKHtmYWNldE1hdGNoZXM6IHJlcy5zbGljZSgwLDEwKS5qb2luKCcsICcpfSk7XG4gICAgfSkuZmFpbChmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcgKyBzdGF0dXMgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxlcGVyQ2hhbmdlKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGVwcm9zeTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEZhY2V0IFRlc3RpbmcgUGFnZSE8L2gxPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDE+VmVyeSBzaW1wbGUsIGJhcmUgYm9uZXMgdGVzdGluZyBwYWdlPC9oMT5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5FbnRlciBTbmlwcGV0OjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e2JvcmRlcjogJycsIHdpZHRoOiAnNTAlJywgcGFkZGluZzogJzUnfX0+XG4gICAgICAgICAgICAgICAgPExlcGVyRm9ybSBsZXBlckNoYW5nZT17dGhpcy5sZXBlckNoYW5nZS5iaW5kKHRoaXMpfSBzdWJtaXRMZXByb3N5PXt0aGlzLnN1Ym1pdExlcHJvc3kuYmluZCh0aGlzKX0gbGVwcm9zeT17dGhpcy5zdGF0ZS5sZXByb3N5fSAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJScsIHBhZGRpbmdMZWZ0OiAnNTAnfX0+c25pcHBldCBjYW4gYmUgYW55IHRleHQgY2h1bmsgZnJvbSBhbnkgd2ViIHBhZ2UgKGluIGFueSBsYW5ndWFnZSk8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PkZhY2V0IE1hdGNoZXM6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICc1MCUnLCBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLCBwYWRkaW5nOiAnNSd9fT57dGhpcy5zdGF0ZS5mYWNldE1hdGNoZXN9PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5NYXRjaGluZyBUaHJlc2hvbGQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICc1MCUnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnNSd9fT5BREQgU0VUVElOR1MgSEVSRSBUSEFUIFdFIENBTiBQTEFZIFdJVEggVEhBVCBNQUtFIFNFTlNFLiBQRVJIQVBTIFdF4oCZTEwgSEFWRSBBIEZBQ0VUIEZJTFRFUiBMSVNULjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIExlcGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCByb3dzOiAnNSd9fSBvbkNoYW5nZT17dGhpcy5wcm9wcy5sZXBlckNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5sZXByb3N5fSA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdWJtaXRMZXByb3N5fT5TVUJNSVQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkxlcGVyRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGxlcHJvc3k6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGVwZXJDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdExlcHJvc3k6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5MZXBlckZvcm0uZGVmYXVsdFByb3BzID0geyBsZXByb3N5OiAnJyB9O1xuXG5cblJlYWN0LnJlbmRlcihcbiAgPEZhY2V0VGVzdCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2V0dGVzdCcpXG4pO1xuIl19