export interface Config {
  /**
   * @visibility frontend
   */
  myPlugin: {
    /**
     * URL to aggregator instance
     */
    baseUrl: string;
    /**
     * @visibility frontend
     */
    providers: Array<{
      /**
       * @visibility frontend
       */
      name: string;
      sync: {
        enabled: boolean;
        timeoutInMinutes: number;
        cron: string;
      };
    }>;
  };
}
