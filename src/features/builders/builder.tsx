export default abstract class Builder<T extends any = any> {
  abstract build(props): T;
}
