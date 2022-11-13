import { Request, Response } from "express";
export declare class SceneryService {
    private sceneryRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
    saveScenery: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<any>;
    deleteScenery: (req: Request, res: Response) => Promise<void>;
    editScenery: (req: Request, res: Response) => Promise<void>;
    searchScenery: (key: any) => Promise<any>;
    findProductByIdCategory: (id: any) => Promise<any>;
}
declare const _default: SceneryService;
export default _default;
