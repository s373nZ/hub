import { SVGAttributes } from "react";

export function ZapStoreIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        d="M12.208 7.454c-.15.243-.497.254-.751.285-.764.075-1.532.051-2.298.127-.476.06-.474.497-.391.883.107.553.222 1.088.331 1.638.044.192.084.436.245.556.296.197.86-.165 1.232-.082.675.154.212.943.14 1.385-.18.79-.373 1.572-.574 2.364-.22.935-.54 1.059-1.299.466-.785-.586-1.572-1.154-2.345-1.749-.28-.223-.82-.644-.479-1.022.15-.156.402-.256.615-.334.383-.136.585-.246.394-.618-.92-1.652-1.968-3.239-2.927-4.874-.157-.273-.365-.615-.35-.93.063-.53 1.091-.447 1.482-.464.543.013 1.075.003 1.614.007.77.03.93-.172.734-.935-.2-.845-.376-1.687-.55-2.534C6.968 1.29 6.86.809 7.19.6c.337-.17.688.267.879.528 1.36 1.8 2.641 3.668 3.936 5.516.146.213.317.557.211.793l-.008.016Z"
      />
    </svg>
  );
}