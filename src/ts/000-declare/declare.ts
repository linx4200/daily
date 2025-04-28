declare namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

// declare module '*.gif' {
//   const src: string;
//   export default src;
// }


declare module "ShapesModule" {
  const src: string;
  export default src;
}