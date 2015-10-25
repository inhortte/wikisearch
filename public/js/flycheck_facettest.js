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

var LeperSelect = (function (_React$Component2) {
  _inherits(LeperSelect, _React$Component2);

  function LeperSelect() {
    _classCallCheck(this, LeperSelect);

    _get(Object.getPrototypeOf(LeperSelect.prototype), 'constructor', this).apply(this, arguments);
  }

  return LeperSelect;
})(React.Component);

var LeperForm = (function (_React$Component3) {
  _inherits(LeperForm, _React$Component3);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZseWNoZWNrX2ZhY2V0dGVzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7SUFFUCxTQUFTO1lBQVQsU0FBUzs7QUFDRixXQURQLFNBQVMsQ0FDRCxLQUFLLEVBQUU7MEJBRGYsU0FBUzs7QUFFWCwrQkFGRSxTQUFTLDZDQUVMLEtBQUssRUFBRTtBQUNiLFFBQUksQ0FBQyxLQUFLLEdBQUc7QUFDWCxhQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO0FBQzNCLGtCQUFZLEVBQUUsMEVBQTBFO0tBQ3pGLENBQUE7R0FDRjs7ZUFQRyxTQUFTOztXQVNBLHlCQUFHO0FBQ2QsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLE9BQUMsQ0FBQyxJQUFJLENBQUM7QUFDTCxjQUFNLEVBQUUsTUFBTTtBQUNkLFlBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNyQyxnQkFBUSxFQUFFLE1BQU07QUFDaEIsV0FBRyxFQUFFLEdBQUc7T0FDVCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDakMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUM7T0FDM0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ2pDLGVBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDdkQsQ0FBQyxDQUFDO0tBQ0o7OztXQUVVLHFCQUFD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cEIsU0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDMUMsYUFBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFDNUMsZUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7Q0FDL0MsQ0FBQztBQUNGLFNBQVMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O0FBR3pDLEtBQUssQ0FBQyxNQUFNLENBQ1Ysb0JBQUMsU0FBUyxPQUFHLEVBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQyIsImZpbGUiOiJmbHljaGVja19mYWNldHRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZhY2V0VGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsZXByb3N5OiB0aGlzLnByb3BzLmxlcHJvc3ksXG4gICAgICBmYWNldE1hdGNoZXM6IFwiVVMgRWxlY3Rpb24sIFVTIFBvbGl0aWNzLCBSZXB1YmxpY2FuIFBhcnR5LCBDdXJyZW50IEV2ZW50cywgRG9uYWxkIE11bXBzXCJcbiAgICB9XG4gIH1cblxuICBzdWJtaXRMZXByb3N5KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7IGxlcHJvc3k6IHRoaXMuc3RhdGUubGVwcm9zeSB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHVybDogJy8nXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXMsIHN0YXR1cywgeGhyKSB7XG4gICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEhISEhIScpO1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7ZmFjZXRNYXRjaGVzOiByZXMuc2xpY2UoMCwxMCkuam9pbignLCAnKX0pO1xuICAgIH0pLmZhaWwoZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiAnICsgc3RhdHVzICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgfSk7XG4gIH1cblxuICBsZXBlckNoYW5nZShlKSB7XG4gICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlcHJvc3k6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBGYWNldCBUZXN0aW5nIFBhZ2UhPC9oMT5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPGgxPlZlcnkgc2ltcGxlLCBiYXJlIGJvbmVzIHRlc3RpbmcgcGFnZTwvaDE+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+RW50ZXIgU25pcHBldDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXI6ICcnLCB3aWR0aDogJzUwJScsIHBhZGRpbmc6ICc1J319PlxuICAgICAgICAgICAgICAgIDxMZXBlckZvcm0gbGVwZXJDaGFuZ2U9e3RoaXMubGVwZXJDaGFuZ2UuYmluZCh0aGlzKX0gc3VibWl0TGVwcm9zeT17dGhpcy5zdWJtaXRMZXByb3N5LmJpbmQodGhpcyl9IGxlcHJvc3k9e3RoaXMuc3RhdGUubGVwcm9zeX0gLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnLCBwYWRkaW5nTGVmdDogJzUwJ319PnNuaXBwZXQgY2FuIGJlIGFueSB0ZXh0IGNodW5rIGZyb20gYW55IHdlYiBwYWdlIChpbiBhbnkgbGFuZ3VhZ2UpPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5GYWNldCBNYXRjaGVzOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnNTAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJywgcGFkZGluZzogJzUnfX0+e3RoaXMuc3RhdGUuZmFjZXRNYXRjaGVzfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+TWF0Y2hpbmcgVGhyZXNob2xkOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnNTAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzUnfX0+QUREIFNFVFRJTkdTIEhFUkUgVEhBVCBXRSBDQU4gUExBWSBXSVRIIFRIQVQgTUFLRSBTRU5TRS4gUEVSSEFQUyBXReKAmUxMIEhBVkUgQSBGQUNFVCBGSUxURVIgTElTVC48L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBMZXBlclNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbn1cblxuY2xhc3MgTGVwZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIHJvd3M6ICc1J319IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmxlcGVyQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLmxlcHJvc3l9ID48L3RleHRhcmVhPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN1Ym1pdExlcHJvc3l9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTGVwZXJGb3JtLnByb3BUeXBlcyA9IHtcbiAgbGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsZXBlckNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0TGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkxlcGVyRm9ybS5kZWZhdWx0UHJvcHMgPSB7IGxlcHJvc3k6ICcnIH07XG5cblxuUmVhY3QucmVuZGVyKFxuICA8RmFjZXRUZXN0IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZXR0ZXN0Jylcbik7XG4iXX0=