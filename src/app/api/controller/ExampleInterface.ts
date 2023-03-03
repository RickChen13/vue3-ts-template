export interface ExampleInterface {
  data: {
    server: string;
    token: string;
  };
  method?: "post" | "get";
  chain?: boolean;
  success?: Function;
  error?: Function;
}
