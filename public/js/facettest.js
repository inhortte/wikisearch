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
      facetsShown: 'US Election, US Politics, Republican Party, Current Events, Donald Mumps',
      matchesShown: 10,
      fFilter: ''
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
        that.showFacets();
      }).fail(function (xhr, status, err) {
        console.log('ERROR: ' + status + JSON.stringify(err));
      });
    }
  }, {
    key: 'showFacets',
    value: function showFacets() {
      var matches = this.state.facetMatches;
      var filterer = this.state.fFilter.trim();
      if (filterer.length > 0) {
        (function () {
          var re = new RegExp(filterer, "i");
          matches = matches.filter(function (el) {
            return re.test(el);
          });
        })();
      }
      this.setState({ facetsShown: matches.slice(0, this.state.matchesShown).join(', ') });
    }
  }, {
    key: 'leperChange',
    value: function leperChange(e) {
      this.setState({ leprosy: e.target.value });
    }
  }, {
    key: 'fFilterChange',
    value: function fFilterChange(e) {
      this.setState({ fFilter: e.target.value }, function () {
        this.showFacets();
      });
    }
  }, {
    key: 'changeMatchesShown',
    value: function changeMatchesShown(n) {
      this.setState({ matchesShown: n }, function () {
        this.showFacets();
      });
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
                this.state.facetsShown
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
                React.createElement(FacetsShownSelect, { width: '50%', changeMatchesShown: this.changeMatchesShown.bind(this) }),
                React.createElement(FacetFilter, { width: '50%', fFilterChange: this.fFilterChange.bind(this) })
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
      this.props.changeMatchesShown(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var options = [10, 25, 50, 100].map(function (n) {
        return _this.makeOption(n, n.toString());
      });
      var style = { width: this.props.width };
      return React.createElement(
        'div',
        null,
        'Facets shown: ',
        React.createElement(
          'select',
          { onChange: this.handleChange.bind(this), style: style },
          options
        )
      );
    }
  }]);

  return FacetsShownSelect;
})(React.Component);

FacetsShownSelect.propTypes = {
  width: React.PropTypes.string.isRequired
};
FacetsShownSelect.defaultProps = { width: '100%' };

var FacetFilter = (function (_React$Component3) {
  _inherits(FacetFilter, _React$Component3);

  function FacetFilter(props) {
    _classCallCheck(this, FacetFilter);

    _get(Object.getPrototypeOf(FacetFilter.prototype), 'constructor', this).call(this, props);
  }

  _createClass(FacetFilter, [{
    key: 'render',
    value: function render() {
      var style = { width: this.props.width };
      return React.createElement(
        'div',
        null,
        'Facet filter: ',
        React.createElement('input', { type: 'text', style: style, onChange: this.props.fFilterChange.bind(this), value: this.props.fFilter })
      );
    }
  }]);

  return FacetFilter;
})(React.Component);

FacetFilter.propTypes = {
  width: React.PropTypes.string.isRequired
};
FacetFilter.defaultProps = { width: '100%' };

