import { Request, Response } from "express";
export declare class CountryController {
    private countryRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
declare const _default: CountryController;
export default _default;
