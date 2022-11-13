import { Request, Response } from "express";
export declare class CountryService {
    private countryRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
