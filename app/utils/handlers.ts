export function handlerStatusColor(type: number) {
  switch (type) {
    case 1:
      return "#00FF37";

    case 2:
      return "#ff0000";

    case 3:
      return "#FFF600";

    default:
      return "#00FF37";
  }
}
