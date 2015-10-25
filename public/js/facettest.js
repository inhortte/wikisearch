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
      facetMatches: ['US Election', 'US Politics', 'Republican Party', 'Current Events', 'Donald Mumps'],
      matchesShown: 10
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
        that.setState({ facetMatches: res });
      }).fail(function (xhr, status, err) {
        console.log('ERROR: ' + status + JSON.stringify(err));
      });
    }
  }, {
    key: 'leperChange',
    value: function leperChange(e) {
      this.setState({ leprosy: e.target.value });
    }
  }, {
    key: 'showFacets',
    value: function showFacets() {
      return this.state.facetMatches.slice(0, this.state.matchesShown).join(', ');
    }
  }, {
    key: 'changeMatchesShown',
    value: function changeMatchesShown(n) {
      this.setState({ matchesShown: n });
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
                { style: { width: '20%', valign: 'top' } },
                'Facet Matches:'
              ),
              React.createElement(
                'td',
                { style: { width: '50%', border: '1px solid white', padding: '5' } },
                this.showFacets()
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
                React.createElement(FacetsShownSelect, { changeMatchesShown: this.changeMatchesShown.bind(this) })
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

var FacetsShownSelect = (function (_React$Component2) {
  _inherits(FacetsShownSelect, _React$Component2);

  function FacetsShownSelect(props) {
    _classCallCheck(this, FacetsShownSelect);

    _get(Object.getPrototypeOf(FacetsShownSelect.prototype), 'constructor', this).call(this, props);
  }

  _createClass(FacetsShownSelect, [{
    key: 'makeOption',
    value: function makeOption(value, text) {
      return React.createElement(
        'option',
        { key: value, value: value },
        text
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      console.log('numero de facetes: ' + e.target.value);
      this.props.changeMatchesShown(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var options = [10, 25, 50, 100].map(function (n) {
        return _this.makeOption(n, n.toString());
      });
      return React.createElement(
        'div',
        null,
        'Facets shown: ',
        React.createElement(
          'select',
          { onChange: this.handleChange.bind(this) },
          options
        )
      );
    }
  }]);

  return FacetsShownSelect;
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
//# sourceMappingURL=data:application/json;base64,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LEFBQUM7O1NBQWdCO09BQ3RELENBQ047S0FDSDs7O1NBYkcsU0FBUztHQUFTLEtBQUssQ0FBQyxTQUFTOztBQWV2QyxTQUFTLENBQUMsU0FBUyxHQUFHO0FBQ3BCLFNBQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVO0FBQzFDLGFBQVcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVO0FBQzVDLGVBQWEsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVO0NBQy9DLENBQUM7QUFDRixTQUFTLENBQUMsWUFBWSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDOztBQUd6QyxLQUFLLENBQUMsTUFBTSxDQUNWLG9CQUFDLFNBQVMsT0FBRyxFQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQ3JDLENBQUMiLCJmaWxlIjoiZmFjZXR0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGYWNldFRlc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGVwcm9zeTogdGhpcy5wcm9wcy5sZXByb3N5LFxuICAgICAgZmFjZXRNYXRjaGVzOiBbJ1VTIEVsZWN0aW9uJywgJ1VTIFBvbGl0aWNzJywgJ1JlcHVibGljYW4gUGFydHknLCAnQ3VycmVudCBFdmVudHMnLCAnRG9uYWxkIE11bXBzJ10sXG4gICAgICBtYXRjaGVzU2hvd246IDEwXG4gICAgfVxuICB9XG5cbiAgc3VibWl0TGVwcm9zeSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogeyBsZXByb3N5OiB0aGlzLnN0YXRlLmxlcHJvc3kgfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB1cmw6ICcvJ1xuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzLCBzdGF0dXMsIHhocikge1xuICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhISEhISEnKTtcbiAgICAgIHRoYXQuc2V0U3RhdGUoe2ZhY2V0TWF0Y2hlczogcmVzfSk7XG4gICAgfSkuZmFpbChmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcgKyBzdGF0dXMgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxlcGVyQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsZXByb3N5OiBlLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgc2hvd0ZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5mYWNldE1hdGNoZXMuc2xpY2UoMCwgdGhpcy5zdGF0ZS5tYXRjaGVzU2hvd24pLmpvaW4oJywgJyk7XG4gIH1cblxuICBjaGFuZ2VNYXRjaGVzU2hvd24obikge1xuICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXNTaG93bjogbn0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+V2VsY29tZSB0byB0aGUgRmFjZXQgVGVzdGluZyBQYWdlITwvaDE+XG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDxoMT5WZXJ5IHNpbXBsZSwgYmFyZSBib25lcyB0ZXN0aW5nIHBhZ2U8L2gxPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PkVudGVyIFNuaXBwZXQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7Ym9yZGVyOiAnJywgd2lkdGg6ICc1MCUnLCBwYWRkaW5nOiAnNSd9fT5cbiAgICAgICAgICAgICAgICA8TGVwZXJGb3JtIGxlcGVyQ2hhbmdlPXt0aGlzLmxlcGVyQ2hhbmdlLmJpbmQodGhpcyl9IHN1Ym1pdExlcHJvc3k9e3RoaXMuc3VibWl0TGVwcm9zeS5iaW5kKHRoaXMpfSBsZXByb3N5PXt0aGlzLnN0YXRlLmxlcHJvc3l9IC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJywgcGFkZGluZ0xlZnQ6ICc1MCd9fT5zbmlwcGV0IGNhbiBiZSBhbnkgdGV4dCBjaHVuayBmcm9tIGFueSB3ZWIgcGFnZSAoaW4gYW55IGxhbmd1YWdlKTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnLCB2YWxpZ246ICd0b3AnfX0+RmFjZXQgTWF0Y2hlczo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzUwJScsIGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsIHBhZGRpbmc6ICc1J319Pnt0aGlzLnNob3dGYWNldHMoKX08L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgIDxociAvPlxuXG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319Pk1hdGNoaW5nIFRocmVzaG9sZDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzUwJScsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHBhZGRpbmc6ICc1J319PjxGYWNldHNTaG93blNlbGVjdCBjaGFuZ2VNYXRjaGVzU2hvd249e3RoaXMuY2hhbmdlTWF0Y2hlc1Nob3duLmJpbmQodGhpcyl9IC8+PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgRmFjZXRzU2hvd25TZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIG1ha2VPcHRpb24odmFsdWUsIHRleHQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e3ZhbHVlfSB2YWx1ZT17dmFsdWV9Pnt0ZXh0fTwvb3B0aW9uPlxuICAgICk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGNvbnNvbGUubG9nKCdudW1lcm8gZGUgZmFjZXRlczogJyArIGUudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1hdGNoZXNTaG93bihlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXS5tYXAobiA9PiB0aGlzLm1ha2VPcHRpb24obiwgbi50b1N0cmluZygpKSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZhY2V0cyBzaG93bjogPHNlbGVjdCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0+e29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIExlcGVyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCByb3dzOiAnNSd9fSBvbkNoYW5nZT17dGhpcy5wcm9wcy5sZXBlckNoYW5nZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5sZXByb3N5fSA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zdWJtaXRMZXByb3N5fT5TVUJNSVQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkxlcGVyRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGxlcHJvc3k6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGVwZXJDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdExlcHJvc3k6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5MZXBlckZvcm0uZGVmYXVsdFByb3BzID0geyBsZXByb3N5OiAnJyB9O1xuXG5cblJlYWN0LnJlbmRlcihcbiAgPEZhY2V0VGVzdCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2V0dGVzdCcpXG4pO1xuIl19