var LeperForm = (function (_React$Component4) {
  _inherits(LeperForm, _React$Component4);

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
//# sourceMappingURL=data:application/json;base64,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LE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7QUFHekMsS0FBSyxDQUFDLE1BQU0sQ0FDVixvQkFBQyxTQUFTLE9BQUcsRUFDYixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUNyQyxDQUFDIiwiZmlsZSI6ImZhY2V0dGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmFjZXRUZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxlcHJvc3k6IHRoaXMucHJvcHMubGVwcm9zeSxcbiAgICAgIGZhY2V0TWF0Y2hlczogWydVUyBFbGVjdGlvbicsICdVUyBQb2xpdGljcycsICdSZXB1YmxpY2FuIFBhcnR5JywgJ0N1cnJlbnQgRXZlbnRzJywgJ0RvbmFsZCBNdW1wcyddLFxuICAgICAgZmFjZXRzU2hvd246ICdVUyBFbGVjdGlvbiwgVVMgUG9saXRpY3MsIFJlcHVibGljYW4gUGFydHksIEN1cnJlbnQgRXZlbnRzLCBEb25hbGQgTXVtcHMnLFxuICAgICAgbWF0Y2hlc1Nob3duOiAxMCxcbiAgICAgIGZGaWx0ZXI6ICcnXG4gICAgfVxuICB9XG5cbiAgc3VibWl0TGVwcm9zeSgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogeyBsZXByb3N5OiB0aGlzLnN0YXRlLmxlcHJvc3kgfSxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB1cmw6ICcvJ1xuICAgIH0pLmRvbmUoZnVuY3Rpb24ocmVzLCBzdGF0dXMsIHhocikge1xuICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhISEhISEnKTtcbiAgICAgIHRoYXQuc2V0U3RhdGUoe2ZhY2V0TWF0Y2hlczogcmVzfSk7XG4gICAgICB0aGF0LnNob3dGYWNldHMoKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJyArIHN0YXR1cyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0ZhY2V0cygpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IHRoaXMuc3RhdGUuZmFjZXRNYXRjaGVzO1xuICAgIGxldCBmaWx0ZXJlciA9IHRoaXMuc3RhdGUuZkZpbHRlci50cmltKCk7XG4gICAgaWYoZmlsdGVyZXIubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChmaWx0ZXJlciwgXCJpXCIpO1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIHJldHVybiByZS50ZXN0KGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtmYWNldHNTaG93bjogbWF0Y2hlcy5zbGljZSgwLCB0aGlzLnN0YXRlLm1hdGNoZXNTaG93bikuam9pbignLCAnKX0pO1xuICB9XG5cbiAgbGVwZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlcHJvc3k6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBmRmlsdGVyQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtmRmlsdGVyOiBlLnRhcmdldC52YWx1ZX0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zaG93RmFjZXRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VNYXRjaGVzU2hvd24obikge1xuICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZXNTaG93bjogbn0sIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zaG93RmFjZXRzKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBGYWNldCBUZXN0aW5nIFBhZ2UhPC9oMT5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPGgxPlZlcnkgc2ltcGxlLCBiYXJlIGJvbmVzIHRlc3RpbmcgcGFnZTwvaDE+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+RW50ZXIgU25pcHBldDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXI6ICcnLCB3aWR0aDogJzUwJScsIHBhZGRpbmc6ICc1J319PlxuICAgICAgICAgICAgICAgIDxMZXBlckZvcm0gbGVwZXJDaGFuZ2U9e3RoaXMubGVwZXJDaGFuZ2UuYmluZCh0aGlzKX0gc3VibWl0TGVwcm9zeT17dGhpcy5zdWJtaXRMZXByb3N5LmJpbmQodGhpcyl9IGxlcHJvc3k9e3RoaXMuc3RhdGUubGVwcm9zeX0gLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnLCBwYWRkaW5nTGVmdDogJzUwJ319PnNuaXBwZXQgY2FuIGJlIGFueSB0ZXh0IGNodW5rIGZyb20gYW55IHdlYiBwYWdlIChpbiBhbnkgbGFuZ3VhZ2UpPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJScsIHZhbGlnbjogJ3RvcCd9fT5GYWNldCBNYXRjaGVzOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnNTAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJywgcGFkZGluZzogJzUnfX0+e3RoaXMuc3RhdGUuZmFjZXRzU2hvd259PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5NYXRjaGluZyBUaHJlc2hvbGQ6PC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICc1MCUnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBwYWRkaW5nOiAnNSd9fT5cbiAgICAgICAgICAgICAgICA8RmFjZXRzU2hvd25TZWxlY3Qgd2lkdGg9eyc1MCUnfSBjaGFuZ2VNYXRjaGVzU2hvd249e3RoaXMuY2hhbmdlTWF0Y2hlc1Nob3duLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgPEZhY2V0RmlsdGVyIHdpZHRoPXsnNTAlJ30gZkZpbHRlckNoYW5nZT17dGhpcy5mRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEZhY2V0c1Nob3duU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBtYWtlT3B0aW9uKHZhbHVlLCB0ZXh0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXt2YWx1ZX0gdmFsdWU9e3ZhbHVlfT57dGV4dH08L29wdGlvbj5cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1hdGNoZXNTaG93bihlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSBbMTAsIDI1LCA1MCwgMTAwXS5tYXAobiA9PiB0aGlzLm1ha2VPcHRpb24obiwgbi50b1N0cmluZygpKSk7XG4gICAgbGV0IHN0eWxlID0geyB3aWR0aDogdGhpcy5wcm9wcy53aWR0aCB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBGYWNldHMgc2hvd246IDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHN0eWxlPXtzdHlsZX0+e29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5GYWNldHNTaG93blNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5GYWNldHNTaG93blNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAnMTAwJScgfTtcblxuY2xhc3MgRmFjZXRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc3R5bGUgPSB7IHdpZHRoOiB0aGlzLnByb3BzLndpZHRoIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZhY2V0IGZpbHRlcjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgc3R5bGU9e3N0eWxlfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5mRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLmZGaWx0ZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5GYWNldEZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5GYWNldEZpbHRlci5kZWZhdWx0UHJvcHMgPSB7IHdpZHRoOiAnMTAwJScgfTtcblxuY2xhc3MgTGVwZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17e3dpZHRoOiAnMTAwJScsIHJvd3M6ICc1J319IG9uQ2hhbmdlPXt0aGlzLnByb3BzLmxlcGVyQ2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXt0aGlzLnByb3BzLmxlcHJvc3l9ID48L3RleHRhcmVhPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnN1Ym1pdExlcHJvc3l9PlNVQk1JVDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuTGVwZXJGb3JtLnByb3BUeXBlcyA9IHtcbiAgbGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsZXBlckNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0TGVwcm9zeTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkxlcGVyRm9ybS5kZWZhdWx0UHJvcHMgPSB7IGxlcHJvc3k6ICcnIH07XG5cblxuUmVhY3QucmVuZGVyKFxuICA8RmFjZXRUZXN0IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmFjZXR0ZXN0Jylcbik7XG4iXX0=