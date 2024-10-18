import { ReactNode } from "react";

// Tはnumber型、Kはジェネリクスとして保持
function test<T extends number, K>(arg: T, ans: K): K | T {
  if (arg > 5) {
    return ans;
  } else {
    return arg;
  }
}

export default function Test() {
  console.log(test(3, "fff"));
  return <div>aaa</div>;
}
