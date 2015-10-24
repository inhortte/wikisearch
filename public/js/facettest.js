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
      leprosy: this.props.leprosy
    };
  }

  _createClass(FacetTest, [{
    key: 'submitLeprosy',
    value: function submitLeprosy() {
      // alert(this.state.leprosy);
      $.ajax({
        method: 'POST',
        data: { leprosy: this.state.leprosy },
        dataType: 'json',
        url: '/'
      }).done(function (res, status, xhr) {
        console.log('SUCCESS: ' + JSON.stringify(res));
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
                'US Election, US Politics, Republican Party, Current Events, Donald Trump'
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
//# sourceMappingURL=data:application/json;base64,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QVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUMiLCJmaWxlIjoiZmFjZXR0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGYWNldFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGVwcm9zeTogdGhpcy5wcm9wcy5sZXByb3N5XG4gICAgfVxuICB9XG5cbiAgc3VibWl0TGVwcm9zeSgpIHtcbiAgICAvLyBhbGVydCh0aGlzLnN0YXRlLmxlcHJvc3kpO1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHsgbGVwcm9zeTogdGhpcy5zdGF0ZS5sZXByb3N5IH0sXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgdXJsOiAnLydcbiAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcywgc3RhdHVzLCB4aHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTVUNDRVNTOiAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgfSkuZmFpbChmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcgKyBzdGF0dXMgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxlcGVyQ2hhbmdlKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bGVwcm9zeTogZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEZhY2V0IFRlc3RpbmcgUGFnZSE8L2gxPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8aDE+VmVyeSBzaW1wbGUsIGJhcmUgYm9uZXMgdGVzdGluZyBwYWdlPC9oMT5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5FbnRlciBTbmlwcGV0OjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e2JvcmRlcjogJycsIHdpZHRoOiAnNTAlJywgcGFkZGluZzogJzUnfX0+XG4gICAgICAgICAgICAgICAgPExlcGVyRm9ybSBsZXBlckNoYW5nZT17dGhpcy5sZXBlckNoYW5nZS5iaW5kKHRoaXMpfSBzdWJtaXRMZXByb3N5PXt0aGlzLnN1Ym1pdExlcHJvc3kuYmluZCh0aGlzKX0gbGVwcm9zeT17dGhpcy5zdGF0ZS5sZXByb3N5fSAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJScsIHBhZGRpbmdMZWZ0OiAnNTAnfX0+c25pcHBldCBjYW4gYmUgYW55IHRleHQgY2h1bmsgZnJvbSBhbnkgd2ViIHBhZ2UgKGluIGFueSBsYW5ndWFnZSk8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PkZhY2V0IE1hdGNoZXM6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICc1MCUnLCBib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLCBwYWRkaW5nOiAnNSd9fT5VUyBFbGVjdGlvbiwgVVMgUG9saXRpY3MsIFJlcHVibGljYW4gUGFydHksIEN1cnJlbnQgRXZlbnRzLCBEb25hbGQgVHJ1bXA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319Pk1hdGNoaW5nIFRocmVzaG9sZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzUwJScsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc1J319PkFERCBTRVRUSU5HUyBIRVJFIFRIQVQgV0UgQ0FOIFBMQVkgV0lUSCBUSEFUIE1BS0UgU0VOU0UuIFBFUkhBUFMgV0XigJlMTCBIQVZFIEEgRkFDRVQgRklMVEVSIExJU1QuPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgTGVwZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIHJvd3M6ICc1J319IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmxlcGVyQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLmxlcHJvc3l9ID48L3RleHRhcmVhPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN1Ym1pdExlcHJvc3l9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTGVwZXJGb3JtLnByb3BUeXBlcyA9IHtcbiAgbGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsZXBlckNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0TGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkxlcGVyRm9ybS5kZWZhdWx0UHJvcHMgPSB7IGxlcHJvc3k6ICcnIH07XG5cblxuUmVhY3QucmVuZGVyKFxuICA8RmFjZXRUZXN0IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZXR0ZXN0Jylcbik7XG4iXX0=