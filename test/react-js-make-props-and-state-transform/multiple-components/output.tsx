import * as React from "react";
type MyComponentState = {
  foo?: number,
  bar?: number
};
export default class MyComponent extends React.Component<{}, MyComponentState> {
  render() {
    return <button onClick={this.onclick.bind(this)} />;
  }
  onclick() {
    this.setState({ foo: 1, bar: 2 });
  }
}
interface IAnotherComponentProps extends React.HTMLAttributes<Element> {
  foo: string;
}
export class AnotherComponent extends React.Component<
  IAnotherComponentProps,
  {}
> {
  static propTypes = {
    foo: React.PropTypes.string.isRequired
  };
  render() {
    return <div />;
  }
}
