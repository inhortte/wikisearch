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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxTQUFTLEdBQUc7QUFDcEIsU0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7QUFDMUMsYUFBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7QUFDNUMsZUFBYSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVU7Q0FDL0MsQ0FBQztBQUNGLFNBQVMsQ0FBQyxZQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7O0FBR3pDLEtBQUssQ0FBQyxNQUFNLENBQ1Ysb0JBQUMsU0FBUyxPQUFHLEVBQ2IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FDckMsQ0FBQyIsImZpbGUiOiJmYWNldHRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZhY2V0VGVzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsZXByb3N5OiB0aGlzLnByb3BzLmxlcHJvc3ksXG4gICAgICBmYWNldE1hdGNoZXM6IFsnVVMgRWxlY3Rpb24nLCAnVVMgUG9saXRpY3MnLCAnUmVwdWJsaWNhbiBQYXJ0eScsICdDdXJyZW50IEV2ZW50cycsICdEb25hbGQgTXVtcHMnXSxcbiAgICAgIG1hdGNoZXNTaG93bjogMTBcbiAgICB9XG4gIH1cblxuICBzdWJtaXRMZXByb3N5KCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7IGxlcHJvc3k6IHRoaXMuc3RhdGUubGVwcm9zeSB9LFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHVybDogJy8nXG4gICAgfSkuZG9uZShmdW5jdGlvbihyZXMsIHN0YXR1cywgeGhyKSB7XG4gICAgICBjb25zb2xlLmxvZygnU1VDQ0VTUyEhISEhIScpO1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7ZmFjZXRNYXRjaGVzOiByZXN9KTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJyArIHN0YXR1cyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgIH0pO1xuICB9XG5cbiAgbGVwZXJDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xlcHJvc3k6IGUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICBzaG93RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmZhY2V0TWF0Y2hlcy5zbGljZSgwLCB0aGlzLnN0YXRlLm1hdGNoZXNTaG93bikuam9pbignLCAnKTtcbiAgfVxuXG4gIGNoYW5nZU1hdGNoZXNTaG93bihuKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlc1Nob3duOiBufSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBGYWNldCBUZXN0aW5nIFBhZ2UhPC9oMT5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPGgxPlZlcnkgc2ltcGxlLCBiYXJlIGJvbmVzIHRlc3RpbmcgcGFnZTwvaDE+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+RW50ZXIgU25pcHBldDo8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3tib3JkZXI6ICcnLCB3aWR0aDogJzUwJScsIHBhZGRpbmc6ICc1J319PlxuICAgICAgICAgICAgICAgIDxMZXBlckZvcm0gbGVwZXJDaGFuZ2U9e3RoaXMubGVwZXJDaGFuZ2UuYmluZCh0aGlzKX0gc3VibWl0TGVwcm9zeT17dGhpcy5zdWJtaXRMZXByb3N5LmJpbmQodGhpcyl9IGxlcHJvc3k9e3RoaXMuc3RhdGUubGVwcm9zeX0gLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnLCBwYWRkaW5nTGVmdDogJzUwJ319PnNuaXBwZXQgY2FuIGJlIGFueSB0ZXh0IGNodW5rIGZyb20gYW55IHdlYiBwYWdlIChpbiBhbnkgbGFuZ3VhZ2UpPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cblxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJScsIHZhbGlnbjogJ3RvcCd9fT5GYWNldCBNYXRjaGVzOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnNTAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJywgcGFkZGluZzogJzUnfX0+e3RoaXMuc2hvd0ZhY2V0cygpfTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+TWF0Y2hpbmcgVGhyZXNob2xkOjwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17e3dpZHRoOiAnNTAlJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZzogJzUnfX0+PEZhY2V0c1Nob3duU2VsZWN0IGNoYW5nZU1hdGNoZXNTaG93bj17dGhpcy5jaGFuZ2VNYXRjaGVzU2hvd24uYmluZCh0aGlzKX0gLz48L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBGYWNldHNTaG93blNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgbWFrZU9wdGlvbih2YWx1ZSwgdGV4dCkge1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17dmFsdWV9IHZhbHVlPXt2YWx1ZX0+e3RleHR9PC9vcHRpb24+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VNYXRjaGVzU2hvd24oZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBvcHRpb25zID0gWzEwLCAyNSwgNTAsIDEwMF0ubWFwKG4gPT4gdGhpcy5tYWtlT3B0aW9uKG4sIG4udG9TdHJpbmcoKSkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBGYWNldHMgc2hvd246IDxzZWxlY3Qgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PntvcHRpb25zfTwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBMZXBlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHRleHRhcmVhIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgcm93czogJzUnfX0gb25DaGFuZ2U9e3RoaXMucHJvcHMubGVwZXJDaGFuZ2UuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMucHJvcHMubGVwcm9zeX0gPjwvdGV4dGFyZWE+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc3VibWl0TGVwcm9zeX0+U1VCTUlUPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5MZXBlckZvcm0ucHJvcFR5cGVzID0ge1xuICBsZXByb3N5OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxlcGVyQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdWJtaXRMZXByb3N5OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuTGVwZXJGb3JtLmRlZmF1bHRQcm9wcyA9IHsgbGVwcm9zeTogJycgfTtcblxuXG5SZWFjdC5yZW5kZXIoXG4gIDxGYWNldFRlc3QgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWNldHRlc3QnKVxuKTtcbiJdfQ==