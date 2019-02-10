export declare class Application {
    readonly _port: string;
    private _express;
    private routesLoader;
    private readonly getPort;
    constructor(port: string, express: any);
    run(): void;
    private applicationConfig;
}
