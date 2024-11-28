import { ConfigApi, createApiRef } from '@backstage/core-plugin-api';

export type MyApi = {
  getApi: () => Promise<String>;
};
export const myApiRef = createApiRef<MyApi>({
  id: 'plugin.admin.service',
});

export class MyClient implements MyApi {
  configApi: ConfigApi;

  constructor({ configApi }: { configApi: ConfigApi }) {
    this.configApi = configApi;
  }

  async getApi(): Promise<String> {
    console.warn(JSON.stringify(this.configApi))
    return 'Hello World';
  }
}
