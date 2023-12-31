declare module "*.svg" {
    const content: any;
    export default content;
  }
  declare module "*.png" {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
  }
  declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
  }
  // declare module 'react-router-dom' {
  //   const content: any;
  //   export default content;
  // }